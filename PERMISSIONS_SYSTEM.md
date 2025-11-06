# 🔐 Sistema de Permisos y Roles - Panel Administrativo

## ✅ IMPLEMENTACIÓN COMPLETA

**Fecha:** 5 de Noviembre, 2025  
**Sistema:** Control de Acceso Basado en Permisos (RBAC)  
**Stack:** React + TypeScript + Laravel API

---

## 📋 Resumen Ejecutivo

Se ha implementado un sistema completo de control de acceso basado en roles y permisos que protege:

- ✅ **Rutas completas** (páginas admin)
- ✅ **Módulos específicos** (Usuarios, Productos)
- ✅ **Acciones individuales** (Crear, Editar, Eliminar, Ver)
- ✅ **Elementos de UI** (Botones, menús, secciones)

---

## 🏗️ Arquitectura del Sistema

### 1. Backend API (Laravel + Sanctum)

El backend retorna el usuario con sus roles y permisos:

```json
{
  "user": {
    "id": 1,
    "name": "Admin Narvi",
    "email": "admin@narvi.com",
    "roles_list": ["admin"],
    "permissions_list": [
      "users.view",
      "users.create",
      "users.edit",
      "users.delete",
      "products.view",
      "products.create",
      "products.edit",
      "products.delete"
    ]
  }
}
```

### 2. Frontend (React + Cookies)

**Almacenamiento seguro:**
- Token en cookies (`narvi_token`) - 7 días, secure, sameSite:strict
- Usuario en cookies (`narvi_user`) - Incluye roles y permisos

**Componentes principales:**
1. `auth-guard.ts` - Funciones de verificación de permisos
2. `RequirePermission.tsx` - HOC para elementos UI
3. `RequireRole.tsx` - HOC para roles
4. `ProtectedRoute.tsx` - HOC para rutas completas

---

## 📦 Archivos Creados/Modificados

### Guards y Utilidades

#### `/src/admin/guards/auth-guard.ts`
**Funciones principales:**

```typescript
// Verificación de autenticación
isAuthenticated(): boolean

// Obtener usuario actual
getCurrentUser(): User | null

// Verificación de permisos
hasPermission(permission: string): boolean
hasAnyPermission(permissions: string[]): boolean
hasAllPermissions(permissions: string[]): boolean

// Verificación de roles
hasRole(role: string): boolean
hasAnyRole(roles: string[]): boolean
hasAllRoles(roles: string[]): boolean

// Verificación combinada
canAccess(options: {
  roles?: string[];
  permissions?: string[];
  requireAllRoles?: boolean;
  requireAllPermissions?: boolean;
}): boolean
```

**Constantes de permisos:**
```typescript
export const PERMISSIONS = {
  USERS_VIEW: 'users.view',
  USERS_CREATE: 'users.create',
  USERS_EDIT: 'users.edit',
  USERS_DELETE: 'users.delete',
  PRODUCTS_VIEW: 'products.view',
  PRODUCTS_CREATE: 'products.create',
  PRODUCTS_EDIT: 'products.edit',
  PRODUCTS_DELETE: 'products.delete',
}

export const ROLES = {
  ADMIN: 'admin',
  EDITOR: 'editor',
  VIEWER: 'viewer',
}
```

---

#### `/src/admin/guards/RequirePermission.tsx`
Componente para mostrar/ocultar elementos basado en permisos.

**Uso:**
```tsx
// Permiso único
<RequirePermission permission="users.create">
  <button>Crear Usuario</button>
</RequirePermission>

// Cualquiera de los permisos
<RequirePermission anyPermission={["users.edit", "users.delete"]}>
  <button>Editar o Eliminar</button>
</RequirePermission>

// Todos los permisos requeridos
<RequirePermission allPermissions={["users.view", "users.edit"]}>
  <button>Ver y Editar</button>
</RequirePermission>

// Con fallback
<RequirePermission 
  permission="users.create"
  fallback={<p>No tienes permiso</p>}
>
  <button>Crear Usuario</button>
</RequirePermission>
```

---

#### `/src/admin/guards/RequireRole.tsx`
Componente para mostrar/ocultar elementos basado en roles.

**Uso:**
```tsx
<RequireRole role="admin">
  <button>Panel Admin</button>
</RequireRole>

<RequireRole anyRole={["admin", "editor"]}>
  <button>Editar Contenido</button>
</RequireRole>
```

---

#### `/src/admin/guards/ProtectedRoute.tsx`
Protege rutas completas. Muestra página de "Acceso Denegado" si no tiene permisos.

**Uso:**
```tsx
<ProtectedRoute permissions={["users.view"]}>
  <UsersListPage />
</ProtectedRoute>

<ProtectedRoute roles={["admin"]}>
  <AdminSettingsPage />
</ProtectedRoute>

<ProtectedRoute 
  roles={["admin", "editor"]}
  permissions={["products.edit"]}
>
  <ProductEditPage />
</ProtectedRoute>
```

---

### Navegación Filtrada

#### `/src/admin/navigation/navigation.tsx`

**Función de filtrado:**
```typescript
export function filterNavigationByPermissions(
  items: NavItem[],
  userPermissions: string[],
  userRoles: string[]
): NavItem[]
```

**Items de navegación con permisos:**
```typescript
export const adminNavigation: NavItem[] = [
  {
    label: 'Dashboard',
    href: '/admin',
    icon: DashboardIcon,
    // Sin restricción - visible para todos
  },
  {
    label: 'Usuarios',
    href: '/admin/users',
    icon: UsersIcon,
    permission: 'users.view', // Requiere permiso
    children: [
      {
        label: 'Listado',
        href: '/admin/users',
        icon: ListIcon,
        permission: 'users.view',
      },
    ],
  },
  {
    label: 'Productos',
    href: '/admin/products',
    icon: ProductsIcon,
    permission: 'products.view',
    children: [
      {
        label: 'Listado',
        href: '/admin/products',
        icon: ListIcon,
        permission: 'products.view',
      },
    ],
  },
];
```

---

#### `/src/admin/layouts/Sidebar.tsx`

Sidebar actualizado para filtrar navegación:

```tsx
import { useAuth } from '../auth/AuthProvider';
import { filterNavigationByPermissions } from '../navigation/navigation';

const { user } = useAuth();

const filteredNavigation = useMemo(() => {
  if (!user) return [];
  
  return filterNavigationByPermissions(
    adminNavigation,
    user.permissions_list || [],
    user.roles_list || []
  );
}, [user]);

// Renderizar solo items filtrados
{filteredNavigation.map((item) => (
  <SidebarMenuItem key={item.href} item={item} />
))}
```

---

### Módulos Protegidos

#### `/src/admin/modules/users/UsersPageWrapper.tsx`
Wrapper que protege la página de usuarios:

```tsx
<ProtectedRoute permissions={['users.view']}>
  <UserListTable />
</ProtectedRoute>
```

---

#### `/src/admin/modules/products/ProductsPageWrapper.tsx`
Wrapper que protege la página de productos:

```tsx
<ProtectedRoute permissions={['products.view']}>
  <ProductListTable />
</ProtectedRoute>
```

---

#### `/src/admin/modules/users/UserListTable.tsx`

**Botones protegidos por permisos:**

```tsx
// Botón Agregar
<RequirePermission permission={PERMISSIONS.USERS_CREATE}>
  <button onClick={handleCreate}>Agregar Usuario</button>
</RequirePermission>

// Botón Editar
<RequirePermission permission={PERMISSIONS.USERS_EDIT}>
  <button onClick={handleEdit}>Editar</button>
</RequirePermission>

// Botón Eliminar
<RequirePermission permission={PERMISSIONS.USERS_DELETE}>
  <button onClick={handleDelete}>Eliminar</button>
</RequirePermission>
```

---

#### `/src/admin/modules/products/ProductListTable.tsx`

**Botones protegidos por permisos:**

```tsx
// Botón Agregar Producto
<RequirePermission permission={PERMISSIONS.PRODUCTS_CREATE}>
  <button>Agregar Producto</button>
</RequirePermission>

// Botón Editar
<RequirePermission permission={PERMISSIONS.PRODUCTS_EDIT}>
  <button>Editar</button>
</RequirePermission>

// Botón Eliminar
<RequirePermission permission={PERMISSIONS.PRODUCTS_DELETE}>
  <button>Eliminar</button>
</RequirePermission>

// Botón Ver Detalles
<RequirePermission permission={PERMISSIONS.PRODUCTS_VIEW}>
  <button>Ver Detalles</button>
</RequirePermission>
```

---

### Páginas Astro Actualizadas

#### `/src/pages/admin/users.astro`
```astro
---
import AdminLayout from '../../admin/layouts/AdminLayout.astro';
import UsersPageWrapper from '../../admin/modules/users/UsersPageWrapper.tsx';

const breadcrumbs = [{ label: 'Usuarios' }];
---

<AdminLayout title="Usuarios" breadcrumbs={breadcrumbs}>
  <UsersPageWrapper client:load />
</AdminLayout>
```

---

#### `/src/pages/admin/products.astro`
```astro
---
import AdminLayout from '../../admin/layouts/AdminLayout.astro';
import ProductsPageWrapper from '../../admin/modules/products/ProductsPageWrapper.tsx';

const breadcrumbs = [{ label: 'Productos' }];
---

<AdminLayout title="Productos" breadcrumbs={breadcrumbs}>
  <ProductsPageWrapper client:load />
</AdminLayout>
```

---

## 🎯 Casos de Uso Implementados

### Caso 1: Usuario Admin (Todos los permisos)

**Permisos:**
- ✅ users.view, users.create, users.edit, users.delete
- ✅ products.view, products.create, products.edit, products.delete

**Acceso:**
- ✅ Ve "Usuarios" y "Productos" en sidebar
- ✅ Accede a ambos módulos sin restricción
- ✅ Ve todos los botones (Agregar, Editar, Eliminar)
- ✅ Puede ejecutar todas las acciones

---

### Caso 2: Usuario Editor (Permisos limitados)

**Permisos:**
- ✅ users.view
- ✅ products.view, products.edit

**Acceso:**
- ✅ Ve "Usuarios" y "Productos" en sidebar
- ✅ En Usuarios: Solo ve la lista (sin botones de acción)
- ✅ En Productos: Ve lista, botón Editar y Ver Detalles
- ❌ NO ve botones: Agregar Producto, Eliminar

---

### Caso 3: Usuario Viewer (Solo lectura)

**Permisos:**
- ✅ users.view
- ✅ products.view

**Acceso:**
- ✅ Ve "Usuarios" y "Productos" en sidebar
- ✅ Accede a las listas de ambos módulos
- ✅ Ve botón "Ver Detalles" en Productos
- ❌ NO ve ningún botón de Agregar/Editar/Eliminar

---

### Caso 4: Usuario sin permisos de Productos

**Permisos:**
- ✅ users.view, users.create, users.edit, users.delete

**Acceso:**
- ✅ Ve solo "Usuarios" en sidebar
- ❌ NO ve "Productos" en navegación
- ❌ Si intenta acceder a `/admin/products` directamente → Página "Acceso Denegado"

---

## 🔍 Flujo de Verificación de Permisos

### 1. Login
```
Usuario → Login → API
                   ↓
              Retorna: token + user {roles_list, permissions_list}
                   ↓
              Guarda en cookies (secure, httpOnly simulado)
```

### 2. Navegación
```
Sidebar carga → Lee user de cookies
              ↓
         filterNavigationByPermissions()
              ↓
    Muestra solo items con permisos válidos
```

### 3. Acceso a Ruta
```
Usuario navega a /admin/users
         ↓
   ProtectedRoute verifica permissions: ['users.view']
         ↓
   hasPermission('users.view') → true/false
         ↓
   true: Muestra contenido | false: Página "Acceso Denegado"
```

### 4. Acción en UI
```
Usuario ve botón "Editar"
         ↓
   RequirePermission permission="users.edit"
         ↓
   hasPermission('users.edit') → true/false
         ↓
   true: Botón visible | false: Botón oculto
```

---

## 🧪 Testing de Permisos

### Pruebas Manuales

#### Test 1: Admin Completo ✅
```bash
# Login como admin
curl -X POST http://localhost:6650/api/login \
  -H 'Content-Type: application/json' \
  -d '{"email":"admin@narvi.com","password":"password123"}'

# Verificar permisos
curl -X GET http://localhost:6650/api/user \
  -H 'Authorization: Bearer {token}'
```

**Resultado esperado:**
- ✅ Sidebar muestra: Dashboard, Usuarios, Productos
- ✅ Usuarios: Botones Agregar, Editar, Eliminar visibles
- ✅ Productos: Todos los botones visibles

---

#### Test 2: Usuario sin Productos ❌
**Modificar permisos en backend:**
```php
// Remover permisos de products
$user->revokePermissionTo(['products.view', 'products.create', 'products.edit', 'products.delete']);
```

**Resultado esperado:**
- ✅ Sidebar muestra solo: Dashboard, Usuarios
- ❌ "Productos" NO aparece en menú
- ❌ Acceso a `/admin/products` → Página "Acceso Denegado"

---

#### Test 3: Viewer (Solo Lectura) 👁️
**Permisos:** `users.view`, `products.view`

**Resultado esperado:**
- ✅ Sidebar muestra: Dashboard, Usuarios, Productos
- ✅ Ve ambas listas
- ❌ NO ve botones: Agregar, Editar, Eliminar
- ✅ Solo ve botón "Ver Detalles" en Productos

---

## 📚 Documentación de API de Permisos

### Funciones Disponibles

#### `isAuthenticated(): boolean`
Verifica si hay un token y usuario válidos.

#### `getCurrentUser(): User | null`
Obtiene el usuario actual desde cookies.

#### `hasPermission(permission: string): boolean`
```typescript
hasPermission('users.edit') // → true/false
```

#### `hasAnyPermission(permissions: string[]): boolean`
```typescript
hasAnyPermission(['users.edit', 'users.delete']) // → true si tiene al menos uno
```

#### `hasAllPermissions(permissions: string[]): boolean`
```typescript
hasAllPermissions(['users.view', 'users.edit']) // → true solo si tiene todos
```

#### `hasRole(role: string): boolean`
```typescript
hasRole('admin') // → true/false
```

#### `canAccess(options): boolean`
```typescript
canAccess({
  roles: ['admin', 'editor'],
  permissions: ['products.edit'],
  requireAllRoles: false, // al menos uno
  requireAllPermissions: true, // todos requeridos
})
```

---

### Features Adicionales
- [ ] **Gestión de Roles desde UI**: Crear/editar roles y asignar permisos
- [ ] **Asignación de Roles a Usuarios**: Cambiar rol desde módulo de usuarios
- [ ] **Permisos Granulares**: 
  - `users.view.own` - Solo ver propios datos
  - `products.edit.published` - Solo editar publicados
- [ ] **Audit Log**: Registrar acciones por usuario
- [ ] **Dashboard de Permisos**: Vista admin de todos los permisos del sistema

### Optimizaciones
- [ ] Cache de permisos en memoria (evitar re-computaciones)
- [ ] Service Worker para sync offline de permisos
- [ ] Pre-fetch de permisos al login
- [ ] Lazy loading de módulos según permisos

### Testing
- [ ] Unit tests para funciones de `auth-guard.ts`
- [ ] Integration tests para componentes protegidos
- [ ] E2E tests para flujos completos de permisos

---
