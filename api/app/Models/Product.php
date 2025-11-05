<?php

namespace App\Models;

use App\Traits\HasTranslations;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasTranslations;

    protected $fillable = [
        'title',
        'url_alias',
        'description',
        'primary_button_url',
        'primary_button_title',
        'secondary_button_url',
        'secondary_button_title',
        'specifications',
    ];

    protected $casts = [
        'specifications' => 'array',
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
    public function images()
    {
        return $this->hasMany(ProductImage::class)->orderBy('order');
    }
}
