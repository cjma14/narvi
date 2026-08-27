import type { News, NewsCover, SortDirection, SortKey, UploadedNewsImage } from '../types';

const API_URL = import.meta.env.PUBLIC_API_URL || 'http://localhost:6650';

/** Convierte un texto a un slug URL-friendly. */
export const toSlug = (value: string): string => {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
};

/** Determina si un HTML no contiene texto útil. */
export const isHtmlEmpty = (html: string): boolean => {
  const plainText = html
    .replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .trim();

  return plainText.length === 0;
};

/** Obtiene una URL pública de imagen desde una respuesta heterogénea. */
export const getImageUrl = (imageData?: Partial<NewsCover> | Partial<UploadedNewsImage> | null): string => {
  if (!imageData) {
    return '';
  }

  if (typeof imageData.url === 'string' && imageData.url.length > 0) {
    return imageData.url;
  }

  if (typeof imageData.path === 'string' && imageData.path.length > 0) {
    return `${API_URL}/storage/${imageData.path}`;
  }

  return '';
};

/** Extrae un mensaje usable desde un error desconocido. */
export const getErrorMessage = (error: unknown, fallback: string): string => {
  if (typeof error === 'object' && error !== null && 'message' in error) {
    const message = (error as { message?: unknown }).message;
    if (typeof message === 'string' && message.trim().length > 0) {
      return message;
    }
  }

  return fallback;
};

/** Filtra noticias por título, alias o autor. */
export const filterNews = (newsItems: News[], searchQuery: string): News[] => {
  const query = searchQuery.trim().toLowerCase();

  if (!query) {
    return newsItems;
  }

  return newsItems.filter((item) => {
    const authorName = item.author?.name?.toLowerCase() || '';

    return (
      item.title?.toLowerCase().includes(query) ||
      item.url_alias?.toLowerCase().includes(query) ||
      authorName.includes(query)
    );
  });
};

/** Ordena noticias según la clave y dirección seleccionadas. */
export const sortNews = (newsItems: News[], sortKey: SortKey, sortDirection: SortDirection): News[] => {
  if (!sortKey || !sortDirection) {
    return newsItems;
  }

  return [...newsItems].sort((left, right) => {
    const leftValue = getNewsSortValue(left, sortKey);
    const rightValue = getNewsSortValue(right, sortKey);

    if (typeof leftValue === 'string' && typeof rightValue === 'string') {
      return sortDirection === 'asc'
        ? leftValue.localeCompare(rightValue)
        : rightValue.localeCompare(leftValue);
    }

    return sortDirection === 'asc'
      ? Number(leftValue > rightValue) || -Number(leftValue < rightValue)
      : Number(rightValue > leftValue) || -Number(rightValue < leftValue);
  });
};

const getNewsSortValue = (item: News, sortKey: Exclude<SortKey, null>): string | number => {
  switch (sortKey) {
    case 'id':
      return item.id;
    case 'title':
      return item.title || '';
    case 'url_alias':
      return item.url_alias || '';
    case 'published_at':
      return item.published_at || '';
    case 'created_at':
      return item.created_at || '';
    default:
      return '';
  }
};
