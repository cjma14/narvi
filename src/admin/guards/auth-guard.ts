/**
 * Auth Guard System
 * 
 * Sistema de protección de rutas basado en permisos y roles.
 * Utiliza cookies para verificar permisos del usuario autenticado.
 */

import Cookies from 'js-cookie';

interface User {
  id: number;
  name: string;
  email: string;
  roles_list?: string[];
  permissions_list?: string[];
}

/**
 * Obtener el usuario actual desde cookies
 */
export function getCurrentUser(): User | null {
  if (typeof window === 'undefined') return null;
  
  try {
    const userCookie = Cookies.get('narvi_user');
    if (!userCookie) return null;
    return JSON.parse(userCookie);
  } catch {
    return null;
  }
}

/**
 * Verificar si el usuario está autenticado
 */
export function isAuthenticated(): boolean {
  return !!Cookies.get('narvi_token') && !!getCurrentUser();
}

/**
 * Verificar si el usuario tiene un permiso específico
 * @param permission - Nombre del permiso (ej: 'users.view', 'products.create')
 */
export function hasPermission(permission: string): boolean {
  const user = getCurrentUser();
  if (!user) return false;
  
  return user.permissions_list?.includes(permission) || false;
}

/**
 * Verificar si el usuario tiene al menos uno de los permisos especificados
 * @param permissions - Array de permisos
 */
export function hasAnyPermission(permissions: string[]): boolean {
  if (!permissions || permissions.length === 0) return true;
  
  const user = getCurrentUser();
  if (!user) return false;
  
  return permissions.some(permission => 
    user.permissions_list?.includes(permission)
  );
}

/**
 * Verificar si el usuario tiene todos los permisos especificados
 * @param permissions - Array de permisos
 */
export function hasAllPermissions(permissions: string[]): boolean {
  if (!permissions || permissions.length === 0) return true;
  
  const user = getCurrentUser();
  if (!user) return false;
  
  return permissions.every(permission => 
    user.permissions_list?.includes(permission)
  );
}

/**
 * Verificar si el usuario tiene un rol específico
 * @param role - Nombre del rol (ej: 'admin', 'editor')
 */
export function hasRole(role: string): boolean {
  const user = getCurrentUser();
  if (!user) return false;
  
  return user.roles_list?.includes(role) || false;
}

/**
 * Verificar si el usuario tiene al menos uno de los roles especificados
 * @param roles - Array de roles
 */
export function hasAnyRole(roles: string[]): boolean {
  if (!roles || roles.length === 0) return true;
  
  const user = getCurrentUser();
  if (!user) return false;
  
  return roles.some(role => user.roles_list?.includes(role));
}

/**
 * Verificar si el usuario tiene todos los roles especificados
 * @param roles - Array de roles
 */
export function hasAllRoles(roles: string[]): boolean {
  if (!roles || roles.length === 0) return true;
  
  const user = getCurrentUser();
  if (!user) return false;
  
  return roles.every(role => user.roles_list?.includes(role));
}

/**
 * Verificar acceso combinando roles y permisos
 * El usuario debe tener al menos un rol Y al menos un permiso
 */
export function canAccess(options: {
  roles?: string[];
  permissions?: string[];
  requireAllRoles?: boolean;
  requireAllPermissions?: boolean;
}): boolean {
  const { roles, permissions, requireAllRoles, requireAllPermissions } = options;
  
  if (!isAuthenticated()) return false;
  
  // Si no se especifican roles ni permisos, solo verifica autenticación
  if (!roles && !permissions) return true;
  
  // Verificar roles
  let rolesValid = true;
  if (roles && roles.length > 0) {
    rolesValid = requireAllRoles 
      ? hasAllRoles(roles)
      : hasAnyRole(roles);
  }
  
  // Verificar permisos
  let permissionsValid = true;
  if (permissions && permissions.length > 0) {
    permissionsValid = requireAllPermissions
      ? hasAllPermissions(permissions)
      : hasAnyPermission(permissions);
  }
  
  return rolesValid && permissionsValid;
}

/**
 * Permisos predefinidos del sistema
 */
export const PERMISSIONS = {
  // Usuarios
  USERS_VIEW: 'users.view',
  USERS_CREATE: 'users.create',
  USERS_EDIT: 'users.edit',
  USERS_DELETE: 'users.delete',
  
  // Productos
  PRODUCTS_VIEW: 'products.view',
  PRODUCTS_CREATE: 'products.create',
  PRODUCTS_EDIT: 'products.edit',
  PRODUCTS_DELETE: 'products.delete',
} as const;

/**
 * Roles predefinidos del sistema
 */
export const ROLES = {
  ADMIN: 'admin',
  EDITOR: 'editor',
  VIEWER: 'viewer',
} as const;

export default {
  isAuthenticated,
  getCurrentUser,
  hasPermission,
  hasAnyPermission,
  hasAllPermissions,
  hasRole,
  hasAnyRole,
  hasAllRoles,
  canAccess,
  PERMISSIONS,
  ROLES,
};
