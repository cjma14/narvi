<?php

namespace App\Models;

use App\Traits\HasTranslations;
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
