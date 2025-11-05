<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Translation extends Model
{
    protected $fillable = [
        'translatable_type',
        'translatable_id',
        'language_id',
        'field',
        'value',
    ];

    /**
     * Get the owning translatable model (Product, Category, etc.)
     */
    public function translatable()
    {
        return $this->morphTo();
    }

    /**
     * Get the language that owns the translation
     */
    public function language()
    {
        return $this->belongsTo(Language::class);
    }
}
