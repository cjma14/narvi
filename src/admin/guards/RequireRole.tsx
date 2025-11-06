/**
 * RequireRole Component
 * 
 * Componente HOC que muestra u oculta contenido basado en roles del usuario.
 */

import React from 'react';
import { hasRole, hasAnyRole, hasAllRoles } from '../guards/auth-guard';

interface RequireRoleProps {
  role?: string;
  anyRole?: string[];
  allRoles?: string[];
  fallback?: React.ReactNode;
  children: React.ReactNode;
}

/**
 * Componente para mostrar contenido solo si el usuario tiene los roles necesarios
 * 
 * @example
 * // Requiere un rol específico
 * <RequireRole role="admin">
 *   <button>Panel de Admin</button>
 * </RequireRole>
 * 
 * @example
 * // Requiere al menos uno de los roles
 * <RequireRole anyRole={["admin", "editor"]}>
 *   <button>Editar Contenido</button>
 * </RequireRole>
 * 
 * @example
 * // Con fallback
 * <RequireRole 
 *   role="admin"
 *   fallback={<p>Solo para administradores</p>}
 * >
 *   <button>Configuración Avanzada</button>
 * </RequireRole>
 */
export default function RequireRole({
  role,
  anyRole,
  allRoles,
  fallback = null,
  children,
}: RequireRoleProps) {
  let hasAccess = false;

  if (role) {
    hasAccess = hasRole(role);
  } else if (anyRole) {
    hasAccess = hasAnyRole(anyRole);
  } else if (allRoles) {
    hasAccess = hasAllRoles(allRoles);
  }

  if (!hasAccess) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
}
