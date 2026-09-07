<?php

namespace App\Models;

use App\Contracts\Translatable;
use App\Traits\HasTranslations;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Illuminate\Database\Eloquent\Relations\MorphOne;
use Illuminate\Database\Eloquent\SoftDeletes;

class News extends Model implements Translatable
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
     * Campos traducibles.
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

    /**
     * Portada del idioma default (columnas base / admin).
     */
    public function cover(): MorphOne
    {
        return $this->morphOne(Image::class, 'imageable')
            ->where('type', 'cover')
            ->whereIn('language_id', function ($query) {
                $query->select('id')->from('languages')->where('is_default', true);
            });
    }

    /**
     * Portadas por idioma.
     */
    public function covers(): MorphMany
    {
        return $this->morphMany(Image::class, 'imageable')->where('type', 'cover');
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
     * Query base del listado admin.
     */
    public static function forAdminList(bool $withTrashed = false): Builder
    {
        $query = static::with(['cover', 'covers.language', 'author:id,name,email'])->orderByDesc('created_at');

        return $withTrashed ? $query->withTrashed() : $query;
    }

    /**
     * Busca una noticia por id para edición.
     */
    public static function findWithRelations(int|string $id): ?static
    {
        return static::withTrashed()
            ->with(['cover', 'covers.language', 'bodyImages', 'author:id,name,email'])
            ->find($id);
    }

    /**
     * Busca una noticia eliminada por id.
     */
    public static function findTrashed(int|string $id): ?static
    {
        return static::onlyTrashed()->find($id);
    }

    /**
     * Listado público: publicadas y con traducción (title) en el idioma.
     */
    public static function forPublicList(string $lang): Builder
    {
        return static::with(['covers.language', 'author:id,name'])
            ->where('published', true)
            ->whereTranslated($lang)
            ->orderByDesc('created_at');
    }

    /**
     * Detalle público por alias del idioma (exige title traducido si no es default).
     */
    public static function findPublicByAlias(string $alias, string $lang): ?static
    {
        $news = static::findByTranslatedField(
            'url_alias',
            $alias,
            $lang,
            ['covers.language', 'author:id,name']
        );

        if (!$news || !$news->published) {
            return null;
        }

        return $news;
    }

    /**
     * Representación pública: textos vía trait + portada exacta del idioma (o null).
     */
    public function toPublicArray(?string $languageCode = null, bool $includeBody = true): array
    {
        $languageCode = $languageCode ?: Language::defaultCode();
        $data = $this->toArrayWithTranslations($languageCode);

        $public = [
            'id' => $data['id'],
            'title' => $data['title'],
            'url_alias' => $data['url_alias'],
            'published_at' => $data['published_at'] ?? null,
            'created_at' => $data['created_at'] ?? null,
            'cover' => null,
        ];

        if ($includeBody) {
            $public['body'] = $data['body'] ?? null;
        }

        if ($this->relationLoaded('author') && $this->author) {
            $public['author'] = [
                'name' => $this->author->name,
            ];
        }

        $cover = $this->relationLoaded('covers')
            ? $this->covers->first(fn (Image $img) => $img->language?->code === $languageCode)
            : $this->covers()->whereHas('language', fn ($q) => $q->where('code', $languageCode))->first();

        if ($cover) {
            $public['cover'] = $cover->toPublicArray();
        }

        return $public;
    }
}
