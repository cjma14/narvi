interface MenuItemProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  isCollapsed: boolean;
}

/**
 * MenuItem Component
 * Sidebar menu item with icon, label and tooltip support
 */
export default function MenuItem({ href, icon, label, isActive, isCollapsed }: MenuItemProps) {
  return (
    <li className="relative group">
      <a
        href={href}
        className={`flex items-center ${isCollapsed ? 'justify-center' : 'gap-3'} px-3 py-2 rounded-lg transition-colors ${
          isActive
            ? 'bg-slate-800 text-white'
            : 'text-slate-400 hover:bg-slate-800 hover:text-white'
        }`}
      >
        <div className="w-5 h-5 flex-shrink-0">{icon}</div>
        {!isCollapsed && <span>{label}</span>}
      </a>
      {isCollapsed && (
        <div className="pointer-events-none absolute left-full ml-2 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-slate-800 text-white text-sm rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-[60]">
          {label}
        </div>
      )}
    </li>
  );
}
