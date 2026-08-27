import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { usePagination } from '../../../hooks/usePagination';
import { newsService } from '../services/news.service';
import type { News, NewsModalMode, SortDirection, SortKey } from '../types';
import { filterNews, getErrorMessage, sortNews } from '../utils/news.utils';

const DEFAULT_ITEMS_PER_PAGE = 15;

/** Encapsula el estado y comportamiento del listado de noticias. */
export function useNews() {
  const pagination = usePagination({ initialItemsPerPage: DEFAULT_ITEMS_PER_PAGE });

  const [news, setNews] = useState<News[]>([]);
  const [filteredNews, setFilteredNews] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);
  const [isServerPaginated, setIsServerPaginated] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortKey, setSortKey] = useState<SortKey>(null);
  const [sortDirection, setSortDirection] = useState<SortDirection>(null);
  const [showModal, setShowModal] = useState(false);
  const [modalMode, setModalMode] = useState<NewsModalMode>('create');
  const [selectedNews, setSelectedNews] = useState<News | null>(null);

  useEffect(() => {
    void loadNews(1, DEFAULT_ITEMS_PER_PAGE);
  }, []);

  useEffect(() => {
    const nextFilteredNews = sortNews(filterNews(news, searchQuery), sortKey, sortDirection);
    setFilteredNews(nextFilteredNews);
  }, [news, searchQuery, sortDirection, sortKey]);

  useEffect(() => {
    if (isServerPaginated) {
      return;
    }

    const nextTotalPages = Math.ceil(filteredNews.length / pagination.itemsPerPage) || 1;

    if (pagination.currentPage > nextTotalPages) {
      pagination.changePage(nextTotalPages);
    }
  }, [filteredNews.length, isServerPaginated, pagination]);

  const loadNews = async (page = pagination.currentPage, perPage = pagination.itemsPerPage) => {
    try {
      setLoading(true);

      const response = await newsService.list({ page, perPage });
      const newsData = response.data || [];
      const hasServerPagination = response.last_page > 1 || response.current_page > 1;

      setNews(newsData);
      setIsServerPaginated(hasServerPagination);
      pagination.syncPagination({
        currentPage: response.current_page || 1,
        itemsPerPage: Number(response.per_page) || perPage,
        totalItems: response.total || newsData.length,
        totalPages: response.last_page || 1,
      });
    } catch (error) {
      console.error('Error loading news:', error);
      toast.error(getErrorMessage(error, 'Error al cargar noticias'));
      setNews([]);
      setFilteredNews([]);
      setIsServerPaginated(true);
      pagination.resetPagination();
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = () => {
    setSelectedNews(null);
    setModalMode('create');
    setShowModal(true);
  };

  const handleEdit = (item: News) => {
    setSelectedNews(item);
    setModalMode('edit');
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleModalSuccess = async () => {
    setShowModal(false);
    await loadNews(pagination.currentPage, pagination.itemsPerPage);
  };

  const handleDelete = (item: News) => {
    toast(
      (toastInstance) => (
        <div className="flex flex-col gap-3">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 mb-1">Eliminar noticia</h3>
              <p className="text-sm text-gray-600">
                Esta accion eliminara <strong>{item.title}</strong> y no se puede deshacer.
              </p>
            </div>
          </div>
          <div className="flex gap-2 justify-end">
            <button
              onClick={() => toast.dismiss(toastInstance.id)}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancelar
            </button>
            <button
              onClick={async () => {
                toast.dismiss(toastInstance.id);

                try {
                  await newsService.delete(item.id);
                  toast.success('Noticia eliminada exitosamente');
                  await loadNews(pagination.currentPage, pagination.itemsPerPage);
                } catch (error) {
                  console.error('Error deleting news:', error);
                  toast.error(getErrorMessage(error, 'Error al eliminar noticia'));
                }
              }}
              className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors"
            >
              Eliminar
            </button>
          </div>
        </div>
      ),
      {
        duration: Infinity,
        position: 'top-center',
        style: {
          background: 'white',
          padding: '16px',
          borderRadius: '12px',
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.15)',
          maxWidth: '420px',
          marginTop: '40vh',
        },
      }
    );
  };

  const handleSort = (key: SortKey) => {
    if (sortKey !== key) {
      setSortKey(key);
      setSortDirection('asc');
      return;
    }

    if (sortDirection === 'asc') {
      setSortDirection('desc');
      return;
    }

    if (sortDirection === 'desc') {
      setSortKey(null);
      setSortDirection(null);
    }
  };

  const handlePageChange = async (page: number) => {
    const currentTotalPages = isServerPaginated
      ? pagination.totalPages
      : Math.ceil(filteredNews.length / pagination.itemsPerPage) || 1;

    if (page < 1 || page > currentTotalPages) {
      return;
    }

    if (isServerPaginated) {
      await loadNews(page, pagination.itemsPerPage);
      return;
    }

    pagination.changePage(page);
  };

  const handleItemsPerPageChange = async (value: number) => {
    if (isServerPaginated) {
      await loadNews(1, value);
      return;
    }

    pagination.changeItemsPerPage(value);
  };

  const displayedNews = isServerPaginated
    ? filteredNews
    : filteredNews.slice(
        (pagination.currentPage - 1) * pagination.itemsPerPage,
        pagination.currentPage * pagination.itemsPerPage
      );

  const currentTotalPages = isServerPaginated
    ? pagination.totalPages
    : Math.ceil(filteredNews.length / pagination.itemsPerPage) || 1;

  const visibleTotalItems = isServerPaginated ? pagination.totalItems : filteredNews.length;

  return {
    currentPage: pagination.currentPage,
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
    itemsPerPage: pagination.itemsPerPage,
    loading,
    modalMode,
    news,
    searchQuery,
    selectedNews,
    setSearchQuery,
    showModal,
    sortDirection,
    sortKey,
    visibleTotalItems,
  };
}
