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

    // Toast de confirmación personalizado (mismo patrón que ProductListTable)
    toast((t) => (
      <div className="flex flex-col gap-3">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
            <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 mb-1">¿Eliminar imagen?</h3>
            <p className="text-sm text-gray-600">
              Esta acción no se puede deshacer.
            </p>
          </div>
        </div>
        <div className="flex gap-2 justify-end">
          <button
            onClick={() => toast.dismiss(t.id)}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Cancelar
          </button>
          <button
            onClick={async () => {
              toast.dismiss(t.id);
              try {
                await api.delete(`/api/products/${productId}/images/${imageId}`);
                setProductImages(productImages.filter(img => img.id !== imageId));
                toast.success('Imagen eliminada exitosamente', { 
                  duration: 3000, 
                  position: 'top-right', 
                  icon: '✅' 
                });
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
            }}
            className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors"
          >
            Eliminar
          </button>
        </div>
      </div>
    ), {
      duration: Infinity,
      position: 'top-center',
      style: {
        background: 'white',
        color: '#111827',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        borderRadius: '0.75rem',
        padding: '1rem',
        minWidth: '400px',
      },
    });
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
