/**
 * ProductFormFields Component
 * Campos del formulario de producto para un idioma específico
 */

import type { UseFormRegister, FieldErrors } from 'react-hook-form';
import type { ProductFormData } from '../../../types/shared';

interface ProductFormFieldsProps {
  lang: 'es' | 'en';
  register: UseFormRegister<ProductFormData>;
  errors: FieldErrors<ProductFormData>;
  setValue: (name: any, value: any) => void;
  toSlug: (text: string) => string;
  specifications: string[];
  onUpdateSpec: (index: number, value: string) => void;
  onRemoveSpec: (index: number) => void;
  onAddSpec: () => void;
}

export default function ProductFormFields({
  lang,
  register,
  errors,
  setValue,
  toSlug,
  specifications,
  onUpdateSpec,
  onRemoveSpec,
  onAddSpec,
}: ProductFormFieldsProps) {
  const isSpanish = lang === 'es';
  const prefix = isSpanish ? '' : '_en';

  return (
    <div className="space-y-4">
      {/* Título */}
      <div>
        <label htmlFor={`title${prefix}`} className="block text-sm font-medium text-gray-700 mb-1">
          {isSpanish ? 'Título' : 'Title'} {isSpanish && <span className="text-red-500">*</span>}
        </label>
        <input
          type="text"
          id={`title${prefix}`}
          {...register(`title${prefix}` as any, isSpanish ? {
            required: 'El título es requerido',
            minLength: { value: 3, message: 'Mínimo 3 caracteres' }
          } : {})}
          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-admin-secondary focus:border-admin-secondary transition-colors ${
            errors[`title${prefix}` as keyof FieldErrors<ProductFormData>] ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors[`title${prefix}` as keyof FieldErrors<ProductFormData>] && (
          <p className="mt-1 text-sm text-red-500">{errors[`title${prefix}` as keyof FieldErrors<ProductFormData>]?.message}</p>
        )}
      </div>

      {/* URL Alias */}
      <div>
        <label htmlFor={`url_alias${prefix}`} className="block text-sm font-medium text-gray-700 mb-1">
          URL Alias {isSpanish && <span className="text-red-500">*</span>}
        </label>
        <input
          type="text"
          id={`url_alias${prefix}`}
          {...register(`url_alias${prefix}` as any, {
            ...(isSpanish ? {
              required: 'El URL alias es requerido',
              minLength: { value: 3, message: 'Mínimo 3 caracteres' }
            } : {
              pattern: {
                value: /^[a-z0-9\-\/]*$/,
                message: 'Sólo minúsculas, números, guiones y /. Ej: /sales/product-example'
              }
            }),
            onChange: (e) => {
              const slugified = toSlug(e.target.value);
              setValue(`url_alias${prefix}`, slugified);
            }
          })}
          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-admin-secondary focus:border-admin-secondary transition-colors ${
            errors[`url_alias${prefix}` as keyof FieldErrors<ProductFormData>] ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors[`url_alias${prefix}` as keyof FieldErrors<ProductFormData>] && (
          <p className="mt-1 text-sm text-red-500">{errors[`url_alias${prefix}` as keyof FieldErrors<ProductFormData>]?.message}</p>
        )}
      </div>

      {/* Descripción */}
      <div>
        <label htmlFor={`description${prefix}`} className="block text-sm font-medium text-gray-700 mb-1">
          {isSpanish ? 'Descripción' : 'Description'}
        </label>
        <textarea
          id={`description${prefix}`}
          {...register(`description${prefix}` as any)}
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-admin-secondary focus:border-admin-secondary transition-colors"
        />
      </div>

      {/* Botones */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor={`primary_button_title${prefix}`} className="block text-sm font-medium text-gray-700 mb-1">
            {isSpanish ? 'Título Botón Principal' : 'Primary Button Title'}
          </label>
          <input
            type="text"
            id={`primary_button_title${prefix}`}
            {...register(`primary_button_title${prefix}` as any)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-admin-secondary focus:border-admin-secondary transition-colors"
          />
        </div>
        {isSpanish && (
          <div>
            <label htmlFor="primary_button_url" className="block text-sm font-medium text-gray-700 mb-1">
              URL Botón Principal
            </label>
            <input
              type="url"
              id="primary_button_url"
              {...register('primary_button_url', {
                pattern: {
                  value: /^(https?:\/\/)([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/.*)?$/,
                  message: 'Debe ser una URL válida completa (http:// o https://)'
                }
              })}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-admin-secondary focus:border-admin-secondary transition-colors ${
                errors.primary_button_url ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.primary_button_url && <p className="mt-1 text-sm text-red-500">{errors.primary_button_url.message}</p>}
          </div>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor={`secondary_button_title${prefix}`} className="block text-sm font-medium text-gray-700 mb-1">
            {isSpanish ? 'Título Botón Secundario' : 'Secondary Button Title'}
          </label>
          <input
            type="text"
            id={`secondary_button_title${prefix}`}
            {...register(`secondary_button_title${prefix}` as any)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-admin-secondary focus:border-admin-secondary transition-colors"
          />
        </div>
        {isSpanish && (
          <div>
            <label htmlFor="secondary_button_url" className="block text-sm font-medium text-gray-700 mb-1">
              URL Botón Secundario
            </label>
            <input
              type="url"
              id="secondary_button_url"
              {...register('secondary_button_url', {
                pattern: {
                  value: /^(https?:\/\/)([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/.*)?$/,
                  message: 'Debe ser una URL válida completa (http:// o https://)'
                }
              })}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-admin-secondary focus:border-admin-secondary transition-colors ${
                errors.secondary_button_url ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.secondary_button_url && <p className="mt-1 text-sm text-red-500">{errors.secondary_button_url.message}</p>}
          </div>
        )}
      </div>

      {/* Especificaciones */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {isSpanish ? 'Especificaciones' : 'Specifications'}
        </label>
        <div className="space-y-2">
          {specifications.map((spec, index) => (
            <div key={index} className="flex gap-2">
              <input
                type="text"
                value={spec}
                onChange={(e) => onUpdateSpec(index, e.target.value)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-admin-secondary focus:border-admin-secondary transition-colors"
              />
              <button
                type="button"
                onClick={() => onRemoveSpec(index)}
                className="px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={onAddSpec}
            className="w-full px-4 py-2 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-admin-secondary hover:text-admin-secondary transition-colors"
          >
            + {isSpanish ? 'Agregar Especificación' : 'Add Specification'}
          </button>
        </div>
      </div>
    </div>
  );
}
