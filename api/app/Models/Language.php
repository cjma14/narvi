<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Language extends Model
{
    protected $fillable = [
        'code',
        'name',
        'is_default',
    ];

    protected $casts = [
        'is_default' => 'boolean',
    ];

    /**
     * Get all translations for this language
     */
    public function translations()
    {
        return $this->hasMany(Translation::class);
    }

    /**
     * Scope to get the default language
     */
    public function scopeDefault($query)
    {
        return $query->where('is_default', true);
    }

    /**
     * Get the default language
     */
    public static function getDefault()
    {
        return static::default()->first();
    }
}
