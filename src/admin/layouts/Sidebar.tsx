import { useState, useMemo } from 'react';
import { adminNavigation, filterNavigationByPermissions } from '../navigation/navigation';
import SidebarMenuItem from '../components/sidebar/SidebarMenuItem';
import { useAuth } from '../auth/AuthProvider';

interface SidebarProps {
  currentPath?: string;
  isCollapsed?: boolean;
  isMobile?: boolean;
  isOpen?: boolean;
}

/**
 * Sidebar Component
 * Optimized sidebar with memoized navigation items and permission filtering
 */
export default function Sidebar({ currentPath = '', isCollapsed = false, isMobile = false, isOpen = false }: SidebarProps) {
  const [expandedMenus, setExpandedMenus] = useState<Record<string, boolean>>({});
  const { user } = useAuth();

  // Filtrar navegación basada en permisos del usuario
  const filteredNavigation = useMemo(() => {
    if (!user) return [];
    
    return filterNavigationByPermissions(
      adminNavigation,
      user.permissions_list || [],
      user.roles_list || []
    );
  }, [user]);

  const toggleMenu = (menuKey: string) => {
    if (!isCollapsed) {
      setExpandedMenus(prev => ({
        ...prev,
        [menuKey]: !prev[menuKey]
      }));
    }
  };

  // Memoize the isActive function to avoid re-computation
  const isActive = useMemo(() => {
    return (path: string) => {
      // Normalizar las rutas eliminando el trailing slash
      const normalizedCurrentPath = currentPath.endsWith('/') && currentPath !== '/' 
        ? currentPath.slice(0, -1) 
        : currentPath;
      const normalizedPath = path.endsWith('/') && path !== '/' 
        ? path.slice(0, -1) 
        : path;
      
      // Exact match o si current path comienza con el path (para nested routes)
      if (normalizedCurrentPath === normalizedPath) return true;
      
      // Para rutas anidadas, verificar si current path comienza con el path
      // pero solo si path no es la raíz
      if (normalizedPath !== '/admin' && normalizedCurrentPath.startsWith(normalizedPath + '/')) {
        return true;
      }
      
      return false;
    };
  }, [currentPath]);

  return (
    <aside className={`
      ${isCollapsed ? 'w-16' : 'w-64'} 
      bg-admin-primary h-screen text-white flex flex-col
      fixed left-0 top-0 
      ${isMobile ? (isOpen ? 'z-50' : '-translate-x-full z-50') : 'z-50'}
      transition-all duration-300 overflow-hidden
    `}>
      {/* Logo Section */}
      <div className={`p-5 border-admin-primary-700 flex-shrink-0 ${isCollapsed ? 'flex justify-center' : ''}`}>
        <a href="/admin/products" className={`flex items-center ${isCollapsed ? 'justify-center' : 'gap-3'}`}>
          {isCollapsed ? (
            <img src="/img/logo/logo_white.png" alt="Narvi EC" className="w-10 h-10 object-contain" />
          ) : (
            <img src="/img/logo/logo_white.png" alt="Narvi EC" className="w-32 h-auto object-contain" />
          )}
        </a>
      </div>

      {/* Navigation Menu */}
      <nav className={`flex-1 py-4 ${!isCollapsed ? 'overflow-y-auto scrollbar-thin scrollbar-thumb-admin-primary-700 scrollbar-track-admin-primary-800' : 'overflow-hidden'}`}>
        <ul className="space-y-1 px-3">
          {filteredNavigation.map((item) => (
            <SidebarMenuItem
              key={item.href}
              item={item}
              isActive={isActive}
              isCollapsed={isCollapsed}
              expandedMenus={expandedMenus}
              onToggleMenu={toggleMenu}
            />
          ))}
        </ul>
      </nav>

    </aside>
  );
}
