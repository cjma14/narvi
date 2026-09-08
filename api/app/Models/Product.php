<?php

namespace App\Models;

use App\Contracts\Translatable;
use App\Traits\HasTranslations;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Product extends Model implements Translatable
{
    use HasTranslations, SoftDeletes;

    protected $fillable = [
        'title',
        'url_alias',
        'description',
        'primary_button_url',
        'primary_button_title',
        'secondary_button_url',
        'secondary_button_title',
        'specifications',
        'stock',
    ];

    protected $casts = [
        'specifications' => 'array',
        'stock' => 'boolean',
    ];

    /**
     * Campos traducibles del producto
     */
    protected $translatable = [
        'title',
        'url_alias',
        'description',
        'primary_button_title',
        'secondary_button_title',
        'specifications',
    ];

    /**
     * Get the product images
     */
    public function images(): HasMany
    {
        return $this->hasMany(ProductImage::class)->orderBy('order');
    }
}
