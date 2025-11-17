/**
 * ProductFormFields Component
 * Campos del formulario de producto para un idioma específico
 */

import type { UseFormRegister, FieldErrors, UseFormWatch } from 'react-hook-form';
import type { ProductFormData } from '../../../types/shared';

interface ProductFormFieldsProps {
  lang: 'es' | 'en';
  register: UseFormRegister<ProductFormData>;
  errors: FieldErrors<ProductFormData>;
  setValue: (name: any, value: any) => void;
  watch: UseFormWatch<ProductFormData>;
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
  watch,
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
          {isSpanish ? 'Título' : 'Title'} <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id={`title${prefix}`}
          placeholder={isSpanish ? 'Ej: Trailer para tubería JEREH 2012' : 'Ex: JEREH 2012 Coiled Tubing Trailer'}
          {...register(`title${prefix}` as any, {
            required: isSpanish ? 'El título es requerido' : 'Title is required',
            minLength: { value: 3, message: isSpanish ? 'Mínimo 3 caracteres' : 'Minimum 3 characters' }
          })}
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
          URL Alias <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id={`url_alias${prefix}`}
          placeholder={isSpanish ? 'Ej: jereh-trailer-2012' : 'Ex: jereh-trailer-2012'}
          {...register(`url_alias${prefix}` as any, {
            required: isSpanish ? 'El URL alias es requerido' : 'URL alias is required',
            minLength: { value: 3, message: isSpanish ? 'Mínimo 3 caracteres' : 'Minimum 3 characters' },
            pattern: {
              value: /^\/[a-z0-9\-\/]+$|^[a-z0-9\-\/]+$/,
              message: isSpanish ? 'Solo minúsculas, números, guiones y "/" (sin espacios ni https)' : 'Only lowercase, numbers, hyphens and "/" (no spaces or https)'
            },
            onChange: (e) => {
              const value = e.target.value
                .toLowerCase()
                .replace(/[^a-z0-9\-\/\s]/g, '') 
                .replace(/\s+/g, '-');            
              setValue(`url_alias${prefix}`, value);
            }
          })}
          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-admin-secondary focus:border-admin-secondary transition-colors ${
            errors[`url_alias${prefix}` as keyof FieldErrors<ProductFormData>] ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors[`url_alias${prefix}` as keyof FieldErrors<ProductFormData>] && (
          <p className="mt-1 text-sm text-red-500">{errors[`url_alias${prefix}` as keyof FieldErrors<ProductFormData>]?.message}</p>
        )}
        <p className="mt-1 text-xs text-gray-500">
          {isSpanish ? 'Ruta final: /es/sales/' : 'Final path: /sales/'}<span className="font-mono">{watch(`url_alias${prefix}`) || '...'}</span>
        </p>
      </div>

      {/* Descripción */}
      <div>
        <label htmlFor={`description${prefix}`} className="block text-sm font-medium text-gray-700 mb-1">
          {isSpanish ? 'Descripción' : 'Description'}
        </label>
        <textarea
          id={`description${prefix}`}
          placeholder={isSpanish ? 'Describe las características principales del producto...' : 'Describe the main features of the product...'}
          {...register(`description${prefix}` as any)}
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-admin-secondary focus:border-admin-secondary transition-colors"
        />
      </div>

      {/* Botones */}
      <div className="space-y-4">
        {/* Títulos de botones (traducibles por idioma) */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor={`primary_button_title${prefix}`} className="block text-sm font-medium text-gray-700 mb-1">
              {isSpanish ? 'Título Botón Principal' : 'Primary Button Title'}
            </label>
            <input
              type="text"
              id={`primary_button_title${prefix}`}
              placeholder={isSpanish ? 'Ej: Ver detalles' : 'Ex: View details'}
              {...register(`primary_button_title${prefix}` as any)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-admin-secondary focus:border-admin-secondary transition-colors"
            />
          </div>
          <div>
            <label htmlFor={`secondary_button_title${prefix}`} className="block text-sm font-medium text-gray-700 mb-1">
              {isSpanish ? 'Título Botón Secundario (Opcional)' : 'Secondary Button Title (Optional)'}
            </label>
            <input
              type="text"
              id={`secondary_button_title${prefix}`}
              placeholder={isSpanish ? 'Ej: Contactar ventas' : 'Ex: Contact sales'}
              {...register(`secondary_button_title${prefix}` as any)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-admin-secondary focus:border-admin-secondary transition-colors"
            />
          </div>
        </div>
        
        {/* URLs de botones (globales, compartidas entre idiomas) */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="primary_button_url" className="block text-sm font-medium text-gray-700 mb-1">
              {isSpanish ? 'URL Botón Principal' : 'Primary Button URL'}
            </label>
            <input
              type="text"
              id="primary_button_url"
              placeholder={isSpanish ? 'Ej: /contacto' : 'Ex: /contact'}
              {...register('primary_button_url' as any, {
                pattern: {
                  value: /^\/[a-z0-9\-\/]*$/,
                  message: isSpanish ? 'Debe comenzar con / y usar solo minúsculas, números y guiones' : 'Must start with / and use only lowercase, numbers and hyphens'
                }
              })}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-admin-secondary focus:border-admin-secondary transition-colors ${
                errors['primary_button_url' as keyof FieldErrors<ProductFormData>] ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors['primary_button_url' as keyof FieldErrors<ProductFormData>] && (
              <p className="mt-1 text-sm text-red-500">{errors['primary_button_url' as keyof FieldErrors<ProductFormData>]?.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="secondary_button_url" className="block text-sm font-medium text-gray-700 mb-1">
              {isSpanish ? 'URL Botón Secundario (Opcional)' : 'Secondary Button URL (Optional)'}
            </label>
            <input
              type="text"
              id="secondary_button_url"
              placeholder={isSpanish ? 'Ej: /ventas' : 'Ex: /sales'}
              {...register('secondary_button_url' as any, {
                pattern: {
                  value: /^\/[a-z0-9\-\/]*$/,
                  message: isSpanish ? 'Debe comenzar con / y usar solo minúsculas, números y guiones' : 'Must start with / and use only lowercase, numbers and hyphens'
                }
              })}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-admin-secondary focus:border-admin-secondary transition-colors ${
                errors['secondary_button_url' as keyof FieldErrors<ProductFormData>] ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors['secondary_button_url' as keyof FieldErrors<ProductFormData>] && (
              <p className="mt-1 text-sm text-red-500">{errors['secondary_button_url' as keyof FieldErrors<ProductFormData>]?.message}</p>
            )}
          </div>
        </div>
      </div>

      {/* stock input is handled once in the modal (global), not in per-language fields */}

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
