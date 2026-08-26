import { useEffect, useState } from 'react';
import type { NewsModalProps } from '../types';
import { isHtmlEmpty } from '../utils/news.utils';
import { useNewsModalForm } from '../hooks/useNewsModalForm';
import NewsRichTextEditor from './NewsRichTextEditor';

export default function NewsModal({ isOpen, mode, news, onClose, onSuccess }: NewsModalProps) {
  const [currentLang, setCurrentLang] = useState<'es' | 'en'>('es');
  const [allowEditUrlAliasEs, setAllowEditUrlAliasEs] = useState(false);
  const [allowEditUrlAliasEn, setAllowEditUrlAliasEn] = useState(false);

  const {
    body,
    coverPreviewUrl,
    form: {
      register,
      watch,
      formState: { errors },
    },
    handleCoverUpload,
    handleRemoveCover,
    loading,
    loadingNews,
    setValue,
    submitForm,
    uploadingCover,
  } = useNewsModalForm({ isOpen, mode, news, onSuccess });

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    setCurrentLang('es');
    setAllowEditUrlAliasEs(false);
    setAllowEditUrlAliasEn(false);
  }, [isOpen, mode, news?.id]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" onClick={onClose} />

      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="relative bg-white rounded-lg shadow-xl max-w-3xl w-full p-6 z-50 max-h-[90vh] overflow-y-auto">
          {loadingNews ? (
            <div className="py-12 flex flex-col items-center justify-center">
              <div className="inline-block animate-spin rounded-full h-10 w-10 border-4 border-admin-secondary border-t-transparent"></div>
              <p className="mt-3 text-sm text-gray-500">Cargando noticia...</p>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <h2 className="text-2xl font-bold text-gray-900">
                    {mode === 'create' ? 'Crear Nueva Noticia' : 'Editar Noticia'}
                  </h2>
                  <label className="inline-flex cursor-pointer items-center gap-3 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 transition-colors hover:bg-gray-100">
                    <input
                      type="checkbox"
                      {...register('published')}
                      className="h-4 w-4 rounded border-gray-300 text-admin-secondary focus:ring-admin-secondary"
                    />
                    <span className="text-sm font-medium text-gray-700">Publicar noticia</span>
                  </label>
                </div>
                <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <form onSubmit={submitForm} className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-1 bg-gray-50">
                  <div className="grid grid-cols-2 gap-1">
                    <button
                      type="button"
                      onClick={() => setCurrentLang('es')}
                      className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                        currentLang === 'es'
                          ? 'bg-white text-admin-secondary shadow-sm'
                          : 'text-gray-600 hover:text-gray-800'
                      }`}
                    >
                      <span className="inline-flex items-center gap-2">
                        <span aria-hidden="true">🇪🇸</span>
                        <span>Español</span>
                      </span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setCurrentLang('en')}
                      className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                        currentLang === 'en'
                          ? 'bg-white text-admin-secondary shadow-sm'
                          : 'text-gray-600 hover:text-gray-800'
                      }`}
                    >
                      <span className="inline-flex items-center gap-2">
                        <span aria-hidden="true">🇺🇸</span>
                        <span>English</span>
                      </span>
                    </button>
                  </div>
                </div>

                <div style={{ display: currentLang === 'es' ? 'block' : 'none' }} className="space-y-4">
                  <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                      Titulo <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="title"
                      type="text"
                      {...register('title', {
                        required: 'El titulo es requerido',
                      })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-admin-secondary focus:border-admin-secondary transition-colors"
                    />
                    {errors.title && <p className="mt-1 text-sm text-red-600">{errors.title.message}</p>}
                  </div>

                  <div>
                    <div className="mb-1 flex items-center justify-between gap-3">
                      <label htmlFor="url_alias" className="block text-sm font-medium text-gray-700">
                        URL Alias <span className="text-red-500">*</span>
                      </label>
                      <button
                        type="button"
                        onClick={() => setAllowEditUrlAliasEs((prev) => !prev)}
                        className="inline-flex items-center gap-1 rounded-md border border-gray-300 px-2.5 py-1 text-xs font-medium text-gray-700 hover:bg-gray-100 transition-colors"
                      >
                        <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                        {allowEditUrlAliasEs ? 'Bloquear URL' : 'Editar URL'}
                      </button>
                    </div>
                    <input
                      id="url_alias"
                      type="text"
                      {...register('url_alias', {
                        required: 'El URL alias es requerido',
                      })}
                      disabled={!allowEditUrlAliasEs}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-admin-secondary focus:border-admin-secondary transition-colors disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed"
                    />
                    {!allowEditUrlAliasEs && (
                      <p className="mt-1 text-xs text-gray-500">Haz clic en "Editar URL" para modificar este campo.</p>
                    )}
                    {errors.url_alias && <p className="mt-1 text-sm text-red-600">{errors.url_alias.message}</p>}
                  </div>
                </div>

                <div style={{ display: currentLang === 'en' ? 'block' : 'none' }} className="space-y-4">
                  <div>
                    <label htmlFor="title_en" className="block text-sm font-medium text-gray-700 mb-1">
                      Title
                    </label>
                    <input
                      id="title_en"
                      type="text"
                      {...register('title_en')}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-admin-secondary focus:border-admin-secondary transition-colors"
                    />
                    {errors.title_en && <p className="mt-1 text-sm text-red-600">{errors.title_en.message}</p>}
                  </div>

                  <div>
                    <div className="mb-1 flex items-center justify-between gap-3">
                      <label htmlFor="url_alias_en" className="block text-sm font-medium text-gray-700">
                        URL Alias
                      </label>
                      <button
                        type="button"
                        onClick={() => setAllowEditUrlAliasEn((prev) => !prev)}
                        className="inline-flex items-center gap-1 rounded-md border border-gray-300 px-2.5 py-1 text-xs font-medium text-gray-700 hover:bg-gray-100 transition-colors"
                      >
                        <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                        {allowEditUrlAliasEn ? 'Lock URL' : 'Edit URL'}
                      </button>
                    </div>
                    <input
                      id="url_alias_en"
                      type="text"
                      {...register('url_alias_en')}
                      disabled={!allowEditUrlAliasEn}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-admin-secondary focus:border-admin-secondary transition-colors disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed"
                    />
                    {!allowEditUrlAliasEn && (
                      <p className="mt-1 text-xs text-gray-500">Click "Edit URL" to modify this field.</p>
                    )}
                    {errors.url_alias_en && <p className="mt-1 text-sm text-red-600">{errors.url_alias_en.message}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Cover Image</label>

                  {coverPreviewUrl ? (
                    <div className="mb-3 relative w-full max-w-xs">
                      <img src={coverPreviewUrl} alt="Cover preview" className="w-full h-40 object-cover rounded-lg border border-gray-200" />
                      <button
                        type="button"
                        onClick={handleRemoveCover}
                        className="absolute top-2 right-2 bg-red-600 text-white p-1.5 rounded-full hover:bg-red-700 transition-colors"
                        title="Quitar portada"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  ) : null}

                  {!coverPreviewUrl ? (
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
                      <label htmlFor="cover-upload" className="cursor-pointer flex flex-col items-center">
                        <svg className="w-10 h-10 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                        <span className="text-sm text-gray-600">
                          {uploadingCover ? 'Subiendo portada...' : 'Adjuntar imagen de portada'}
                        </span>
                        <span className="text-xs text-gray-400 mt-1">Solo una imagen. JPG, PNG, WEBP</span>
                      </label>
                      <input
                        id="cover-upload"
                        type="file"
                        accept="image/*"
                        onChange={handleCoverUpload}
                        disabled={uploadingCover}
                        className="hidden"
                      />
                    </div>
                  ) : (
                    <div className="rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-xs text-amber-700">
                      Solo se permite una imagen de portada. Para cambiarla, primero debes quitar la actual.
                    </div>
                  )}

                  <input type="hidden" {...register('cover_image_id')} />
                </div>

                <div style={{ display: currentLang === 'es' ? 'block' : 'none' }}>
                  <label htmlFor="body" className="block text-sm font-medium text-gray-700 mb-1">
                    Contenido HTML <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="hidden"
                    {...register('body', {
                      required: 'El contenido es requerido',
                      validate: (value) => !isHtmlEmpty(value || '') || 'El contenido es requerido',
                    })}
                  />
                  <NewsRichTextEditor
                    value={body || ''}
                    onChange={(nextValue) => setValue('body', nextValue, { shouldDirty: true, shouldValidate: true })}
                    error={errors.body?.message}
                  />
                </div>

                <div style={{ display: currentLang === 'en' ? 'block' : 'none' }}>
                  <label htmlFor="body_en" className="block text-sm font-medium text-gray-700 mb-1">
                    HTML Content
                  </label>
                  <input type="hidden" {...register('body_en')} />
                  <NewsRichTextEditor
                    value={watch('body_en') || ''}
                    onChange={(nextValue) => setValue('body_en', nextValue, { shouldDirty: true, shouldValidate: true })}
                    error={errors.body_en?.message}
                  />
                </div>

                <div className="flex justify-end gap-3 pt-4 border-t">
                  <div className="flex justify-end gap-3">
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
                    ) : mode === 'create' ? (
                      'Crear Noticia'
                    ) : (
                      'Actualizar Noticia'
                    )}
                  </button>
                  </div>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
