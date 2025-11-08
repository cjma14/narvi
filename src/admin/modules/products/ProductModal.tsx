/**
 * ProductModal Component (Refactorizado)
 * Modal para crear y editar productos con soporte multiidioma
 * Usa react-hook-form para validación
 */

import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import type { Product } from '../../types/shared';
import { useProductForm } from './hooks/useProductForm';
import { useProductImages } from './hooks/useProductImages.tsx';
import LanguageTabs from './components/LanguageTabs';
import ProductFormFields from './components/ProductFormFields';
import ProductImageManager from './components/ProductImageManager';

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  product: Product | null;
  mode: 'create' | 'edit';
}

export default function ProductModal({ isOpen, onClose, onSuccess, product, mode }: ProductModalProps) {
  const [currentLang, setCurrentLang] = useState<'es' | 'en'>('es');

  const { form, loading, onSubmit, toSlug } = useProductForm(mode, product);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = form;

  const {
    productImages,
    setProductImages,
    pendingFiles,
    setPendingFiles,
    uploadingImages,
    setUploadingImages,
    handleImageUpload,
    handleDeleteImage,
    removePendingFile,
  } = useProductImages(mode, product?.id);

  const specifications = watch('specifications');
  const specifications_en = watch('specifications_en');

  // Cargar datos del producto al editar
  useEffect(() => {
    if (isOpen) {
      if (mode === 'edit' && product) {
        setProductImages(product.images || []);
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
        setPendingFiles([]);
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
      setCurrentLang('es');
    }
  }, [mode, product, isOpen, reset, setProductImages, setPendingFiles]);

  const handleFormSubmit = (data: any) => {
    onSubmit(data, pendingFiles, onSuccess, onClose, setPendingFiles, setUploadingImages, setProductImages);
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" onClick={onClose} />

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
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <LanguageTabs currentLang={currentLang} onChangeLang={setCurrentLang} />

          <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
            {/* Campos en Español */}
            <div style={{ display: currentLang === 'es' ? 'block' : 'none' }}>
              <ProductFormFields
                lang="es"
                register={register}
                errors={errors}
                setValue={setValue}
                toSlug={toSlug}
                specifications={specifications}
                onUpdateSpec={(idx, val) => updateSpecification('es', idx, val)}
                onRemoveSpec={(idx) => removeSpecification('es', idx)}
                onAddSpec={() => addSpecification('es')}
              />
            </div>

            {/* Campos en Inglés */}
            <div style={{ display: currentLang === 'en' ? 'block' : 'none' }}>
              <ProductFormFields
                lang="en"
                register={register}
                errors={errors}
                setValue={setValue}
                toSlug={toSlug}
                specifications={specifications_en}
                onUpdateSpec={(idx, val) => updateSpecification('en', idx, val)}
                onRemoveSpec={(idx) => removeSpecification('en', idx)}
                onAddSpec={() => addSpecification('en')}
              />
            </div>

            <ProductImageManager
              mode={mode}
              productImages={productImages}
              pendingFiles={pendingFiles}
              uploadingImages={uploadingImages}
              onImageUpload={handleImageUpload}
              onDeleteImage={handleDeleteImage}
              onRemovePendingFile={removePendingFile}
            />

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
