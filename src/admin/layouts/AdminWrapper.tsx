import { useState, useEffect, type ReactNode } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

interface AdminWrapperProps {
  title?: string;
  breadcrumbs?: { label: string; href?: string }[];
  currentPath: string;
  children: ReactNode;
}

/**
 * AdminWrapper Component
 * Wraps admin pages with sidebar and header, manages collapsed state and mobile menu
 */
export default function AdminWrapper({ title, breadcrumbs, currentPath, children }: AdminWrapperProps) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleSidebar = () => {
    if (isMobile) {
      setIsMobileMenuOpen(prev => !prev);
    } else {
      setIsSidebarCollapsed(prev => !prev);
    }
  };

  const closeMobileMenu = () => {
    if (isMobile) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar - Fixed */}
      <Sidebar 
        currentPath={currentPath} 
        isCollapsed={!isMobile && isSidebarCollapsed}
        isMobile={isMobile}
        isOpen={isMobileMenuOpen}
      />

      {/* Overlay para móvil - Mayor z-index */}
      {isMobile && isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-40 lg:hidden backdrop-blur-sm"
          onClick={closeMobileMenu}
        />
      )}

      {/* Main Content Area */}
      <div className={`
        ${isMobile ? 'ml-0' : (isSidebarCollapsed ? 'ml-16' : 'ml-64')}
        min-h-screen flex flex-col transition-all duration-300
      `}>
        {/* Header - Sticky */}
        <div className="sticky top-0 z-30 bg-white">
          <Header 
            title={title} 
            breadcrumbs={breadcrumbs} 
            onToggleSidebar={toggleSidebar}
            isMobile={isMobile}
          />
        </div>

        {/* Page Content */}
        <main className="flex-1 p-3 sm:p-4 bg-gray-50">
          {children}
        </main>

        {/* Footer (standard admin size) */}
        <footer className="bg-white border-t border-gray-200 px-4 sm:px-6 py-2 sm:py-3">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-1">
            <p className="text-[11px] sm:text-xs text-gray-600">© 2025 Narvi EC. Todos los derechos reservados.</p>
            <p className="text-[11px] sm:text-xs text-gray-500">Admin Panel v1.0</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
