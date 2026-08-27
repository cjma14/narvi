<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\MorphTo;
use Illuminate\Support\Facades\Storage;

class Image extends Model
{
    protected $fillable = [
        'imageable_type',
        'imageable_id',
        'type',
        'path',
        'original_name',
        'width',
        'height',
        'size',
        'uploaded_by',
        'purged_at',
    ];

    protected $casts = [
        'width' => 'integer',
        'height' => 'integer',
        'size' => 'integer',
        'purged_at' => 'datetime',
    ];

    protected $appends = [
        'url',
    ];

    public function imageable(): MorphTo
    {
        return $this->morphTo();
    }

    public function uploader(): BelongsTo
    {
        return $this->belongsTo(User::class, 'uploaded_by');
    }

    public function getUrlAttribute(): ?string
    {
        if (!$this->path || $this->purged_at) {
            return null;
        }

        return Storage::disk(config('images.disk'))->url($this->path);
    }

    public function scopeOrphan($query)
    {
        return $query->whereNull('imageable_id')->whereNull('purged_at');
    }

    public function scopeNotPurged($query)
    {
        return $query->whereNull('purged_at');
    }

    /**
     * Atributos expuestos en respuestas públicas.
     */
    public function toPublicArray(): array
    {
        return array_filter([
            'url' => $this->url,
            'width' => $this->width,
            'height' => $this->height,
        ], fn ($value) => $value !== null);
    }
}
