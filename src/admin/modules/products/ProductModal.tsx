/**
 * ProductModal Component
 * Modal para crear y editar productos con soporte multiidioma
 * Usa react-hook-form para validación
 */

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import api from '../../utils/api';
import type { Product, ProductImage, ProductFormData } from '../../types/shared';

const API_URL = import.meta.env.PUBLIC_API_URL || 'http://localhost:6650';


interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  product: Product | null;
  mode: 'create' | 'edit';
}

// Form shape is defined in ProductFormData in shared types

// Función para convertir texto a slug URL-friendly
const toSlug = (text: string): string => {
  return text
    .toLowerCase()
    .trim()
    // Allow forward slashes to support paths like /sales/jereh-coiled-tubing-trailer
    .replace(/[^\w\s\-\/]/g, '') // Eliminar caracteres especiales excepto /
    .replace(/\s+/g, '-') // Reemplazar espacios con guiones
    .replace(/-+/g, '-') // Reemplazar múltiples guiones con uno solo
    .replace(/^-+|-+$/g, ''); // Eliminar guiones al inicio y fin
};

export default function ProductModal({ isOpen, onClose, onSuccess, product, mode }: ProductModalProps) {
  const [currentLang, setCurrentLang] = useState<'es' | 'en'>('es');
  const [loading, setLoading] = useState(false);
  const [productImages, setProductImages] = useState<ProductImage[]>([]);
  const [uploadingImages, setUploadingImages] = useState(false);
  const [pendingFiles, setPendingFiles] = useState<File[]>([]);

  const { 
    register, 
    handleSubmit, 
    formState: { errors }, 
    reset, 
    setValue, 
    watch,
    trigger,
    getValues
  } = useForm<ProductFormData>({
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

  const specifications = watch('specifications');
  const specifications_en = watch('specifications_en');

  // Cargar datos del producto al editar
  useEffect(() => {
    if (isOpen) {
      if (mode === 'edit' && product) {
        // Cargar imágenes del producto
        setProductImages(product.images || []);
        
        // Pequeño delay para asegurar que el reset se aplique después de que el modal se renderice
        setTimeout(() => {
          reset({
            title: product.title || '',
            url_alias: product.url_alias || '',
            description: product.description || '',
            primary_button_url: product.primary_button_url || '',
            primary_button_title: product.primary_button_title || '',
            secondary_button_url: product.secondary_button_url || '',
            secondary_button_title: product.secondary_button_title || '',
            specifications: product.specifications && product.specifications.length > 0 ? product.specifications : [''],
            title_en: product.translations?.en?.title || '',
            url_alias_en: product.translations?.en?.url_alias || '',
            description_en: product.translations?.en?.description || '',
            primary_button_title_en: product.translations?.en?.primary_button_title || '',
            secondary_button_title_en: product.translations?.en?.secondary_button_title || '',
            specifications_en: product.translations?.en?.specifications && product.translations?.en?.specifications.length > 0 ? product.translations?.en?.specifications : [''],
          });
        }, 0);
      } else if (mode === 'create') {
        setProductImages([]);
        reset({
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
        });
      }
      // Resetear a español cuando se abre el modal
      setCurrentLang('es');
    }
  }, [mode, product, isOpen, reset]);

  const onSubmit = async (data: ProductFormData) => {
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

        // If there are pending files selected during create, upload them now
        if (pendingFiles.length > 0 && created?.id) {
          try {
            setUploadingImages(true);
            const fd = new FormData();
            pendingFiles.forEach((file) => fd.append('images[]', file));
            const imgResp = await api.postFormData(`/api/products/${created.id}/images`, fd);
            setProductImages(imgResp.images || []);
            setPendingFiles([]);
          } catch (err: any) {
            console.error('Error uploading pending images after create:', err);
            toast.error(err.message || 'Error al subir imágenes después de crear', { duration: 4000, position: 'top-right' });
          } finally {
            setUploadingImages(false);
          }
        }

        toast.success('Producto creado exitosamente', {
          duration: 3000,
          position: 'top-right',
          icon: '✅',
        });
      } else {
        await api.put(`/api/products/${product?.id}`, payload);
        toast.success('Producto actualizado exitosamente', {
          duration: 3000,
          position: 'top-right',
          icon: '✅',
        });
      }

      onSuccess();
      onClose();
    } catch (error: any) {
      console.error('Error saving product:', error);
      toast.error(error.message || 'Error al guardar producto', {
        duration: 4000,
        position: 'top-right',
      });
    } finally {
      setLoading(false);
    }
  };

  const addSpecification = (lang: 'es' | 'en') => {
    const field = lang === 'es' ? 'specifications' : 'specifications_en';
    const current = watch(field);
    setValue(field, [...current, '']);
  };

  const removeSpecification = (lang: 'es' | 'en', index: number) => {
    const field = lang === 'es' ? 'specifications' : 'specifications_en';
    const current = watch(field);
    const newSpecs = current.filter((_, i) => i !== index);
    setValue(field, newSpecs.length > 0 ? newSpecs : ['']);
  };

  const updateSpecification = (lang: 'es' | 'en', index: number, value: string) => {
    const field = lang === 'es' ? 'specifications' : 'specifications_en';
    const current = watch(field);
    const newSpecs = [...current];
    newSpecs[index] = value;
    setValue(field, newSpecs);
  };

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    const fileList = Array.from(files);
    // If we're editing an existing product, upload immediately
    if (mode === 'edit' && product?.id) {
      try {
        setUploadingImages(true);
        const formData = new FormData();
        fileList.forEach((file) => formData.append('images[]', file));

        const response = await api.postFormData(`/api/products/${product.id}/images`, formData);
        setProductImages([...productImages, ...response.images]);
        toast.success('Imágenes subidas exitosamente', { duration: 3000, position: 'top-right', icon: '✅' });
        event.target.value = '';
      } catch (error: any) {
        console.error('Error uploading images:', error);
        toast.error(error.message || 'Error al subir imágenes', { duration: 4000, position: 'top-right' });
      } finally {
        setUploadingImages(false);
      }
    } else {
      // In create mode store pending files locally and show previews
      setPendingFiles((prev) => [...prev, ...fileList]);
      event.target.value = '';
    }
  };

  const handleDeleteImage = async (imageId: number) => {
    if (!product?.id) return;
    
    if (!confirm('¿Estás seguro de eliminar esta imagen?')) return;

    try {
      await api.delete(`/api/products/${product.id}/images/${imageId}`);
      setProductImages(productImages.filter(img => img.id !== imageId));
      toast.success('Imagen eliminada exitosamente', {
        duration: 3000,
        position: 'top-right',
        icon: '✅',
      });
    } catch (error: any) {
      console.error('Error deleting image:', error);
      toast.error(error.message || 'Error al eliminar imagen', {
        duration: 4000,
        position: 'top-right',
      });
    }
  };

  const removePendingFile = (index: number) => {
    setPendingFiles((prev) => prev.filter((_, i) => i !== index));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="relative bg-white rounded-lg shadow-xl max-w-4xl w-full p-6 z-50 max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                {mode === 'create' ? 'Crear Nuevo Producto' : 'Editar Producto'}
              </h2>
              <p className="text-sm text-gray-500 mt-1">Completa la información en ambos idiomas</p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Language Tabs */}
          <div className="flex gap-2 mb-6 border-b">
            <button
              type="button"
              onClick={() => setCurrentLang('es')}
              className={`px-4 py-2 font-medium transition-colors ${
                currentLang === 'es'
                  ? 'text-admin-secondary border-b-2 border-admin-secondary'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              🇪🇸 Español
            </button>
            <button
              type="button"
              onClick={() => setCurrentLang('en')}
              className={`px-4 py-2 font-medium transition-colors ${
                currentLang === 'en'
                  ? 'text-admin-secondary border-b-2 border-admin-secondary'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              🇺🇸 English
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Campos en Español */}
            <div style={{ display: currentLang === 'es' ? 'block' : 'none' }}>
                {/* Título ES */}
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                    Título <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="title"
                    {...register('title', { 
                      required: 'El título es requerido',
                      minLength: { value: 3, message: 'Mínimo 3 caracteres' }
                    })}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-admin-secondary focus:border-admin-secondary transition-colors ${
                      errors.title ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.title && <p className="mt-1 text-sm text-red-500">{errors.title.message}</p>}
                </div>

                {/* URL Alias ES */}
                <div>
                  <label htmlFor="url_alias" className="block text-sm font-medium text-gray-700 mb-1">
                    URL Alias <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="url_alias"
                    {...register('url_alias', {
                      required: 'El URL alias es requerido',
                      minLength: { value: 3, message: 'Mínimo 3 caracteres' },
                      onChange: (e) => {
                        const slugified = toSlug(e.target.value);
                        setValue('url_alias', slugified);
                      }
                    })}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-admin-secondary focus:border-admin-secondary transition-colors ${
                      errors.url_alias ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.url_alias && <p className="mt-1 text-sm text-red-500">{errors.url_alias.message}</p>}
                </div>

                {/* Descripción ES */}
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                    Descripción
                  </label>
                  <textarea
                    id="description"
                    {...register('description')}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-admin-secondary focus:border-admin-secondary transition-colors"
                  />
                </div>

                {/* Botones */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="primary_button_title" className="block text-sm font-medium text-gray-700 mb-1">
                      Título Botón Principal
                    </label>
                    <input
                      type="text"
                      id="primary_button_title"
                      {...register('primary_button_title')}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-admin-secondary focus:border-admin-secondary transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="primary_button_url" className="block text-sm font-medium text-gray-700 mb-1">
                      URL Botón Principal
                    </label>
                    <input
                      type="url"
                      id="primary_button_url"
                      {...register('primary_button_url', {
                        pattern: {
                          value: /^https?:\/\/.+/,
                          message: 'Debe ser una URL válida (https://example.com/buy)'
                        }
                      })}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-admin-secondary focus:border-admin-secondary transition-colors ${
                        errors.primary_button_url ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.primary_button_url && <p className="mt-1 text-sm text-red-500">{errors.primary_button_url.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="secondary_button_title" className="block text-sm font-medium text-gray-700 mb-1">
                      Título Botón Secundario
                    </label>
                    <input
                      type="text"
                      id="secondary_button_title"
                      {...register('secondary_button_title')}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-admin-secondary focus:border-admin-secondary transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="secondary_button_url" className="block text-sm font-medium text-gray-700 mb-1">
                      URL Botón Secundario
                    </label>
                    <input
                      type="url"
                      id="secondary_button_url"
                      {...register('secondary_button_url', {
                        pattern: {
                          value: /^https?:\/\/.+/,
                          message: 'Debe ser una URL válida (https://example.com/info)'
                        }
                      })}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-admin-secondary focus:border-admin-secondary transition-colors ${
                        errors.secondary_button_url ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.secondary_button_url && <p className="mt-1 text-sm text-red-500">{errors.secondary_button_url.message}</p>}
                  </div>
                </div>

                {/* Especificaciones ES */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Especificaciones
                  </label>
                  <div className="space-y-2">
                    {specifications.map((spec, index) => (
                      <div key={index} className="flex gap-2">
                        <input
                          type="text"
                          value={spec}
                          onChange={(e) => updateSpecification('es', index, e.target.value)}
                          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-admin-secondary focus:border-admin-secondary transition-colors"
                        />
                        <button
                          type="button"
                          onClick={() => removeSpecification('es', index)}
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
                      onClick={() => addSpecification('es')}
                      className="w-full px-4 py-2 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-admin-secondary hover:text-admin-secondary transition-colors"
                    >
                      + Agregar Especificación
                    </button>
                  </div>
                </div>
            </div>

            {/* Campos en Inglés */}
            <div style={{ display: currentLang === 'en' ? 'block' : 'none' }}>
                {/* Título EN */}
                <div>
                  <label htmlFor="title_en" className="block text-sm font-medium text-gray-700 mb-1">
                    Title
                  </label>
                  <input
                    type="text"
                    id="title_en"
                    {...register('title_en')}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-admin-secondary focus:border-admin-secondary transition-colors"
                  />
                </div>

                {/* URL Alias EN */}
                <div>
                  <label htmlFor="url_alias_en" className="block text-sm font-medium text-gray-700 mb-1">
                    URL Alias
                  </label>
                  <input
                    type="text"
                    id="url_alias_en"
                    {...register('url_alias_en', {
                      pattern: {
                        // Allow lowercase, numbers, hyphens and forward slashes for path-like aliases
                        value: /^[a-z0-9\-\/]*$/,
                        message: 'Sólo minúsculas, números, guiones y /. Ej: /sales/product-example'
                      },
                      onChange: (e) => {
                        const slugified = toSlug(e.target.value);
                        setValue('url_alias_en', slugified);
                      }
                    })}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-admin-secondary focus:border-admin-secondary transition-colors ${
                      errors.url_alias_en ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.url_alias_en && <p className="mt-1 text-sm text-red-500">{errors.url_alias_en.message}</p>}
                </div>

                {/* Descripción EN */}
                <div>
                  <label htmlFor="description_en" className="block text-sm font-medium text-gray-700 mb-1">
                    Description
                  </label>
                  <textarea
                    id="description_en"
                    {...register('description_en')}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-admin-secondary focus:border-admin-secondary transition-colors"
                  />
                </div>

                {/* Botones EN */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="primary_button_title_en" className="block text-sm font-medium text-gray-700 mb-1">
                      Primary Button Title
                    </label>
                    <input
                      type="text"
                      id="primary_button_title_en"
                      {...register('primary_button_title_en')}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-admin-secondary focus:border-admin-secondary transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="secondary_button_title_en" className="block text-sm font-medium text-gray-700 mb-1">
                      Secondary Button Title
                    </label>
                    <input
                      type="text"
                      id="secondary_button_title_en"
                      {...register('secondary_button_title_en')}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-admin-secondary focus:border-admin-secondary transition-colors"
                    />
                  </div>
                </div>

                {/* Especificaciones EN */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Specifications
                  </label>
                  <div className="space-y-2">
                    {specifications_en.map((spec, index) => (
                      <div key={index} className="flex gap-2">
                        <input
                          type="text"
                          value={spec}
                          onChange={(e) => updateSpecification('en', index, e.target.value)}
                          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-admin-secondary focus:border-admin-secondary transition-colors"
                        />
                        <button
                          type="button"
                          onClick={() => removeSpecification('en', index)}
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
                      onClick={() => addSpecification('en')}
                      className="w-full px-4 py-2 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-admin-secondary hover:text-admin-secondary transition-colors"
                    >
                      + Add Specification
                    </button>
                  </div>
                </div>
            </div>

            {/* Gestión de Imágenes */}

              <div className="border-t pt-4 mt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Imágenes del Producto</h3>
                
                {/* Grid de imágenes existentes */}
                {productImages.length > 0 && (
                  <div className="grid grid-cols-4 gap-4 mb-4">
                    {productImages.map((image) => (
                      <div key={image.id} className="relative group">
                        <img
                          src={`${API_URL}/storage/${image.path}`}
                          alt="Product"
                          className="w-full h-32 object-cover rounded-lg border-2 border-gray-200"
                        />
                        <button
                          type="button"
                          onClick={() => handleDeleteImage(image.id!)}
                          className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                        <span className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
                          #{image.order}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Upload de nuevas imágenes */}
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
                  <label htmlFor="image-upload" className="cursor-pointer flex flex-col items-center">
                    <svg className="w-12 h-12 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    <span className="text-sm text-gray-600">
                      {uploadingImages ? 'Subiendo...' : 'Click para subir imágenes'}
                    </span>
                    <span className="text-xs text-gray-400 mt-1">JPG, PNG, WEBP (máx. 5MB)</span>
                  </label>
                  <input
                    id="image-upload"
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleImageUpload}
                    disabled={uploadingImages}
                    className="hidden"
                  />
                </div>
              </div>

            {/* Buttons */}
            <div className="flex justify-end gap-3 pt-4 border-t">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                disabled={loading}
              >
                Cancelar
              </button>
              <button
                type="submit"
                disabled={loading}
                className="px-4 py-2 bg-admin-secondary hover:bg-admin-secondary-600 text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Guardando...
                  </>
                ) : (
                  mode === 'create' ? 'Crear Producto' : 'Actualizar Producto'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
