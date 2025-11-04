/**
 * Admin Navigation Structure
 * Defines the navigation menu items for the admin panel
 */

export interface NavItem {
  label: string;
  href: string;
  icon?: string;
  children?: NavItem[];
  permission?: string;
}

export const adminNavigation: NavItem[] = [
  {
    label: 'Dashboard',
    href: '/admin/dashboard',
    icon: 'dashboard',
  },
  {
    label: 'Users',
    href: '/admin/users',
    icon: 'users',
    children: [
      {
        label: 'User List',
        href: '/admin/users/list',
      },
      {
        label: 'Add User',
        href: '/admin/users/add',
      },
    ],
  },
  {
    label: 'Products',
    href: '/admin/products',
    icon: 'products',
    children: [
      {
        label: 'Product List',
        href: '/admin/products/list',
      },
      {
        label: 'Add Product',
        href: '/admin/products/add',
      },
    ],
  },
  {
    label: 'Settings',
    href: '/admin/settings',
    icon: 'settings',
  },
];

export default adminNavigation;
