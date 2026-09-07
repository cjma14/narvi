<?php

namespace App\Contracts;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Relations\MorphMany;

/**
 * Contrato de modelos con campos traducibles vía morph translations.
 */
interface Translatable
{
    /**
     * Relación morph de traducciones.
     */
    public function translations(): MorphMany;

    /**
     * Valor traducido de un campo (null si no hay fila).
     */
    public function translate(string $field, ?string $languageCode = null): ?string;

    /**
     * Campos que aceptan traducción.
     *
     * @return list<string>
     */
    public function getTranslatableFields(): array;

    /**
     * Campo mínimo que marca “existe traducción” para un idioma (p. ej. title).
     */
    public function getTranslationPresenceField(): string;

    /**
     * True si el registro está disponible en ese idioma.
     */
    public function isTranslated(string $languageCode): bool;

    /**
     * Modelo como array con traducciones aplicadas de forma transparente.
     *
     * @return array<string, mixed>
     */
    public function toArrayWithTranslations(?string $languageCode = null): array;

    /**
     * Scope: filas disponibles en el idioma (idioma default = sin filtro extra).
     */
    public function scopeWhereTranslated(Builder $query, string $languageCode): Builder;
}
