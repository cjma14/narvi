import { useState, useEffect } from 'react';
import RequirePermission from '../../guards/RequirePermission';
import { PERMISSIONS } from '../../guards/auth-guard';

interface Product {
  id: number;
  sku: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  status: string;
}

type SortDirection = 'asc' | 'desc' | null;
type SortKey = keyof Product | null;

/**
 * ProductListTable Component
 * Tabla de listado de productos con búsqueda, ordenamiento y paginación integrada
 * Ahora con control de permisos para acciones
 */
export default function ProductListTable() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortKey, setSortKey] = useState<SortKey>(null);
  const [sortDirection, setSortDirection] = useState<SortDirection>(null);

  useEffect(() => {
    // Simulated data fetch - Sin datos
    setTimeout(() => {
      setProducts([]);
      setFilteredProducts([]);
      setLoading(false);
    }, 500);
  }, []);

  // Búsqueda
  useEffect(() => {
    let filtered = products;
    
    if (searchQuery) {
      filtered = products.filter(product => 
        product.sku.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
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

    setFilteredProducts(filtered);
    setCurrentPage(1);
  }, [searchQuery, products, sortKey, sortDirection]);

  const handleEdit = (product: Product) => {
    console.log('Editar producto:', product);
  };

  const handleDelete = (product: Product) => {
    if (confirm('¿Está seguro de que desea eliminar este producto?')) {
      setProducts(products.filter(p => p.id !== product.id));
      console.log('Producto eliminado:', product.id);
    }
  };

  const handleSort = (key: string) => {
    const typedKey = key as keyof Product;
    
    if (sortKey === typedKey) {
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
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const columns = [
    {
      key: 'sku',
      label: 'SKU',
      width: '120px',
      sortable: true,
    },
    {
      key: 'name',
      label: 'Nombre del Producto',
      sortable: true,
    },
    {
      key: 'category',
      label: 'Categoría',
      width: '150px',
      sortable: true,
    },
    {
      key: 'price',
      label: 'Precio',
      width: '120px',
      align: 'right' as const,
      sortable: true,
      render: (value: any) => `$${value.toFixed(2)}`,
    },
    {
      key: 'stock',
      label: 'Stock',
      width: '100px',
      align: 'center' as const,
      sortable: true,
      render: (value: any) => (
        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
          value > 50 ? 'bg-green-100 text-green-800' : 
          value > 0 ? 'bg-yellow-100 text-yellow-800' : 
          'bg-red-100 text-red-800'
        }`}>
          {value}
        </span>
      ),
    },
    {
      key: 'status',
      label: 'Estado',
      width: '120px',
      align: 'center' as const,
      sortable: true,
      render: (value: any) => {
        const statusColors: Record<string, string> = {
          Activo: 'bg-green-100 text-green-800',
          Inactivo: 'bg-gray-100 text-gray-800',
          Agotado: 'bg-red-100 text-red-800',
        };

        return (
          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${statusColors[value] || 'bg-gray-100 text-gray-800'}`}>
            {value}
          </span>
        );
      },
    },
    {
      key: 'actions',
      label: 'Acciones',
      width: '180px',
      align: 'center' as const,
      render: (_: any, row: Product) => (
        <div className="flex items-center justify-center gap-1">
          {/* Botón Editar - Solo si tiene permiso */}
          <RequirePermission permission={PERMISSIONS.PRODUCTS_EDIT}>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleEdit(row);
              }}
              className="p-2 text-admin-secondary hover:bg-admin-secondary hover:text-white rounded-lg transition-all duration-200 hover:shadow-md"
              title="Editar producto"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </button>
          </RequirePermission>
          
          {/* Botón Eliminar - Solo si tiene permiso */}
          <RequirePermission permission={PERMISSIONS.PRODUCTS_DELETE}>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleDelete(row);
              }}
              className="p-2 text-red-600 hover:bg-red-600 hover:text-white rounded-lg transition-all duration-200 hover:shadow-md"
              title="Eliminar producto"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </RequirePermission>
          
          {/* Botón Ver Detalles - Disponible para todos con products.view */}
          <RequirePermission permission={PERMISSIONS.PRODUCTS_VIEW}>
            <button
              onClick={(e) => {
                e.stopPropagation();
                console.log('Ver detalles:', row);
              }}
              className="p-2 text-blue-600 hover:bg-blue-600 hover:text-white rounded-lg transition-all duration-200 hover:shadow-md"
              title="Ver detalles"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </button>
          </RequirePermission>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-4">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm">
        <a href="/admin/dashboard" className="text-gray-500 hover:text-admin-secondary transition-colors">Dashboard</a>
        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
        <span className="text-admin-secondary font-medium">Productos</span>
      </nav>

      {/* Header Card */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          {/* Título */}
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Gestión de Productos</h1>
            <p className="text-sm text-gray-500 mt-1">Administra el catálogo de productos del sistema</p>
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
                placeholder="Buscar productos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full sm:w-64 pl-9 pr-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-admin-secondary focus:border-admin-secondary transition-colors"
              />
            </div>
            
            {/* Botón Agregar - Solo si tiene permiso */}
            <RequirePermission permission={PERMISSIONS.PRODUCTS_CREATE}>
              <button
                onClick={() => console.log('Agregar producto')}
                className="flex items-center justify-center gap-2 bg-admin-secondary hover:bg-admin-secondary-600 text-white font-medium px-4 py-2.5 rounded-lg transition-colors shadow-sm hover:shadow whitespace-nowrap"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                <span className="hidden sm:inline">Agregar Producto</span>
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
                      <p className="mt-4 text-sm text-gray-500 font-medium">Cargando productos...</p>
                    </div>
                  </td>
                </tr>
              ) : currentProducts.length === 0 ? (
                <tr>
                  <td colSpan={columns.length} className="px-6 py-16 text-center">
                    <div className="flex flex-col items-center justify-center">
                      <svg className="w-20 h-20 text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                      </svg>
                      <p className="text-gray-700 font-semibold text-lg mb-1">No hay productos registrados</p>
                      <p className="text-sm text-gray-500">Comienza agregando tu primer producto al catálogo</p>
                    </div>
                  </td>
                </tr>
              ) : (
                currentProducts.map((row, rowIndex) => (
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
                          ${column.key === 'sku' || column.key === 'name' ? 'font-medium text-gray-900' : 'text-gray-700'}
                        `}
                      >
                        {column.render ? column.render((row as any)[column.key], row) : (row as any)[column.key] ?? '-'}
                      </td>
                    ))}
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
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
              <span className="text-gray-600">de <span className="font-semibold text-gray-900">{filteredProducts.length}</span> registros</span>
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
                <span className="text-sm text-gray-500"> / {totalPages || 1}</span>
              </div>
              
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages || totalPages === 0}
                className="p-2 rounded-lg text-gray-600 hover:bg-white hover:text-admin-secondary disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent transition-all shadow-sm hover:shadow"
                title="Página siguiente"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              
              <button
                onClick={() => handlePageChange(totalPages)}
                disabled={currentPage === totalPages || totalPages === 0}
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
    </div>
  );
}
