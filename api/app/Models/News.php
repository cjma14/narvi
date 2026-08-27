<?php

namespace App\Models;

use App\Traits\HasTranslations;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Illuminate\Database\Eloquent\Relations\MorphOne;
use Illuminate\Database\Eloquent\SoftDeletes;

class News extends Model
{
    use HasTranslations, SoftDeletes;

    protected $table = 'news';

    protected $fillable = [
        'title',
        'url_alias',
        'body',
        'published',
        'published_at',
        'author_id',
        'images_purged_at',
    ];

    protected $casts = [
        'published' => 'boolean',
        'published_at' => 'datetime',
        'images_purged_at' => 'datetime',
    ];

    /**
     * Campos traducibles (preparados para multi-idioma futuro).
     */
    protected $translatable = [
        'title',
        'url_alias',
        'body',
    ];

    public function author(): BelongsTo
    {
        return $this->belongsTo(User::class, 'author_id');
    }

    public function cover(): MorphOne
    {
        return $this->morphOne(Image::class, 'imageable')->where('type', 'cover');
    }

    public function bodyImages(): MorphMany
    {
        return $this->morphMany(Image::class, 'imageable')->where('type', 'body');
    }

    public function images(): MorphMany
    {
        return $this->morphMany(Image::class, 'imageable');
    }

    /**
     * Query base del listado admin: incluye portada/autor y ordena por más reciente.
     */
    public static function forAdminList(bool $withTrashed = false): Builder
    {
        $query = static::with(['cover', 'author:id,name,email'])->orderByDesc('created_at');

        return $withTrashed ? $query->withTrashed() : $query;
    }

    /**
     * Busca una noticia por id para edición (incluye eliminadas), con sus relaciones cargadas.
     */
    public static function findWithRelations(int|string $id): ?static
    {
        return static::withTrashed()
            ->with(['cover', 'bodyImages', 'author:id,name,email'])
            ->find($id);
    }

    /**
     * Busca una noticia eliminada (soft delete) por id.
     */
    public static function findTrashed(int|string $id): ?static
    {
        return static::onlyTrashed()->find($id);
    }

    /**
     * Query base del listado público: noticias publicadas, con portada/autor, más recientes primero.
     */
    public static function forPublicList(): Builder
    {
        return static::with(['cover', 'author:id,name'])
            ->where('published', true)
            ->orderByDesc('created_at');
    }

    /**
     * Busca una noticia publicada por alias, con fallback a la traducción del alias.
     */
    public static function findPublicByAlias(string $alias, string $lang): ?static
    {
        $news = static::with(['cover', 'author:id,name'])
            ->where('published', true)
            ->where('url_alias', $alias)
            ->first();

        if (!$news) {
            $translation = Translation::where('field', 'url_alias')
                ->where('value', $alias)
                ->where('translatable_type', static::class)
                ->whereHas('language', function ($query) use ($lang) {
                    $query->where('code', $lang);
                })
                ->first();

            if ($translation) {
                $news = static::with(['cover', 'author:id,name'])
                    ->where('published', true)
                    ->where('id', $translation->translatable_id)
                    ->first();
            }
        }

        return $news;
    }

    /**
     * Representación segura para endpoints públicos (sin IDs internos ni metadatos de admin).
     */
    public function toPublicArray(?string $languageCode = null, bool $includeBody = true): array
    {
        $data = $this->toArrayWithTranslations($languageCode);

        $public = [
            'id' => $data['id'],
            'title' => $data['title'],
            'url_alias' => $data['url_alias'],
            'published_at' => $data['published_at'] ?? null,
            'created_at' => $data['created_at'] ?? null,
        ];

        if ($includeBody) {
            $public['body'] = $data['body'] ?? null;
        }

        if ($this->relationLoaded('author') && $this->author) {
            $public['author'] = [
                'name' => $this->author->name,
            ];
        }

        if ($this->relationLoaded('cover') && $this->cover) {
            $public['cover'] = $this->cover->toPublicArray();
        }

        return $public;
    }
}
