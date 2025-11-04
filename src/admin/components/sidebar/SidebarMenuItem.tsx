import { useState, type ReactNode } from 'react';
import type { NavItem, NavSubItem } from '../../navigation/navigation';

interface SidebarMenuItemProps {
  item: NavItem;
  isActive: (path: string) => boolean;
  isCollapsed: boolean;
  expandedMenus: Record<string, boolean>;
  onToggleMenu: (key: string) => void;
}

/**
 * SidebarMenuItem Component
 * Individual menu item with support for nested children and tooltips
 */
export default function SidebarMenuItem({ 
  item, 
  isActive, 
  isCollapsed, 
  expandedMenus, 
  onToggleMenu 
}: SidebarMenuItemProps) {
  
  // Items with children (submenus)
  if (item.children) {
    return (
      <li className="relative group">
        {isCollapsed ? (
          <a
            href={item.href}
            className={`flex items-center justify-center px-3 py-2.5 rounded-lg transition-colors ${
              isActive(item.href)
                ? 'bg-admin-secondary text-white'
                : 'text-gray-300 hover:bg-admin-primary-700 hover:text-white'
            }`}
          >
            {item.icon}
          </a>
        ) : (
          <button
            onClick={() => item.key && onToggleMenu(item.key)}
            className="w-full flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg text-gray-300 hover:bg-admin-primary-700 hover:text-white transition-colors"
          >
            <div className="flex items-center gap-3">
              {item.icon}
              <span className="font-medium">{item.label}</span>
            </div>
            <svg
              className={`w-4 h-4 transition-transform ${item.key && expandedMenus[item.key] ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        )}
        
        {/* Tooltip for collapsed state */}
        {isCollapsed && (
          <div className="pointer-events-none absolute left-full ml-2 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-admin-primary-800 text-white text-sm rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-[60]">
            {item.label}
          </div>
        )}
        
        {/* Submenu */}
        {!isCollapsed && item.key && expandedMenus[item.key] && (
          <ul className="mt-1 ml-8 space-y-1">
            {item.children.map((child) => (
              <li key={child.href}>
                <a
                  href={child.href}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                    isActive(child.href)
                      ? 'bg-admin-secondary text-white'
                      : 'text-gray-300 hover:bg-admin-primary-700 hover:text-white'
                  }`}
                >
                  {child.icon}
                  {child.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </li>
    );
  }

  // Simple menu items without children
  return (
    <li className="relative group">
      <a
        href={item.href}
        className={`flex items-center ${isCollapsed ? 'justify-center' : 'gap-3'} px-3 py-2.5 rounded-lg transition-colors ${
          isActive(item.href)
            ? 'bg-admin-secondary text-white'
            : 'text-gray-300 hover:bg-admin-primary-700 hover:text-white'
        }`}
      >
        {item.icon}
        {!isCollapsed && <span className="font-medium">{item.label}</span>}
      </a>
      
      {/* Tooltip for collapsed state */}
      {isCollapsed && (
        <div className="pointer-events-none absolute left-full ml-2 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-admin-primary-800 text-white text-sm rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-[60]">
          {item.label}
        </div>
      )}
    </li>
  );
}
