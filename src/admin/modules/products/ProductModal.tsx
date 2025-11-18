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
import api from '../../utils/api';

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  product: Product | null;
  mode: 'create' | 'edit';
}

export default function ProductModal({ isOpen, onClose, onSuccess, product, mode }: ProductModalProps) {
  const [currentLang, setCurrentLang] = useState<'es' | 'en'>('en');
  const [loadingProduct, setLoadingProduct] = useState(false);
  const [fullProduct, setFullProduct] = useState<Product | null>(null);
  const [errorSummary, setErrorSummary] = useState<string[]>([]);

  const { form, loading, onSubmit, toSlug } = useProductForm(mode, fullProduct || product);
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

  // Cargar producto completo cuando se abre en modo edición
  useEffect(() => {
    const loadProduct = async () => {
      if (isOpen && mode === 'edit' && product?.id) {
        try {
          setLoadingProduct(true);
          const response = await api.get(`/api/products/${product.id}`);
          const productData = response.product || response.data?.product || response;
          setFullProduct(productData);
        } catch (error: any) {
          console.error('Error loading product:', error);
          toast.error('Error al cargar el producto');
          onClose();
        } finally {
          setLoadingProduct(false);
        }
      } else if (isOpen && mode === 'create') {
        setFullProduct(null);
      }
    };

    loadProduct();
  }, [isOpen, mode, product?.id, onClose]);

  useEffect(() => {
    if (isOpen) {
      const productData = fullProduct || product;
      
      if (mode === 'edit' && productData) {

        const images = (productData.images || []).map(img => ({
          ...img,
          url: img.url || `storage/${img.path}` 
        }));
        setProductImages(images);

        setTimeout(() => {
          reset({
            title: productData.title || '',
            url_alias: productData.url_alias || '',
            description: productData.description || '',
            primary_button_url: productData.primary_button_url || '',
            primary_button_title: productData.primary_button_title || '',
            secondary_button_url: productData.secondary_button_url || '',
            secondary_button_title: productData.secondary_button_title || '',
            stock: typeof productData.stock !== 'undefined' ? productData.stock : true,
            specifications: productData.specifications && productData.specifications.length > 0 ? productData.specifications : [''],
            title_en: productData.translations_data?.en?.title || productData.translations?.en?.title || '',
            url_alias_en: productData.translations_data?.en?.url_alias || productData.translations?.en?.url_alias || '',
            description_en: productData.translations_data?.en?.description || productData.translations?.en?.description || '',
            primary_button_title_en: productData.translations_data?.en?.primary_button_title || productData.translations?.en?.primary_button_title || '',
            secondary_button_title_en: productData.translations_data?.en?.secondary_button_title || productData.translations?.en?.secondary_button_title || '',
            specifications_en: (productData.translations_data?.en?.specifications || productData.translations?.en?.specifications || []).length > 0 ? (productData.translations_data?.en?.specifications || productData.translations?.en?.specifications) : [''],
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
          stock: true,
          specifications: [''],
          title_en: '',
          url_alias_en: '',
          description_en: '',
          primary_button_title_en: '',
          secondary_button_title_en: '',
          specifications_en: [''],
        });
      }
      setCurrentLang('en');
      setErrorSummary([]);
    }
  }, [mode, fullProduct, product, isOpen, reset, setProductImages, setPendingFiles]);

  const handleFormSubmit = (data: any) => {
    setErrorSummary([]);
    onSubmit(data, pendingFiles, onSuccess, onClose, setPendingFiles, setUploadingImages, setProductImages);
  };

  const handleFormError = (errors: any) => {
    const errorFields = Object.keys(errors);
    if (errorFields.length > 0) {
      const labelMap: Record<string, { es: string; en: string }> = {
        title: { es: 'Título', en: 'Title' },
        url_alias: { es: 'URL Alias', en: 'URL Alias' },
        description: { es: 'Descripción', en: 'Description' },
        primary_button_title: { es: 'Título Botón Principal', en: 'Primary Button Title' },
        secondary_button_title: { es: 'Título Botón Secundario', en: 'Secondary Button Title' },
        primary_button_url: { es: 'URL Botón Principal', en: 'Primary Button URL' },
        secondary_button_url: { es: 'URL Botón Secundario', en: 'Secondary Button URL' },
        specifications: { es: 'Especificaciones', en: 'Specifications' },
        stock: { es: 'Stock', en: 'Stock' },
      };

      const summaries = errorFields.map((key) => {
        const isEn = key.endsWith('_en');
        const base = isEn ? key.slice(0, -3) : key;
        const lang = isEn ? 'en' : 'es';
        const label = labelMap[base]?.[lang] || base;
        const message = errors[key]?.message || (lang === 'es' ? 'Requerido' : 'Required');
        return `${label} (${lang === 'es' ? 'Español' : 'English'}): ${message}`;
      });

      setErrorSummary(summaries);
      setCurrentLang(errorFields[0].endsWith('_en') ? 'en' : 'es');
      setTimeout(() => {
        toast.error(summaries[0]);
      }, 0);
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto animate-fadeIn">
      <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300" onClick={onClose} />

      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="relative bg-white rounded-lg shadow-xl max-w-4xl w-full p-6 z-50 max-h-[90vh] overflow-y-auto animate-slideUp">
          {loadingProduct ? (
            <div className="flex items-center justify-center py-12">
              <div className="flex flex-col items-center gap-3">
                <svg className="animate-spin h-8 w-8 text-admin-secondary" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <p className="text-sm text-gray-600">Cargando producto...</p>
              </div>
            </div>
          ) : (
            <>
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

          {/* Stock (single global checkbox) */}
          <div className="mb-4">
            <label htmlFor="stock" className="inline-flex items-center gap-2">
              <input
                id="stock"
                type="checkbox"
                {...register('stock' as any)}
                className="h-4 w-4 text-admin-secondary border-gray-300 rounded"
              />
              <span className="text-sm text-gray-700">{currentLang === 'es' ? 'Disponible (no agotado)' : 'Available (not sold out)'}</span>
            </label>
            <p className="mt-1 text-xs text-gray-500">{currentLang === 'es' ? 'Desmarca para indicar que el producto está AGOTADO' : 'Uncheck to mark the product as SOLD OUT'}</p>
          </div>

          <LanguageTabs currentLang={currentLang} onChangeLang={setCurrentLang} />

          <form onSubmit={handleSubmit(handleFormSubmit, handleFormError)} className="space-y-4">
            {errorSummary.length > 0 && (
              <div className="mb-4 p-3 border border-red-200 bg-red-50 rounded text-sm text-red-800">
                <strong>{currentLang === 'es' ? 'Por favor corrige los siguientes campos:' : 'Please correct the following fields:'}</strong>
                <ul className="mt-1 list-disc list-inside">
                  {errorSummary.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>
              </div>
            )}
            {/* Campos en Español */}
            <div style={{ display: currentLang === 'es' ? 'block' : 'none' }}>
              <ProductFormFields
                lang="es"
                register={register}
                errors={errors}
                setValue={setValue}
                watch={watch}
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
                watch={watch}
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
          </>
          )}
        </div>
      </div>
    </div>
  );
}
