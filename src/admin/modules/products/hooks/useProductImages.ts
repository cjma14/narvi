/**
 * useProductImages Hook
 * Maneja la gestión de imágenes del producto
 */

import { useState } from 'react';
import toast from 'react-hot-toast';
import api from '../../../utils/api';
import type { ProductImage } from '../../../types/shared';

export function useProductImages(mode: 'create' | 'edit', productId?: number) {
  const [productImages, setProductImages] = useState<ProductImage[]>([]);
  const [pendingFiles, setPendingFiles] = useState<File[]>([]);
  const [uploadingImages, setUploadingImages] = useState(false);

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    const fileList = Array.from(files);

    if (mode === 'edit' && productId) {
      try {
        setUploadingImages(true);
        const formData = new FormData();
        fileList.forEach((file) => formData.append('images[]', file));

        const response = await api.postFormData(`/api/products/${productId}/images`, formData);
        setProductImages([...productImages, ...response.images]);
        toast.success('Imágenes subidas exitosamente', { duration: 3000, position: 'top-right', icon: '✅' });
        event.target.value = '';
      } catch (error: any) {
        console.error('Error uploading images:', error);
        
        // Manejo específico de errores de validación de imágenes
        if (error?.errors && typeof error.errors === 'object') {
          const imageErrors = Object.entries(error.errors)
            .map(([field, messages]: [string, any]) => {
              const fieldTranslations: Record<string, string> = {
                'images': 'Imágenes',
                'images[]': 'Imagen',
                'image': 'Imagen',
              };
              
              const translatedField = fieldTranslations[field] || field;
              const errorMessages = Array.isArray(messages) ? messages : [messages];
              
              return `• ${translatedField}: ${errorMessages.join(', ')}`;
            })
            .join('\n');
          
          toast.error(
            `Error al subir imágenes:\n\n${imageErrors}`,
            { 
              duration: 5000, 
              position: 'top-right',
              style: {
                whiteSpace: 'pre-line',
                maxWidth: '500px',
              }
            }
          );
        } else {
          // Mensajes más específicos según el error
          let errorMessage = 'Error al subir imágenes';
          
          if (error.message) {
            if (error.message.includes('No se han enviado imágenes')) {
              errorMessage = 'No se seleccionaron imágenes para subir';
            } else if (error.message.includes('validación')) {
              errorMessage = 'Las imágenes no cumplen con los requisitos (formato: jpeg, png, jpg, gif, webp - máx. 5MB cada una)';
            } else if (error.message.includes('Unauthorized')) {
              errorMessage = 'Sesión expirada. Por favor inicia sesión nuevamente';
            } else {
              errorMessage = error.message;
            }
          }
          
          toast.error(errorMessage, { duration: 4000, position: 'top-right' });
        }
      } finally {
        setUploadingImages(false);
      }
    } else {
      setPendingFiles((prev) => [...prev, ...fileList]);
      event.target.value = '';
    }
  };

  const handleDeleteImage = async (imageId: number) => {
    if (!productId) return;
    if (!confirm('¿Estás seguro de eliminar esta imagen?')) return;

    try {
      await api.delete(`/api/products/${productId}/images/${imageId}`);
      setProductImages(productImages.filter(img => img.id !== imageId));
      toast.success('Imagen eliminada exitosamente', { duration: 3000, position: 'top-right', icon: '✅' });
    } catch (error: any) {
      console.error('Error deleting image:', error);
      
      // Mensajes específicos de error al eliminar
      let errorMessage = 'Error al eliminar imagen';
      
      if (error.message) {
        if (error.message.includes('no encontrada') || error.message.includes('not found')) {
          errorMessage = 'La imagen no fue encontrada o ya fue eliminada';
        } else if (error.message.includes('Unauthorized')) {
          errorMessage = 'Sesión expirada. Por favor inicia sesión nuevamente';
        } else {
          errorMessage = error.message;
        }
      }
      
      toast.error(errorMessage, { duration: 4000, position: 'top-right' });
    }
  };

  const removePendingFile = (index: number) => {
    setPendingFiles((prev) => prev.filter((_, i) => i !== index));
  };

  return {
    productImages,
    setProductImages,
    pendingFiles,
    setPendingFiles,
    uploadingImages,
    setUploadingImages,
    handleImageUpload,
    handleDeleteImage,
    removePendingFile,
  };
}
