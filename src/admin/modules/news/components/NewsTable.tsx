import toast, { Toaster } from 'react-hot-toast';
import RequirePermission from '../../../guards/RequirePermission';
import { PERMISSIONS } from '../../../guards/auth-guard';
import { useNews } from '../hooks/useNews';
import type { SortKey } from '../types';
import NewsModal from './NewsModal';

type ColumnKey = Exclude<SortKey, null> | 'author' | 'actions';

interface NewsColumn {
  key: ColumnKey;
  label: string;
  width?: string;
  sortable: boolean;
}

const columns: NewsColumn[] = [
  { key: 'id', label: 'ID', width: '80px', sortable: true },
  { key: 'title', label: 'Titulo', sortable: true },
  { key: 'url_alias', label: 'URL Alias', sortable: true },
  { key: 'author', label: 'Autor', width: '180px', sortable: false },
  { key: 'published_at', label: 'Publicacion', width: '180px', sortable: true },
  { key: 'actions', label: 'Acciones', width: '160px', sortable: false },
];

export default function NewsTable() {
  const {
    currentPage,
    currentTotalPages,
    displayedNews,
    filteredNews,
    handleCloseModal,
    handleCreate,
    handleDelete,
    handleEdit,
    handleItemsPerPageChange,
    handleModalSuccess,
    handlePageChange,
    handleSort,
    isServerPaginated,
    itemsPerPage,
    loading,
    modalMode,
    searchQuery,
    selectedNews,
    setSearchQuery,
    showModal,
    sortDirection,
    sortKey,
    visibleTotalItems,
  } = useNews();

  return (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={12}
        toastOptions={{
          duration: 3000,
          style: {
            background: '#ffffff',
            color: '#1f2937',
            padding: '12px 16px',
            borderRadius: '8px',
            fontSize: '14px',
            fontWeight: '500',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
            border: '1px solid #e5e7eb',
            maxWidth: '420px',
          },
          success: {
            iconTheme: {
              primary: '#10b981',
              secondary: '#ffffff',
            },
            style: {
              borderLeft: '4px solid #10b981',
            },
          },
          error: {
            iconTheme: {
              primary: '#ef4444',
              secondary: '#ffffff',
            },
            style: {
              borderLeft: '4px solid #ef4444',
            },
          },
        }}
      />

      <div className="space-y-4">
        <nav className="flex items-center gap-2 text-sm">
          <a href="/admin/news" className="text-gray-500 hover:text-admin-secondary transition-colors">Inicio</a>
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-admin-secondary font-medium">Noticias</span>
        </nav>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Gestion de Noticias</h1>
              <p className="text-sm text-gray-500 mt-1">Administra las noticias publicadas en el sitio</p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <div className="relative flex-1 sm:flex-initial">
                <svg
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Buscar noticias..."
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  className="w-full sm:w-64 pl-9 pr-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-admin-secondary focus:border-admin-secondary transition-colors"
                />
              </div>

              <RequirePermission permission={PERMISSIONS.NEWS_CREATE}>
                <button
                  onClick={handleCreate}
                  className="flex items-center justify-center gap-2 bg-admin-secondary hover:bg-admin-secondary-600 text-white font-medium px-4 py-2.5 rounded-lg transition-colors shadow-sm hover:shadow whitespace-nowrap"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  <span className="hidden sm:inline">Agregar Noticia</span>
                  <span className="sm:hidden">Agregar</span>
                </button>
              </RequirePermission>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden flex flex-col" style={{ height: 'calc(100vh - 340px)', minHeight: '400px' }}>
          <div className="overflow-x-auto overflow-y-auto flex-1">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gradient-to-r from-gray-50 to-gray-100 sticky top-0 z-10 shadow-sm">
                <tr>
                  {columns.map((column) => (
                    <th
                      key={column.key}
                      scope="col"
                      className={`
                        px-6 py-3.5 text-xs font-semibold text-gray-700 uppercase tracking-wider
                        ${column.key === 'actions' ? 'text-center' : 'text-left'}
                        ${column.sortable ? 'cursor-pointer hover:bg-gray-200 transition-colors select-none' : ''}
                      `}
                      style={{ width: column.width }}
                      onClick={() => {
                        if (!column.sortable) {
                          return;
                        }

                        const sortableKey = column.key === 'author' || column.key === 'actions' ? null : column.key;
                        handleSort(sortableKey);
                      }}
                    >
                      <div className="flex items-center gap-2 justify-between">
                        <span>{column.label}</span>
                        {column.sortable && (
                          <svg
                            className={`w-4 h-4 transition-all flex-shrink-0 ${
                              sortKey === column.key && sortDirection === 'asc'
                                ? 'rotate-180 text-admin-secondary scale-110'
                                : sortKey === column.key && sortDirection === 'desc'
                                  ? 'text-admin-secondary scale-110'
                                  : 'text-gray-400'
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        )}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody className="bg-white divide-y divide-gray-200">
                {loading ? (
                  <tr>
                    <td colSpan={6} className="px-6 py-12 text-center">
                      <div className="flex flex-col items-center justify-center">
                        <div className="inline-block animate-spin rounded-full h-10 w-10 border-4 border-admin-secondary border-t-transparent"></div>
                        <p className="mt-4 text-sm text-gray-500 font-medium">Cargando noticias...</p>
                      </div>
                    </td>
                  </tr>
                ) : displayedNews.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-6 py-12 text-center">
                      <div className="flex flex-col items-center justify-center">
                        <svg className="w-16 h-16 text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                        <p className="text-gray-500 font-medium">No se encontraron noticias</p>
                        <p className="text-sm text-gray-400 mt-1">Intenta ajustar los filtros de busqueda</p>
                      </div>
                    </td>
                  </tr>
                ) : (
                  displayedNews.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">{item.id}</td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        <div className="flex items-center gap-3">
                          {item.cover?.url ? (
                            <img src={item.cover.url} alt={item.title} className="w-12 h-12 rounded object-cover" />
                          ) : (
                            <div className="w-12 h-12 rounded bg-gray-200 flex items-center justify-center">
                              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14" />
                              </svg>
                            </div>
                          )}
                          <span className="font-medium text-gray-900">{item.title}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">/{item.url_alias}</td>
                      <td className="px-6 py-4 text-sm text-gray-700">{item.author?.name || '-'}</td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        {item.published_at ? new Date(item.published_at).toLocaleString('es-EC') : 'Borrador'}
                      </td>
                      <td className="px-6 py-4 text-sm text-center">
                        <div className="flex items-center justify-center gap-1">
                          <RequirePermission permission={PERMISSIONS.NEWS_EDIT}>
                            <button
                              onClick={(event) => {
                                event.stopPropagation();
                                handleEdit(item);
                              }}
                              className="p-2 text-admin-secondary hover:bg-admin-secondary hover:text-white rounded-lg transition-all duration-200 hover:shadow-md"
                              title="Editar noticia"
                            >
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                              </svg>
                            </button>
                          </RequirePermission>

                          <RequirePermission permission={PERMISSIONS.NEWS_DELETE}>
                            <button
                              onClick={(event) => {
                                event.stopPropagation();
                                handleDelete(item);
                              }}
                              className="p-2 text-red-600 hover:bg-red-600 hover:text-white rounded-lg transition-all duration-200 hover:shadow-md"
                              title="Eliminar noticia"
                            >
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                            </button>
                          </RequirePermission>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-4 sm:px-6 py-3.5 border-t-2 border-gray-200">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-sm">
                <span className="text-gray-600 font-medium">Mostrar</span>
                <div className="relative">
                  <select
                    value={itemsPerPage}
                    onChange={(event) => {
                      void handleItemsPerPageChange(Number(event.target.value));
                    }}
                    className="appearance-none border border-gray-300 rounded-lg px-4 py-2 pr-10 text-sm font-medium focus:ring-2 focus:ring-admin-secondary focus:border-admin-secondary outline-none bg-white cursor-pointer hover:border-admin-secondary transition-colors"
                  >
                    <option value={10}>10</option>
                    <option value={15}>15</option>
                    <option value={25}>25</option>
                    <option value={50}>50</option>
                  </select>
                  <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                <span className="text-gray-600">
                  de <span className="font-semibold text-gray-900">{visibleTotalItems}</span> registros
                </span>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={() => {
                    void handlePageChange(1);
                  }}
                  disabled={currentPage === 1}
                  className="p-2 rounded-lg text-gray-600 hover:bg-white hover:text-admin-secondary disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent transition-all shadow-sm hover:shadow"
                  title="Primera pagina"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                  </svg>
                </button>

                <button
                  onClick={() => {
                    void handlePageChange(currentPage - 1);
                  }}
                  disabled={currentPage === 1}
                  className="p-2 rounded-lg text-gray-600 hover:bg-white hover:text-admin-secondary disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent transition-all shadow-sm hover:shadow"
                  title="Pagina anterior"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <div className="px-4 py-2 bg-white border border-gray-200 rounded-lg mx-1">
                  <span className="text-sm font-semibold text-gray-900">{currentPage}</span>
                  <span className="text-sm text-gray-500"> / {currentTotalPages}</span>
                </div>

                <button
                  onClick={() => {
                    void handlePageChange(currentPage + 1);
                  }}
                  disabled={currentPage === currentTotalPages}
                  className="p-2 rounded-lg text-gray-600 hover:bg-white hover:text-admin-secondary disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent transition-all shadow-sm hover:shadow"
                  title="Pagina siguiente"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                <button
                  onClick={() => {
                    void handlePageChange(currentTotalPages);
                  }}
                  disabled={currentPage === currentTotalPages}
                  className="p-2 rounded-lg text-gray-600 hover:bg-white hover:text-admin-secondary disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent transition-all shadow-sm hover:shadow"
                  title="Ultima pagina"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <NewsModal
          isOpen={showModal}
          onClose={handleCloseModal}
          onSuccess={() => {
            void handleModalSuccess();
          }}
          news={selectedNews}
          mode={modalMode}
        />
      </div>
    </>
  );
}
