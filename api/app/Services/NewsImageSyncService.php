<?php

namespace App\Services;

use App\Models\Image;
use App\Models\News;
use DOMDocument;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\ValidationException;

class NewsImageSyncService
{
    /**
     * Vincula portada e imágenes del body a la noticia.
     * Las imágenes que dejan de referenciarse quedan huérfanas (imageable_id = null).
     */
    public function sync(News $news, ?int $coverImageId, ?string $body): void
    {
        $this->syncCover($news, $coverImageId);
        $this->syncBodyImages($news, $body);
    }

    protected function syncCover(News $news, ?int $coverImageId): void
    {
        $currentCover = $news->cover()->first();

        if (!$coverImageId) {
            if ($currentCover) {
                $this->unlinkImage($currentCover);
            }

            return;
        }

        $cover = Image::query()
            ->where('id', $coverImageId)
            ->where('type', 'cover')
            ->whereNull('purged_at')
            ->first();

        if (!$cover) {
            throw ValidationException::withMessages([
                'cover_image_id' => ['La imagen de portada no existe o no es de tipo cover.'],
            ]);
        }

        if (
            $cover->imageable_id !== null
            && !(
                $cover->imageable_type === News::class
                && (int) $cover->imageable_id === (int) $news->id
            )
        ) {
            throw ValidationException::withMessages([
                'cover_image_id' => ['La imagen de portada ya está vinculada a otra entrada.'],
            ]);
        }

        if ($currentCover && (int) $currentCover->id !== (int) $cover->id) {
            $this->unlinkImage($currentCover);
        }

        $cover->update([
            'imageable_type' => News::class,
            'imageable_id' => $news->id,
        ]);
    }

    protected function syncBodyImages(News $news, ?string $body): void
    {
        $referencedPaths = $this->extractImagePathsFromHtml($body ?? '');

        $referencedIds = [];

        if (!empty($referencedPaths)) {
            $images = Image::query()
                ->where('type', 'body')
                ->whereNull('purged_at')
                ->whereIn('path', $referencedPaths)
                ->get();

            foreach ($images as $image) {
                if (
                    $image->imageable_id !== null
                    && !(
                        $image->imageable_type === News::class
                        && (int) $image->imageable_id === (int) $news->id
                    )
                ) {
                    // Imagen ya vinculada a otra noticia: se ignora (el HTML puede
                    // reutilizar URLs, pero no reasignamos ownership forzosamente).
                    continue;
                }

                $image->update([
                    'imageable_type' => News::class,
                    'imageable_id' => $news->id,
                ]);

                $referencedIds[] = $image->id;
            }
        }

        // Desvincular body images que ya no están en el HTML
        $staleQuery = $news->bodyImages();

        if (!empty($referencedIds)) {
            $staleQuery->whereNotIn('id', $referencedIds);
        }

        $staleQuery->get()->each(fn (Image $image) => $this->unlinkImage($image));
    }

    /**
     * @return array<int, string>
     */
    protected function extractImagePathsFromHtml(string $html): array
    {
        if (trim($html) === '') {
            return [];
        }

        $previous = libxml_use_internal_errors(true);
        $dom = new DOMDocument();
        $dom->loadHTML('<?xml encoding="UTF-8">' . $html, LIBXML_HTML_NOIMPLIED | LIBXML_HTML_NODEFDTD);
        libxml_clear_errors();
        libxml_use_internal_errors($previous);

        $paths = [];
        $storagePrefix = rtrim(Storage::disk(config('images.disk', 'public'))->url(''), '/');

        foreach ($dom->getElementsByTagName('img') as $img) {
            $src = $img->getAttribute('src');
            if ($src === '') {
                continue;
            }

            $path = $this->urlToStoragePath($src, $storagePrefix);
            if ($path !== null) {
                $paths[] = $path;
            }
        }

        return array_values(array_unique($paths));
    }

    protected function urlToStoragePath(string $src, string $storagePrefix): ?string
    {
        // URL absoluta del disco public: http://host/storage/images/...
        if (str_starts_with($src, $storagePrefix . '/')) {
            return ltrim(substr($src, strlen($storagePrefix)), '/');
        }

        // Ruta relativa tipo /storage/images/... o storage/images/...
        if (preg_match('#(?:^|/)storage/(.+)$#', $src, $matches)) {
            return $matches[1];
        }

        return null;
    }

    protected function unlinkImage(Image $image): void
    {
        $image->update([
            'imageable_type' => null,
            'imageable_id' => null,
        ]);
    }
}
