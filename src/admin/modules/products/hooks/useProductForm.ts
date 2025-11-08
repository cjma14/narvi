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
    .replace(/-+/g, '-')
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

      const payload = {
        title: data.title,
        url_alias: toSlug(data.url_alias),
        description: data.description,
        primary_button_url: data.primary_button_url,
        primary_button_title: data.primary_button_title,
        secondary_button_url: data.secondary_button_url,
        secondary_button_title: data.secondary_button_title,
        specifications: data.specifications.filter(s => s.trim() !== ''),
        translations: {
          en: {
            title: data.title_en || data.title,
            url_alias: toSlug(data.url_alias_en || data.url_alias),
            description: data.description_en || data.description,
            primary_button_title: data.primary_button_title_en || data.primary_button_title,
            secondary_button_title: data.secondary_button_title_en || data.secondary_button_title,
            specifications: data.specifications_en.filter(s => s.trim() !== ''),
          },
        },
      };

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
              
              toast.error(
                `Error al subir imágenes:\n\n${imageErrors}`,
                { 
                  duration: 5000, 
                  position: 'top-right',
                  style: { whiteSpace: 'pre-line', maxWidth: '500px' }
                }
              );
            } else {
              toast.error(err.message || 'Error al subir imágenes después de crear', { duration: 4000, position: 'top-right' });
            }
          } finally {
            setUploadingImages(false);
          }
        }

        toast.success('Producto creado exitosamente', { duration: 3000, position: 'top-right', icon: '✅' });
      } else {
        await api.put(`/api/products/${product?.id}`, payload);
        toast.success('Producto actualizado exitosamente', { duration: 3000, position: 'top-right', icon: '✅' });
      }

      onSuccess();
      onClose();
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
        
        toast.error(
          `Error de validación:\n\n${validationErrors}`,
          { 
            duration: 6000, 
            position: 'top-right',
            style: {
              whiteSpace: 'pre-line',
              maxWidth: '500px',
            }
          }
        );
      } else {
        // Error genérico
        const errorMessage = error.message || 'Error al guardar producto';
        toast.error(errorMessage, { duration: 4000, position: 'top-right' });
      }
    } finally {
      setLoading(false);
    }
  };

  return { form, loading, onSubmit, toSlug };
}
