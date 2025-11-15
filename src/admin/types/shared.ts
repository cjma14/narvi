export interface ProductImage {
  id?: number;
  path: string;
  url?: string;
  order: number;
}

export interface Product {
  id?: number;
  title: string;
  url_alias: string;
  description?: string;
  primary_button_url?: string;
  primary_button_title?: string;
  secondary_button_url?: string;
  secondary_button_title?: string;
  specifications?: string[];
  images?: ProductImage[];
  translations?: {
    en?: {
      title?: string;
      url_alias?: string;
      description?: string;
      primary_button_url?: string;
      primary_button_title?: string;
      secondary_button_url?: string;
      secondary_button_title?: string;
      specifications?: string[];
    };
  };
}

export interface ProductFormData {
  title: string;
  url_alias: string;
  description: string;
  primary_button_url: string;
  primary_button_title: string;
  secondary_button_url: string;
  secondary_button_title: string;
  specifications: string[];
  title_en: string;
  url_alias_en: string;
  description_en: string;
  primary_button_url_en: string;
  primary_button_title_en: string;
  secondary_button_url_en: string;
  secondary_button_title_en: string;
  specifications_en: string[];
}

export interface User {
  id?: number;
  name: string;
  email: string;
  roles_list?: string[];
}

export interface Role {
  id: number;
  name: string;
}

export interface UserFormData {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
  roles: string[];
}
