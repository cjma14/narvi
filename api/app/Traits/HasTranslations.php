<?php

namespace App\Traits;

use App\Models\Language;
use App\Models\Translation;

trait HasTranslations
{
    /**
     * Get all translations for this model
     */
    public function translations()
    {
        return $this->morphMany(Translation::class, 'translatable');
    }

    /**
     * Get translation for a specific field and language
     *
     * @param string $field
     * @param string|null $languageCode
     * @return string|null
     */
    public function translate(string $field, ?string $languageCode = null): ?string
    {
        $languageCode = $languageCode ?? $this->getDefaultLanguageCode();

        $translation = $this->translations()
            ->where('field', $field)
            ->whereHas('language', function ($query) use ($languageCode) {
                $query->where('code', $languageCode);
            })
            ->first();

        return $translation ? $translation->value : null;
    }

    /**
     * Get all translations for a specific field (all languages)
     *
     * @param string $field
     * @return array
     */
    public function getTranslations(string $field): array
    {
        return $this->translations()
            ->where('field', $field)
            ->with('language')
            ->get()
            ->mapWithKeys(function ($translation) {
                return [$translation->language->code => $translation->value];
            })
            ->toArray();
    }

    /**
     * Save translation for a specific field and language
     *
     * @param string $field
     * @param string|array $value
     * @param string $languageCode
     * @return Translation
     */
    public function saveTranslation(string $field, string|array $value, string $languageCode): Translation
    {
        $language = Language::where('code', $languageCode)->firstOrFail();

        return $this->translations()->updateOrCreate(
            [
                'field' => $field,
                'language_id' => $language->id,
            ],
            [
                'value' => is_array($value) ? json_encode($value) : $value,
            ]
        );
    }

    /**
     * Get the default language code
     *
     * @return string
     */
    protected function getDefaultLanguageCode(): string
    {
        return app()->getLocale() ?? Language::getDefault()?->code ?? 'es';
    }

    /**
     * Get all translatable fields (override in model if needed)
     *
     * @return array
     */
    public function getTranslatableFields(): array
    {
        return $this->translatable ?? [];
    }

    /**
     * Get the model as array with translations applied for a specific language
     *
     * @param string|null $languageCode
     * @return array
     */
    public function toArrayWithTranslations(?string $languageCode = null): array
    {
        $data = $this->toArray();

        // Si no se especifica idioma o es el por defecto, devolver sin cambios
        if (!$languageCode || $languageCode === 'es') {
            return $data;
        }

        // Aplicar traducciones
        foreach ($this->getTranslatableFields() as $field) {
            $translation = $this->translate($field, $languageCode);
            if ($translation !== null) {
                $decoded = json_decode($translation, true);
                $data[$field] = $decoded !== null ? $decoded : $translation;
            }
        }

        return $data;
    }

    /**
     * Get all translations grouped by language code
     * Returns structure like: { "en": { "title": "...", "description": "..." }, "fr": {...} }
     *
     * @return array
     */
    public function getAllTranslationsGrouped(): array
    {
        $grouped = [];

        // Obtener todas las traducciones de este modelo
        $translations = $this->translations()->with('language')->get();

        foreach ($translations as $translation) {
            $langCode = $translation->language->code;
            $field = $translation->field;
            
            // Inicializar el array del idioma si no existe
            if (!isset($grouped[$langCode])) {
                $grouped[$langCode] = [];
            }

            // Decodificar si es JSON (como specifications)
            $value = $translation->value;
            $decoded = json_decode($value, true);
            $grouped[$langCode][$field] = $decoded !== null ? $decoded : $value;
        }

        return $grouped;
    }

    /**
     * Load translations as an attribute
     * This makes translations available as $model->translations_data
     *
     * @return $this
     */
    public function loadTranslationsAttribute()
    {
        $this->append('translations_data');
        return $this;
    }

    /**
     * Accessor for translations_data attribute
     *
     * @return array
     */
    public function getTranslationsDataAttribute(): array
    {
        return $this->getAllTranslationsGrouped();
    }
}
