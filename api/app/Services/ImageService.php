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

    /**
     * Rechaza archivos cuyo MIME no esté en la lista permitida.
     */
    public function assertAllowedMime(UploadedFile $file, Closure $fail): void
    {
        $mime = $file->getMimeType();
        $allowed = config('images.allowed_mimetypes', []);

        if (!in_array($mime, $allowed, true)) {
            $fail('El archivo debe ser JPG, PNG o AVIF.');
        }
    }

    /**
     * Valida que la portada tenga al menos el ancho mínimo configurado.
     */
    public function assertCoverDimensions(UploadedFile $file, Closure $fail): void
    {
        $manager = new ImageManager(new Driver());
        $image = $manager->read($file->getRealPath());
        $width = $image->width();

        if ($width <= 0) {
            $fail('No se pudo determinar el ancho de la imagen en píxeles.');

            return;
        }

        $minWidth = (int) config('images.cover_min_width', 720);

        if ($width < $minWidth) {
            $fail(sprintf(
                'La portada debe tener al menos %d px de ancho. Tu imagen mide %d px de ancho.',
                $minWidth,
                $width
            ));
        }
    }
}
