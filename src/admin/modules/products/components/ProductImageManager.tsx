/**
 * ProductImageManager Component
 * Gestiona las imágenes del producto (subir, previsualizar, eliminar)
 */

import type { ProductImage } from '../../../types/shared';

const API_URL = import.meta.env.PUBLIC_API_URL || 'http://localhost:6650';

interface ProductImageManagerProps {
  mode: 'create' | 'edit';
  productImages: ProductImage[];
  pendingFiles: File[];
  uploadingImages: boolean;
  onImageUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onDeleteImage: (imageId: number) => void;
  onRemovePendingFile: (index: number) => void;
}

export default function ProductImageManager({
  mode,
  productImages,
  pendingFiles,
  uploadingImages,
  onImageUpload,
  onDeleteImage,
  onRemovePendingFile,
}: ProductImageManagerProps) {
  return (
    <div className="border-t pt-4 mt-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Imágenes del Producto</h3>
      
      {/* Grid de imágenes existentes (solo en modo editar) */}
      {mode === 'edit' && productImages.length > 0 && (
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
                onClick={() => onDeleteImage(image.id!)}
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

      {/* Previews de archivos pendientes (modo crear) */}
      {mode === 'create' && pendingFiles.length > 0 && (
        <div className="grid grid-cols-4 gap-4 mb-4">
          {pendingFiles.map((file, idx) => (
            <div key={idx} className="relative group">
              <img
                src={URL.createObjectURL(file)}
                alt={file.name}
                className="w-full h-32 object-cover rounded-lg border-2 border-dashed border-admin-secondary"
              />
              <button
                type="button"
                onClick={() => onRemovePendingFile(idx)}
                className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full transition-opacity"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <span className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded text-[10px]">
                {file.name.length > 15 ? file.name.substring(0, 12) + '...' : file.name}
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
          onChange={onImageUpload}
          disabled={uploadingImages}
          className="hidden"
        />
      </div>
    </div>
  );
}
