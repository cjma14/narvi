import api from '../../../utils/api';
import type { News, NewsApiResponse, NewsPayload, NewsQueryParams, UploadedNewsImage } from '../types';

const isRecord = (value: unknown): value is Record<string, unknown> => {
  return typeof value === 'object' && value !== null;
};

class NewsService {
  /** Obtiene un listado de noticias con paginación normalizada. */
  async list({ page, perPage }: NewsQueryParams): Promise<NewsApiResponse> {
    const response = await api.get(`/api/news?page=${page}&per_page=${perPage}`);
    return this.normalizeNewsListResponse(response, perPage);
  }

  /** Obtiene el detalle normalizado de una noticia. */
  async getById(id: number): Promise<News> {
    const response = await api.get(`/api/news/${id}`);
    return this.normalizeNewsDetailResponse(response);
  }

  /** Crea una noticia. */
  async create(payload: NewsPayload): Promise<News> {
    const response = await api.post('/api/news', payload);
    return this.normalizeNewsDetailResponse(response);
  }

  /** Actualiza una noticia existente. */
  async update(id: number, payload: NewsPayload): Promise<News> {
    const response = await api.put(`/api/news/${id}`, payload);
    return this.normalizeNewsDetailResponse(response);
  }

  /** Elimina una noticia. */
  async delete(id: number): Promise<void> {
    await api.delete(`/api/news/${id}`);
  }

  /** Sube una imagen de portada y retorna la entidad normalizada. */
  async uploadCover(file: File): Promise<UploadedNewsImage> {
    const formData = new FormData();
    formData.append('image', file);
    formData.append('type', 'cover');

    const response = await api.postFormData('/api/images', formData);
    const image = this.normalizeUploadedImageResponse(response);

    if (!image?.id) {
      throw new Error('La API no retorno un id de imagen valido');
    }

    return image;
  }

  /** Normaliza cualquier variación del payload paginado del backend. */
  private normalizeNewsListResponse(response: unknown, fallbackPerPage: number): NewsApiResponse {
    if (isRecord(response) && Array.isArray(response.data) && typeof response.current_page === 'number') {
      return {
        current_page: response.current_page as number,
        data: response.data as News[],
        last_page: Number(response.last_page) || 1,
        per_page: Number(response.per_page) || fallbackPerPage,
        total: Number(response.total) || (response.data as News[]).length,
      };
    }

    if (
      isRecord(response) &&
      isRecord(response.data) &&
      Array.isArray(response.data.data) &&
      typeof response.data.current_page === 'number'
    ) {
      return {
        current_page: response.data.current_page as number,
        data: response.data.data as News[],
        last_page: Number(response.data.last_page) || 1,
        per_page: Number(response.data.per_page) || fallbackPerPage,
        total: Number(response.data.total) || (response.data.data as News[]).length,
      };
    }

    if (Array.isArray(response)) {
      return {
        current_page: 1,
        data: response as News[],
        last_page: 1,
        per_page: response.length || fallbackPerPage,
        total: response.length,
      };
    }

    if (isRecord(response) && Array.isArray(response.data)) {
      return {
        current_page: 1,
        data: response.data as News[],
        last_page: 1,
        per_page: (response.data as News[]).length || fallbackPerPage,
        total: (response.data as News[]).length,
      };
    }

    return {
      current_page: 1,
      data: [],
      last_page: 1,
      per_page: fallbackPerPage,
      total: 0,
    };
  }

  /** Normaliza el detalle de una noticia. */
  private normalizeNewsDetailResponse(response: unknown): News {
    if (isRecord(response) && isRecord(response.news)) {
      return response.news as News;
    }

    if (isRecord(response) && isRecord(response.data) && isRecord(response.data.news)) {
      return response.data.news as News;
    }

    if (isRecord(response) && isRecord(response.data)) {
      return response.data as News;
    }

    return response as News;
  }

  /** Normaliza la respuesta de subida de imágenes. */
  private normalizeUploadedImageResponse(response: unknown): UploadedNewsImage {
    if (isRecord(response) && isRecord(response.image)) {
      return response.image as UploadedNewsImage;
    }

    if (isRecord(response) && isRecord(response.data) && isRecord(response.data.image)) {
      return response.data.image as UploadedNewsImage;
    }

    if (isRecord(response) && isRecord(response.data)) {
      return response.data as UploadedNewsImage;
    }

    return response as UploadedNewsImage;
  }
}

export const newsService = new NewsService();
