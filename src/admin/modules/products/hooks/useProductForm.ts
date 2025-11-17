/**
 * useProductForm Hook
 * Maneja la lógica del formulario de productos
 */

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import api from '../../../utils/api';
import type { Product, ProductImage, ProductFormData } from '../../../types/shared';

const toSlug = (text: string): string => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s\-\/]/g, '') 
    .replace(/\s+/g, '-')        
    .replace(/-{2,}/g, '-')      
    .replace(/^-+|-+$/g, '');    
};

export function useProductForm(mode: 'create' | 'edit', product: Product | null) {
  const [loading, setLoading] = useState(false);

  const form = useForm<ProductFormData>({
    defaultValues: {
      title: '',
      url_alias: '',
      description: '',
      primary_button_url: '',
      primary_button_title: '',
      secondary_button_url: '',
      secondary_button_title: '',
      stock: true,
      specifications: [''],
      title_en: '',
      url_alias_en: '',
      description_en: '',
      primary_button_title_en: '',
      secondary_button_title_en: '',
      specifications_en: [''],
    },
  });

  const onSubmit = async (
    data: ProductFormData,
    pendingFiles: File[],
    onSuccess: () => void,
    onClose: () => void,
    setPendingFiles: (files: File[]) => void,
    setUploadingImages: (uploading: boolean) => void,
    setProductImages: (images: ProductImage[]) => void
  ) => {
    try {
      setLoading(true);

      // Construir traducciones en inglés
      const enTranslations: any = {
        title: data.title_en,
        url_alias: toSlug(data.url_alias_en),
        specifications: data.specifications_en.filter(s => s.trim() !== ''),
      };

      // Agregar campos opcionales de traducciones solo si tienen valor
      if (data.description_en && data.description_en.trim()) {
        enTranslations.description = data.description_en;
      }
      if (data.primary_button_title_en && data.primary_button_title_en.trim()) {
        enTranslations.primary_button_title = data.primary_button_title_en;
      }
      if (data.secondary_button_title_en && data.secondary_button_title_en.trim()) {
        enTranslations.secondary_button_title = data.secondary_button_title_en;
      }

      const payload: any = {
        title: data.title,
        url_alias: toSlug(data.url_alias),
        primary_button_url: data.primary_button_url,
        primary_button_title: data.primary_button_title,
        stock: typeof data.stock !== 'undefined' ? data.stock : true,
        specifications: data.specifications.filter(s => s.trim() !== ''),
        translations: {
          en: enTranslations,
        },
      };

      // Agregar campos opcionales del español solo si tienen valor
      if (data.description && data.description.trim()) {
        payload.description = data.description;
      }
      if (data.secondary_button_url && data.secondary_button_url.trim()) {
        payload.secondary_button_url = data.secondary_button_url;
      }
      if (data.secondary_button_title && data.secondary_button_title.trim()) {
        payload.secondary_button_title = data.secondary_button_title;
      }

      if (mode === 'create') {
        const created = await api.post('/api/products', payload);
        const productId = created?.product?.id || created?.id;

        if (pendingFiles.length > 0 && productId) {
          try {
            setUploadingImages(true);
            const fd = new FormData();
            pendingFiles.forEach((file) => fd.append('images[]', file));
            const imgResp = await api.postFormData(`/api/products/${productId}/images`, fd);
            setProductImages(imgResp.images || []);
            setPendingFiles([]);
          } catch (err: any) {
            console.error('Error uploading pending images after create:', err);
            
            // Manejo de errores específicos de imágenes
            if (err?.errors && typeof err.errors === 'object') {
              const imageErrors = Object.entries(err.errors)
                .map(([field, messages]: [string, any]) => {
                  const errorMessages = Array.isArray(messages) ? messages : [messages];
                  return errorMessages.join(', ');
                })
                .join('\n');
              
              toast.error(`Error al subir imágenes:\n${imageErrors}`);
            } else {
              toast.error(err.message || 'Error al subir imágenes después de crear');
            }
          } finally {
            setUploadingImages(false);
          }
        }

      } else {
        await api.put(`/api/products/${product?.id}`, payload);
      }

      const successMessage = mode === 'create' ? 'Producto creado exitosamente' : 'Producto actualizado exitosamente';
      
      // Primero actualizamos la lista
      onSuccess();
      
      // Mostramos el toast inmediatamente (el Toaster del padre ya está montado)
      toast.success(successMessage);
    } catch (error: any) {
      console.error('Error saving product:', error);
      
      // Manejo de errores de validación del backend
      if (error?.errors && typeof error.errors === 'object') {
        const validationErrors = Object.entries(error.errors)
          .map(([field, messages]: [string, any]) => {
            const fieldTranslations: Record<string, string> = {
              'title': 'Título',
              'url_alias': 'Alias de URL',
              'description': 'Descripción',
              'primary_button_url': 'URL del botón primario',
              'primary_button_title': 'Título del botón primario',
              'secondary_button_url': 'URL del botón secundario',
              'secondary_button_title': 'Título del botón secundario',
              'specifications': 'Especificaciones',
              'specifications.*': 'Especificación',
            };
            
            const translatedField = fieldTranslations[field] || field;
            const errorMessages = Array.isArray(messages) ? messages : [messages];
            
            return `• ${translatedField}: ${errorMessages.join(', ')}`;
          })
          .join('\n');
        
        toast.error(`Error de validación:\n${validationErrors}`);
      } else {
        // Error genérico
        const errorMessage = error.message || 'Error al guardar producto';
        toast.error(errorMessage);
      }
    } finally {
      setLoading(false);
    }
  };

  return { form, loading, onSubmit, toSlug };
}
