<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProductImage extends Model
{
    protected $fillable = [
        'product_id',
        'path',
        'order',
    ];

    protected $casts = [
        'order' => 'integer',
    ];

    protected $appends = [
        'url',
    ];

    /**
     * Get the product that owns the image
     */
    public function product()
    {
        return $this->belongsTo(Product::class);
    }

    public function getUrlAttribute()
    {
        return 'storage/' . $this->path;
    }
}
