export interface NewsAuthor {
  name: string;
  email?: string;
}

export interface NewsCover {
  id?: number;
  url?: string;
  path?: string;
  width?: number;
  height?: number;
}

export interface UploadedNewsImage {
  id: number;
  url?: string;
  path?: string;
}

export interface News {
  id: number;
  title: string;
  url_alias: string;
  body: string;
  published_at?: string | null;
  created_at?: string;
  author?: NewsAuthor;
  cover?: NewsCover | null;
  cover_image_id?: number | null;
  published?: boolean;
  translations?: Record<string, NewsTranslationFields>;
  translations_data?: Record<string, NewsTranslationFields>;
}

export interface NewsTranslationFields {
  title?: string;
  url_alias?: string;
  body?: string;
}

export interface NewsApiResponse {
  current_page: number;
  data: News[];
  last_page: number;
  per_page: number;
  total: number;
}

export interface NewsFormData {
  title: string;
  url_alias: string;
  body: string;
  title_en: string;
  url_alias_en: string;
  body_en: string;
  published: boolean;
  cover_image_id: string;
}

export interface NewsPayload {
  title: string;
  url_alias: string;
  body: string;
  published: boolean;
  cover_image_id: number | null;
  translations: Record<string, NewsTranslationFields>;
}

export interface NewsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  news: News | null;
  mode: NewsModalMode;
}

export interface NewsQueryParams {
  page: number;
  perPage: number;
}

export type NewsModalMode = 'create' | 'edit';

export type SortDirection = 'asc' | 'desc' | null;

export type SortKey = 'id' | 'title' | 'url_alias' | 'published_at' | 'created_at' | null;
