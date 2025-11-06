/**
 * RequirePermission Component
 * 
 * Componente HOC que muestra u oculta contenido basado en permisos del usuario.
 * Útil para controlar la visibilidad de botones, secciones, etc.
 */

import React from 'react';
import { hasPermission, hasAnyPermission, hasAllPermissions } from '../guards/auth-guard';

interface RequirePermissionProps {
  permission?: string;
  anyPermission?: string[];
  allPermissions?: string[];
  fallback?: React.ReactNode;
  children: React.ReactNode;
}

/**
 * Componente para mostrar contenido solo si el usuario tiene los permisos necesarios
 * 
 * @example
 * // Requiere un permiso específico
 * <RequirePermission permission="users.create">
 *   <button>Crear Usuario</button>
 * </RequirePermission>
 * 
 * @example
 * // Requiere al menos uno de los permisos
 * <RequirePermission anyPermission={["users.edit", "users.delete"]}>
 *   <button>Editar o Eliminar</button>
 * </RequirePermission>
 * 
 * @example
 * // Requiere todos los permisos
 * <RequirePermission allPermissions={["users.view", "users.edit"]}>
 *   <button>Ver y Editar</button>
 * </RequirePermission>
 * 
 * @example
 * // Con fallback
 * <RequirePermission 
 *   permission="users.create"
 *   fallback={<p>No tienes permiso</p>}
 * >
 *   <button>Crear Usuario</button>
 * </RequirePermission>
 */
export default function RequirePermission({
  permission,
  anyPermission,
  allPermissions,
  fallback = null,
  children,
}: RequirePermissionProps) {
  let hasAccess = false;

  if (permission) {
    hasAccess = hasPermission(permission);
  } else if (anyPermission) {
    hasAccess = hasAnyPermission(anyPermission);
  } else if (allPermissions) {
    hasAccess = hasAllPermissions(allPermissions);
  }

  if (!hasAccess) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
}
