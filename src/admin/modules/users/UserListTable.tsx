import { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Table, { type TableColumn } from '../../shared/Table';
import RequirePermission from '../../guards/RequirePermission';
import { PERMISSIONS } from '../../guards/auth-guard';
import api from '../../utils/api';
import UserModal from './UserModal';

interface User {
  id: number;
  name: string;
  email: string;
  roles_list?: string[];
  permissions_list?: string[];
  created_at?: string;
  updated_at?: string;
}

type SortDirection = 'asc' | 'desc' | null;
type SortKey = keyof User | null;

/**
 * UserListTable Component
 * Tabla de listado de usuarios con búsqueda, ordenamiento y paginación integrada
 * Ahora con integración real al backend API
 */
export default function UserListTable() {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortKey, setSortKey] = useState<SortKey>(null);
  const [sortDirection, setSortDirection] = useState<SortDirection>(null);
  const [showModal, setShowModal] = useState(false);
  const [modalMode, setModalMode] = useState<'create' | 'edit'>('create');
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  // Cargar usuarios desde la API
  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      setLoading(true);
      const response = await api.get('/api/users');
      
      // El backend puede retornar paginación { data: [...] } o directamente [...]
      const usersData = response.data || response;
      setUsers(usersData);
      setFilteredUsers(usersData);
      
      if (usersData.length > 0) {
        setCurrentPage(1);
      }
    } catch (error: any) {
      console.error('Error loading users:', error);
      toast.error(error.message || 'Error al cargar usuarios');
      setUsers([]);
      setFilteredUsers([]);
    } finally {
      setLoading(false);
    }
  };

  // Búsqueda
  useEffect(() => {
    let filtered = users;
    
    if (searchQuery) {
      filtered = users.filter(user => 
        user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (user.roles_list && user.roles_list.join(', ').toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Ordenamiento
    if (sortKey && sortDirection) {
      filtered = [...filtered].sort((a, b) => {
        const aValue = a[sortKey];
        const bValue = b[sortKey];
        
        if (typeof aValue === 'string' && typeof bValue === 'string') {
          return sortDirection === 'asc' 
            ? aValue.localeCompare(bValue)
            : bValue.localeCompare(aValue);
        }
        
        return sortDirection === 'asc'
          ? (aValue > bValue ? 1 : -1)
          : (bValue > aValue ? 1 : -1);
      });
    }

    setFilteredUsers(filtered);
    setCurrentPage(1);
  }, [searchQuery, users, sortKey, sortDirection]);

  const handleEdit = (user: User) => {
    setSelectedUser(user);
    setModalMode('edit');
    setShowModal(true);
  };

  const handleDelete = async (user: User) => {
    // Toast de confirmación personalizado
    toast((t) => (
      <div className="flex flex-col gap-3">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
            <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 mb-1">¿Eliminar usuario?</h3>
            <p className="text-sm text-gray-600">
              ¿Está seguro de eliminar a <strong>{user.name}</strong>?
              <br />
              Esta acción no se puede deshacer.
            </p>
          </div>
        </div>
        <div className="flex gap-2 justify-end">
          <button
            onClick={() => toast.dismiss(t.id)}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Cancelar
          </button>
          <button
            onClick={async () => {
              toast.dismiss(t.id);
              try {
                await api.delete(`/api/users/${user.id}`);
                
                toast.success('Usuario eliminado exitosamente');
                
                loadUsers();
              } catch (error: any) {
                console.error('Error deleting user:', error);
                toast.error(error.message || 'Error al eliminar usuario');
              }
            }}
            className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors"
          >
            Eliminar
          </button>
        </div>
      </div>
    ), {
      duration: Infinity,
      position: 'top-center',
      style: {
        background: 'white',
        padding: '16px',
        borderRadius: '12px',
        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.15)',
        maxWidth: '420px',
        marginTop: '40vh',
      },
    });
  };

  const handleCreate = () => {
    setSelectedUser(null);
    setModalMode('create');
    setShowModal(true);
  };

  const handleSort = (key: string) => {
    const typedKey = key as keyof User;
    
    if (sortKey === typedKey) {
      // Cambiar dirección: asc -> desc -> null
      if (sortDirection === 'asc') {
        setSortDirection('desc');
      } else if (sortDirection === 'desc') {
        setSortKey(null);
        setSortDirection(null);
      }
    } else {
      setSortKey(typedKey);
      setSortDirection('asc');
    }
  };

  // Pagination logic
  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentUsers = filteredUsers.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const columns: TableColumn<User>[] = [
    {
      key: 'id',
      label: 'ID',
      width: '80px',
      sortable: true,
    },
    {
      key: 'name',
      label: 'Nombre Completo',
      sortable: true,
    },
    {
      key: 'email',
      label: 'Email',
      sortable: true,
    },
    {
      key: 'roles_list',
      label: 'Roles',
      width: '180px',
      align: 'center',
      render: (value: any, row: User) => {
        const roles = row.roles_list || [];
        
        if (roles.length === 0) {
          return <span className="text-gray-400 text-sm">Sin rol</span>;
        }

        const roleColors: Record<string, string> = {
          admin: 'bg-purple-100 text-purple-800',
          editor: 'bg-green-100 text-green-800',
          viewer: 'bg-gray-100 text-gray-800',
        };

        return (
          <div className="flex flex-wrap gap-1 justify-center">
            {roles.map((role, index) => (
              <span 
                key={index}
                className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${roleColors[role] || 'bg-blue-100 text-blue-800'}`}
              >
                {role}
              </span>
            ))}
          </div>
        );
      },
    },
    {
      key: 'actions',
      label: 'Acciones',
      width: '180px',
      align: 'center',
      render: (_, row) => (
        <div className="flex items-center justify-center gap-1">
          {/* Botón Editar - Solo si tiene permiso */}
          <RequirePermission permission={PERMISSIONS.USERS_EDIT}>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleEdit(row);
              }}
              className="p-2 text-admin-secondary hover:bg-admin-secondary hover:text-white rounded-lg transition-all duration-200 hover:shadow-md"
              title="Editar usuario"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </button>
          </RequirePermission>
          
          {/* Botón Eliminar - Solo si tiene permiso */}
          <RequirePermission permission={PERMISSIONS.USERS_DELETE}>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleDelete(row);
              }}
              className="p-2 text-red-600 hover:bg-red-600 hover:text-white rounded-lg transition-all duration-200 hover:shadow-md"
              title="Eliminar usuario"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </RequirePermission>
        </div>
      ),
    },
  ];

  return (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={12}
        toastOptions={{
          duration: 3000,
          style: {
            background: '#ffffff',
            color: '#1f2937',
            padding: '12px 16px',
            borderRadius: '8px',
            fontSize: '14px',
            fontWeight: '500',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
            border: '1px solid #e5e7eb',
            maxWidth: '420px',
          },
          success: {
            iconTheme: {
              primary: '#10b981',
              secondary: '#ffffff',
            },
            style: {
              borderLeft: '4px solid #10b981',
            },
          },
          error: {
            iconTheme: {
              primary: '#ef4444',
              secondary: '#ffffff',
            },
            style: {
              borderLeft: '4px solid #ef4444',
            },
          },
        }}
      />
      
      <div className="space-y-4">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm">
          <a href="/admin/users" className="text-gray-500 hover:text-admin-secondary transition-colors">Inicio</a>
        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
        <span className="text-admin-secondary font-medium">Usuarios</span>
      </nav>

      {/* Header Card */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          {/* Título */}
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Gestión de Usuarios</h1>
            <p className="text-sm text-gray-500 mt-1">Administra y controla los usuarios del sistema</p>
          </div>
          
          {/* Acciones */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {/* Search Bar */}
            <div className="relative flex-1 sm:flex-initial">
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Buscar usuarios..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full sm:w-64 pl-9 pr-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-admin-secondary focus:border-admin-secondary transition-colors"
              />
            </div>
            
            {/* Botón Agregar - Solo si tiene permiso */}
            <RequirePermission permission={PERMISSIONS.USERS_CREATE}>
              <button
                onClick={handleCreate}
                className="flex items-center justify-center gap-2 bg-admin-secondary hover:bg-admin-secondary-600 text-white font-medium px-4 py-2.5 rounded-lg transition-colors shadow-sm hover:shadow whitespace-nowrap"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                <span className="hidden sm:inline">Agregar Usuario</span>
                <span className="sm:hidden">Agregar</span>
              </button>
            </RequirePermission>
          </div>
        </div>
      </div>

      {/* Table Container with Pagination Inside */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden flex flex-col" style={{ height: 'calc(100vh - 340px)', minHeight: '400px' }}>
        {/* Table with internal scroll - Fixed height */}
        <div 
          className="overflow-x-auto overflow-y-auto flex-1"
        >
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gradient-to-r from-gray-50 to-gray-100 sticky top-0 z-10 shadow-sm">
              <tr>
                {columns.map((column) => (
                  <th
                    key={column.key}
                    scope="col"
                    className={`
                      px-6 py-3.5 text-xs font-semibold text-gray-700 uppercase tracking-wider
                      ${column.align === 'center' ? 'text-center' : column.align === 'right' ? 'text-right' : 'text-left'}
                      ${column.sortable ? 'cursor-pointer hover:bg-gray-200 transition-colors select-none' : ''}
                    `}
                    style={{ width: column.width }}
                    onClick={() => column.sortable && handleSort(column.key)}
                  >
                    <div className="flex items-center gap-2 justify-between">
                      <span>{column.label}</span>
                      {column.sortable && (
                        <svg 
                          className={`w-4 h-4 transition-all flex-shrink-0 ${
                            sortKey === column.key && sortDirection === 'asc' ? 'rotate-180 text-admin-secondary scale-110' : 
                            sortKey === column.key && sortDirection === 'desc' ? 'text-admin-secondary scale-110' : 'text-gray-400'
                          }`}
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {loading ? (
                <tr>
                  <td colSpan={columns.length} className="px-6 py-12 text-center">
                    <div className="flex flex-col items-center justify-center">
                      <div className="inline-block animate-spin rounded-full h-10 w-10 border-4 border-admin-secondary border-t-transparent"></div>
                      <p className="mt-4 text-sm text-gray-500 font-medium">Cargando usuarios...</p>
                    </div>
                  </td>
                </tr>
              ) : currentUsers.length === 0 ? (
                <tr>
                  <td colSpan={columns.length} className="px-6 py-12 text-center">
                    <div className="flex flex-col items-center justify-center">
                      <svg className="w-16 h-16 text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      <p className="text-gray-500 font-medium">No se encontraron usuarios</p>
                      <p className="text-sm text-gray-400 mt-1">Intenta ajustar los filtros de búsqueda</p>
                    </div>
                  </td>
                </tr>
              ) : (
                currentUsers.map((row, rowIndex) => (
                  <tr
                    key={row.id}
                    className="hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0"
                  >
                    {columns.map((column) => (
                      <td
                        key={column.key}
                        className={`
                          px-6 py-4 text-sm
                          ${column.align === 'center' ? 'text-center' : column.align === 'right' ? 'text-right' : 'text-left'}
                          ${column.key === 'username' ? 'font-medium text-gray-900' : 'text-gray-700'}
                        `}
                      >
                        {column.render ? column.render((row as any)[column.key], row, rowIndex) : (row as any)[column.key] ?? '-'}
                      </td>
                    ))}
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Mejorada dentro de la tabla */}
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-4 sm:px-6 py-3.5 border-t-2 border-gray-200">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Left: Items per page */}
            <div className="flex items-center gap-2 text-sm">
              <span className="text-gray-600 font-medium">Mostrar</span>
              <div className="relative">
                <select
                  value={itemsPerPage}
                  onChange={(e) => {
                    setItemsPerPage(Number(e.target.value));
                    setCurrentPage(1);
                  }}
                  className="appearance-none border border-gray-300 rounded-lg px-4 py-2 pr-10 text-sm font-medium focus:ring-2 focus:ring-admin-secondary focus:border-admin-secondary outline-none bg-white cursor-pointer hover:border-admin-secondary transition-colors"
                >
                  <option value={10}>10</option>
                  <option value={25}>25</option>
                  <option value={50}>50</option>
                  <option value={100}>100</option>
                </select>
                <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <span className="text-gray-600">de <span className="font-semibold text-gray-900">{filteredUsers.length}</span> registros</span>
            </div>

            {/* Right: Navigation buttons */}
            <div className="flex items-center gap-1">
              <button
                onClick={() => handlePageChange(1)}
                disabled={currentPage === 1}
                className="p-2 rounded-lg text-gray-600 hover:bg-white hover:text-admin-secondary disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent transition-all shadow-sm hover:shadow"
                title="Primera página"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="p-2 rounded-lg text-gray-600 hover:bg-white hover:text-admin-secondary disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent transition-all shadow-sm hover:shadow"
                title="Página anterior"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Page number display */}
              <div className="px-4 py-2 bg-white border border-gray-200 rounded-lg mx-1">
                <span className="text-sm font-semibold text-gray-900">{currentPage}</span>
                <span className="text-sm text-gray-500"> / {totalPages}</span>
              </div>
              
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="p-2 rounded-lg text-gray-600 hover:bg-white hover:text-admin-secondary disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent transition-all shadow-sm hover:shadow"
                title="Página siguiente"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              
              <button
                onClick={() => handlePageChange(totalPages)}
                disabled={currentPage === totalPages}
                className="p-2 rounded-lg text-gray-600 hover:bg-white hover:text-admin-secondary disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent transition-all shadow-sm hover:shadow"
                title="Última página"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal para Crear/Editar Usuario */}
      <UserModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onSuccess={() => {
          loadUsers(); // Recargar lista al guardar
          setShowModal(false);
        }}
        user={selectedUser}
        mode={modalMode}
      />
      </div>
    </>
  );
}
