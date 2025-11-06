/**
 * ProtectedRoute Component
 * 
 * Componente para proteger rutas completas basado en permisos y roles.
 * Redirige a una página de acceso denegado si el usuario no tiene permiso.
 */

import { useEffect, useState } from 'react';
import { canAccess } from '../guards/auth-guard';

interface ProtectedRouteProps {
  permissions?: string[];
  roles?: string[];
  requireAllPermissions?: boolean;
  requireAllRoles?: boolean;
  fallback?: React.ReactNode;
  children: React.ReactNode;
}

/**
 * Componente para proteger rutas completas
 * 
 * @example
 * // Requiere permiso específico
 * <ProtectedRoute permissions={["users.view"]}>
 *   <UsersListPage />
 * </ProtectedRoute>
 * 
 * @example
 * // Requiere rol admin
 * <ProtectedRoute roles={["admin"]}>
 *   <AdminSettingsPage />
 * </ProtectedRoute>
 * 
 * @example
 * // Combinar roles y permisos
 * <ProtectedRoute 
 *   roles={["admin", "editor"]}
 *   permissions={["products.edit"]}
 * >
 *   <ProductEditPage />
 * </ProtectedRoute>
 */
export default function ProtectedRoute({
  permissions,
  roles,
  requireAllPermissions = false,
  requireAllRoles = false,
  fallback,
  children,
}: ProtectedRouteProps) {
  const [hasAccess, setHasAccess] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAccess = canAccess({
      permissions,
      roles,
      requireAllPermissions,
      requireAllRoles,
    });

    setHasAccess(checkAccess);

    if (!checkAccess) {
      console.warn('Access denied:', { permissions, roles });
    }
  }, [permissions, roles, requireAllPermissions, requireAllRoles]);

  if (hasAccess === null) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-admin-secondary border-t-transparent"></div>
      </div>
    );
  }

  if (!hasAccess) {
    if (fallback) {
      return <>{fallback}</>;
    }

    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="mb-4">
            <svg 
              className="w-16 h-16 text-red-500 mx-auto" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" 
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Acceso Denegado
          </h2>
          <p className="text-gray-600 mb-6">
            No tienes los permisos necesarios para acceder a esta página.
          </p>
          <div className="flex gap-3 justify-center">
            <button
              onClick={() => window.history.back()}
              className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg transition-colors"
            >
              Volver
            </button>
            <a
              href="/admin"
              className="px-4 py-2 bg-admin-secondary hover:bg-admin-secondary-600 text-white rounded-lg transition-colors"
            >
              Ir al Dashboard
            </a>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
