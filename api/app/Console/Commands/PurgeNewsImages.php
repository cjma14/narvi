<?php

namespace App\Console\Commands;

use App\Models\Image;
use App\Models\News;
use App\Services\ImageService;
use Illuminate\Console\Command;

class PurgeNewsImages extends Command
{
    protected $signature = 'news:purge-images {--dry-run : Solo muestra lo que se eliminaría}';

    protected $description = 'Elimina físicamente imágenes de noticias soft-deleted (>7 días) e imágenes huérfanas (>7 días)';

    public function handle(ImageService $imageService): int
    {
        $days = (int) config('images.purge_after_days', 7);
        $cutoff = now()->subDays($days);
        $dryRun = (bool) $this->option('dry-run');

        if ($dryRun) {
            $this->warn('Modo dry-run: no se eliminará nada.');
        }

        $this->info("Purga de imágenes con más de {$days} días (antes de {$cutoff->toDateTimeString()})");

        $newsPurged = $this->purgeDeletedNewsImages($imageService, $cutoff, $dryRun);
        $orphansPurged = $this->purgeOrphanImages($imageService, $cutoff, $dryRun);

        $this->info("Noticias procesadas: {$newsPurged}");
        $this->info("Imágenes huérfanas procesadas: {$orphansPurged}");

        return self::SUCCESS;
    }

    protected function purgeDeletedNewsImages(ImageService $imageService, $cutoff, bool $dryRun): int
    {
        $newsItems = News::onlyTrashed()
            ->whereNull('images_purged_at')
            ->where('deleted_at', '<=', $cutoff)
            ->with(['images' => fn ($q) => $q->whereNull('purged_at')])
            ->get();

        $count = 0;

        foreach ($newsItems as $news) {
            $this->line("Noticia #{$news->id} ({$news->url_alias}): {$news->images->count()} imagen(es)");

            if ($dryRun) {
                $count++;
                continue;
            }

            foreach ($news->images as $image) {
                $imageService->deleteFile($image);
                $image->update(['purged_at' => now()]);
            }

            $news->update(['images_purged_at' => now()]);
            $count++;
        }

        return $count;
    }

    protected function purgeOrphanImages(ImageService $imageService, $cutoff, bool $dryRun): int
    {
        $orphans = Image::query()
            ->whereNull('imageable_id')
            ->whereNull('purged_at')
            ->where('created_at', '<=', $cutoff)
            ->get();

        $count = 0;

        foreach ($orphans as $image) {
            $this->line("Huérfana #{$image->id} ({$image->path})");

            if ($dryRun) {
                $count++;
                continue;
            }

            $imageService->deleteFile($image);
            $image->delete();
            $count++;
        }

        return $count;
    }
}
