import { useState, useRef, useEffect } from 'react';
import { useAuth } from '../../auth/AuthProvider';

/**
 * ProfileMenu Component
 * User profile dropdown menu with avatar and actions
 * Datos obtenidos del usuario autenticado
 */
export default function ProfileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const auth = useAuth();
  
  // Obtener datos del usuario autenticado
  const user = auth.user;
  const userName = user?.name || 'Usuario';
  const userEmail = user?.email || '';
  const userRole = user?.roles_list?.[0] || 'Sin rol';

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative" ref={menuRef}>
      {auth.isAuthenticated ? (
        <>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Abrir menú de usuario"
            aria-expanded={isOpen}
          >
            {/* Avatar */}
            <div className="relative">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-admin-secondary to-admin-primary flex items-center justify-center ring-2 ring-gray-200">
                <span className="text-white font-semibold text-sm">
                  {userName.charAt(0).toUpperCase()}
                </span>
              </div>
              {/* Online indicator */}
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
            </div>

            {/* User info - Hidden on mobile */}
            <div className="hidden lg:block text-left">
              <p className="text-xs text-gray-500 leading-tight">{userEmail}</p>
              <p className="text-sm font-medium text-gray-900 leading-tight capitalize">{userRole}</p>
            </div>

            {/* Chevron icon */}
            <svg 
              className={`hidden lg:block w-4 h-4 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </>
      ) : (
        <a href="/admin/login" className="text-sm font-medium text-blue-600 hover:text-blue-500 px-3 py-2 rounded-md">
          Iniciar sesión
        </a>
      )}

      {/* Dropdown Menu */}
      {auth.isAuthenticated && isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
          {/* User Info Header */}
          <div className="px-4 py-3 border-b border-gray-100">
            <p className="text-sm font-semibold text-gray-900">{userName}</p>
            <p className="text-xs text-gray-500 mt-1">{userEmail}</p>
            <span className="inline-block mt-2 px-2.5 py-1 text-xs font-medium bg-admin-secondary/10 text-admin-secondary rounded-full capitalize">
              {userRole}
            </span>
          </div>

          {/* Logout Button */}
          <div className="pt-1">
            <button
              onClick={() => {
                setIsOpen(false);
                auth.logout();
              }}
              className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              <span className="font-semibold">Cerrar Sesión</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
