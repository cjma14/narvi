<?php

namespace App\Traits;

use App\Models\Language;
use App\Models\Translation;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Relations\MorphMany;

trait HasTranslations
{
    /**
     * Relación morph de traducciones.
     */
    public function translations(): MorphMany
    {
        return $this->morphMany(Translation::class, 'translatable');
    }

    /**
     * Valor traducido de un campo para el idioma dado.
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
     * Traducciones de un campo indexadas por código de idioma.
     *
     * @return array<string, string>
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
     * Guarda o actualiza la traducción de un campo.
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
     * Idioma canónico: columnas base del modelo (languages.is_default).
     */
    protected function getDefaultLanguageCode(): string
    {
        return Language::defaultCode();
    }

    /**
     * Campos traducibles (override vía $translatable en el modelo).
     *
     * @return list<string>
     */
    public function getTranslatableFields(): array
    {
        return $this->translatable ?? [];
    }

    /**
     * Campo mínimo que indica presencia de traducción; override en el modelo si hace falta.
     */
    public function getTranslationPresenceField(): string
    {
        return 'title';
    }

    /**
     * True si el registro está disponible en $languageCode.
     *
     * Idioma default = columnas base (siempre disponible).
     * Otro idioma = existe valor no vacío en el campo de presencia (p. ej. title).
     */
    public function isTranslated(string $languageCode): bool
    {
        if ($languageCode === $this->getDefaultLanguageCode()) {
            return true;
        }

        $value = $this->translate($this->getTranslationPresenceField(), $languageCode);

        return $value !== null && trim($value) !== '';
    }

    /**
     * Solo filas disponibles en el idioma (default = sin filtro de translations).
     */
    public function scopeWhereTranslated(Builder $query, string $languageCode): Builder
    {
        if ($languageCode === Language::defaultCode()) {
            return $query;
        }

        $field = (new static)->getTranslationPresenceField();

        return $query->whereHas('translations', function ($q) use ($languageCode, $field) {
            $q->where('field', $field)
                ->whereNotNull('value')
                ->where('value', '!=', '')
                ->whereHas('language', fn ($l) => $l->where('code', $languageCode));
        });
    }

    /**
     * Busca por valor de un campo en el idioma: columna base (default) o fila translation.
     *
     * @param  list<string>  $with
     */
    public static function findByTranslatedField(
        string $field,
        string $value,
        string $languageCode,
        array $with = []
    ): ?static {
        if ($languageCode === Language::defaultCode()) {
            return static::with($with)->where($field, $value)->first();
        }

        $translation = Translation::query()
            ->where('field', $field)
            ->where('value', $value)
            ->where('translatable_type', static::class)
            ->whereHas('language', fn ($q) => $q->where('code', $languageCode))
            ->first();

        if (!$translation) {
            return null;
        }

        $model = static::with($with)->where('id', $translation->translatable_id)->first();

        return $model && $model->isTranslated($languageCode) ? $model : null;
    }

    /**
     * Array del modelo con traducciones aplicadas de forma transparente.
     *
     * @return array<string, mixed>
     */
    public function toArrayWithTranslations(?string $languageCode = null): array
    {
        $data = $this->toArray();

        // Idioma default = columnas base; no consultar translations
        if (!$languageCode || $languageCode === $this->getDefaultLanguageCode()) {
            return $data;
        }

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
     * Traducciones agrupadas por código de idioma.
     *
     * @return array<string, array<string, mixed>>
     */
    public function getAllTranslationsGrouped(): array
    {
        $grouped = [];
        $translations = $this->translations()->with('language')->get();

        foreach ($translations as $translation) {
            $langCode = $translation->language->code;
            $field = $translation->field;

            if (!isset($grouped[$langCode])) {
                $grouped[$langCode] = [];
            }

            $value = $translation->value;
            $decoded = json_decode($value, true);
            $grouped[$langCode][$field] = $decoded !== null ? $decoded : $value;
        }

        return $grouped;
    }

    /**
     * Expone translations_data al serializar el modelo.
     */
    public function loadTranslationsAttribute(): static
    {
        $this->append('translations_data');

        return $this;
    }

    /**
     * Accessor de translations_data.
     *
     * @return array<string, array<string, mixed>>
     */
    public function getTranslationsDataAttribute(): array
    {
        return $this->getAllTranslationsGrouped();
    }
}
