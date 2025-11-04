import ProfileMenu from '../components/header/ProfileMenu';
import FullscreenToggle from '../components/header/FullscreenToggle';

interface HeaderProps {
  title?: string;
  breadcrumbs?: { label: string; href?: string }[];
  onToggleSidebar?: () => void;
  isMobile?: boolean;
}

/**
 * Header Component
 * Top header bar with hamburger menu and user profile
 * Responsive design for mobile and desktop
 */
export default function Header({ title = 'Listado de usuarios', breadcrumbs = [], onToggleSidebar, isMobile = false }: HeaderProps) {

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
  <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
        {/* Left Section - Hamburger and Breadcrumbs */}
        <div className="flex items-center gap-2 sm:gap-4 flex-1 min-w-0">
          <button 
            onClick={onToggleSidebar}
            className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 p-2 rounded-lg transition-colors flex-shrink-0"
            title={isMobile ? "Abrir menú" : "Toggle Sidebar"}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

        </div>

        {/* Right Section - Actions and Profile */}
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          {/* Fullscreen Toggle */}
          <FullscreenToggle />

          {/* Profile Menu */}
          <ProfileMenu />
        </div>
      </div>
    </header>
  );
}
