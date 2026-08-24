<?php

namespace App\Services;

use App\Models\Image;
use Closure;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Intervention\Image\Drivers\Imagick\Driver;
use Intervention\Image\ImageManager;

class ImageService
{
    public function store(UploadedFile $file, string $type, ?int $userId = null): Image
    {
        // Imagick: GD reporta AVIF Support pero imageavif() escribe archivos vacíos
        // en el runtime Sail/Ubuntu. Imagick codifica AVIF correctamente.
        $manager = new ImageManager(new Driver());
        $image = $manager->read($file->getRealPath());

        $maxWidth = config("images.max_width.{$type}", 1600);
        $image->scaleDown(width: $maxWidth);

        $encoded = (string) $image->toAvif(quality: config('images.avif_quality', 60));

        $relativePath = sprintf(
            'images/%s/%s/%s.avif',
            $type,
            now()->format('Y/m'),
            (string) Str::ulid()
        );

        $disk = config('images.disk', 'public');
        Storage::disk($disk)->put($relativePath, $encoded);

        return Image::create([
            'type' => $type,
            'path' => $relativePath,
            'original_name' => $file->getClientOriginalName(),
            'width' => $image->width(),
            'height' => $image->height(),
            'size' => strlen($encoded),
            'uploaded_by' => $userId,
        ]);
    }

    public function deleteFile(Image $image): bool
    {
        if (!$image->path) {
            return false;
        }

        $disk = config('images.disk', 'public');

        if (Storage::disk($disk)->exists($image->path)) {
            return Storage::disk($disk)->delete($image->path);
        }

        return false;
    }

    public function assertAllowedMime(UploadedFile $file, Closure $fail): void
    {
        $mime = $file->getMimeType();
        $allowed = config('images.allowed_mimetypes', []);

        if (!in_array($mime, $allowed, true)) {
            $fail('El archivo debe ser JPG, PNG o AVIF.');
        }
    }

    public function assertCoverRatio(UploadedFile $file, Closure $fail): void
    {
        $manager = new ImageManager(new Driver());
        $image = $manager->read($file->getRealPath());
        $width = $image->width();
        $height = $image->height();

        if ($height <= 0) {
            $fail('No se pudo determinar la proporción de la imagen.');

            return;
        }

        $ratio = $width / $height;
        $expected = (float) config('images.cover_ratio', 3.0);
        $tolerance = (float) config('images.cover_ratio_tolerance', 0.02);

        if (abs($ratio - $expected) > ($expected * $tolerance)) {
            $fail(sprintf(
                'La portada debe tener proporción 3:1 (actual: %.2f:1).',
                $ratio
            ));
        }
    }
}
