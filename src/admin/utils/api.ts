/**
 * API Utilities
 * Helpers para hacer peticiones autenticadas al backend
 */

import Cookies from 'js-cookie';
import toast from 'react-hot-toast';

const TOKEN_KEY = 'narvi_token';

// URL base de la API desde variables de entorno
const API_URL = import.meta.env.PUBLIC_API_URL || 'http://localhost:6650';

/**
 * Obtener el token de autenticación desde cookies
 */
export function getAuthToken(): string | null {
  if (typeof window === 'undefined') return null;
  return Cookies.get(TOKEN_KEY) || null;
}

/**
 * Fetch con autenticación automática
 * Agrega el header Authorization: Bearer {token} a todas las peticiones
 */
export async function fetchWithAuth(
  endpoint: string,
  options: RequestInit = {}
): Promise<Response> {
  const token = getAuthToken();

  // Headers por defecto
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    ...options.headers,
  };

  // Agregar token si existe
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  // URL completa
  const url = endpoint.startsWith('http') ? endpoint : `${API_URL}${endpoint}`;

  try {
    const response = await fetch(url, {
      ...options,
      headers,
    });

    // Manejar errores de autenticación
    if (response.status === 401) {
      toast.error('Sesión expirada. Por favor inicia sesión nuevamente.');
      
      // Limpiar cookies y redirigir
      Cookies.remove(TOKEN_KEY);
      Cookies.remove('narvi_user');
      
      setTimeout(() => {
        window.location.href = '/admin/login';
      }, 1500);
      
      throw new Error('Unauthorized');
    }

    return response;
  } catch (error) {
    console.error('API Request Error:', error);
    throw error;
  }
}

/**
 * GET request autenticado
 */
export async function apiGet<T = any>(endpoint: string): Promise<T> {
  const response = await fetchWithAuth(endpoint, {
    method: 'GET',
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: 'Error desconocido' }));
    throw new Error(error.message || `HTTP ${response.status}`);
  }

  return response.json();
}

/**
 * POST request autenticado
 */
export async function apiPost<T = any>(endpoint: string, data?: any): Promise<T> {
  const response = await fetchWithAuth(endpoint, {
    method: 'POST',
    body: data ? JSON.stringify(data) : undefined,
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: 'Error desconocido' }));
    throw new Error(error.message || `HTTP ${response.status}`);
  }

  return response.json();
}

/**
 * PUT request autenticado
 */
export async function apiPut<T = any>(endpoint: string, data?: any): Promise<T> {
  const response = await fetchWithAuth(endpoint, {
    method: 'PUT',
    body: data ? JSON.stringify(data) : undefined,
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: 'Error desconocido' }));
    throw new Error(error.message || `HTTP ${response.status}`);
  }

  return response.json();
}

/**
 * DELETE request autenticado
 */
export async function apiDelete<T = any>(endpoint: string): Promise<T> {
  const response = await fetchWithAuth(endpoint, {
    method: 'DELETE',
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: 'Error desconocido' }));
    throw new Error(error.message || `HTTP ${response.status}`);
  }

  return response.json();
}

/**
 * POST request autenticado para FormData (archivos)
 */
export async function apiPostFormData<T = any>(endpoint: string, formData: FormData): Promise<T> {
  const token = getAuthToken();
  
  // Headers sin Content-Type para FormData (el navegador lo setea automáticamente con boundary)
  const headers: HeadersInit = {
    'Accept': 'application/json',
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const url = endpoint.startsWith('http') ? endpoint : `${API_URL}${endpoint}`;

  const response = await fetch(url, {
    method: 'POST',
    headers,
    body: formData,
  });

  if (response.status === 401) {
    toast.error('Sesión expirada. Por favor inicia sesión nuevamente.');
    Cookies.remove(TOKEN_KEY);
    Cookies.remove('narvi_user');
    setTimeout(() => {
      window.location.href = '/admin/login';
    }, 1500);
    throw new Error('Unauthorized');
  }

  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: 'Error desconocido' }));
    throw new Error(error.message || `HTTP ${response.status}`);
  }

  return response.json();
}

/**
 * Verificar si el usuario tiene un permiso específico
 */
export function hasPermission(permission: string): boolean {
  if (typeof window === 'undefined') return false;
  
  try {
    const userCookie = Cookies.get('narvi_user');
    if (!userCookie) return false;
    
    const user = JSON.parse(userCookie);
    return user.permissions_list?.includes(permission) || false;
  } catch {
    return false;
  }
}

/**
 * Verificar si el usuario tiene un rol específico
 */
export function hasRole(role: string): boolean {
  if (typeof window === 'undefined') return false;
  
  try {
    const userCookie = Cookies.get('narvi_user');
    if (!userCookie) return false;
    
    const user = JSON.parse(userCookie);
    return user.roles_list?.includes(role) || false;
  } catch {
    return false;
  }
}

export default {
  get: apiGet,
  post: apiPost,
  put: apiPut,
  delete: apiDelete,
  postFormData: apiPostFormData,
  fetchWithAuth,
  hasPermission,
  hasRole,
};
