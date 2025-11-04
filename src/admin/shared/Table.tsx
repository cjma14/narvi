import { type ReactNode } from 'react';

export interface TableColumn<T = any> {
  key: string;
  label: string;
  width?: string;
  align?: 'left' | 'center' | 'right';
  render?: (value: any, row: T, index: number) => ReactNode;
  sortable?: boolean;
}

export interface TableProps<T = any> {
  columns: TableColumn<T>[];
  data: T[];
  keyExtractor: (row: T, index: number) => string | number;
  emptyMessage?: string;
  isLoading?: boolean;
  onRowClick?: (row: T, index: number) => void;
  hoverable?: boolean;
  striped?: boolean;
  bordered?: boolean;
  compact?: boolean;
  maxHeight?: string;
  stickyHeader?: boolean;
  className?: string;
}

/**
 * Table Component
 * Tabla reutilizable con scroll interno, encabezados sticky, y totalmente personalizable
 * 
 * @example
 * ```tsx
 * const columns: TableColumn[] = [
 *   { key: 'id', label: 'ID', width: '80px' },
 *   { key: 'name', label: 'Nombre', sortable: true },
 *   { 
 *     key: 'actions', 
 *     label: 'Acciones', 
 *     align: 'center',
 *     render: (_, row) => <button>Editar</button>
 *   }
 * ];
 * 
 * <Table 
 *   columns={columns}
 *   data={users}
 *   keyExtractor={(row) => row.id}
 *   maxHeight="600px"
 *   stickyHeader
 * />
 * ```
 */
export default function Table<T = any>({
  columns,
  data,
  keyExtractor,
  emptyMessage = 'No hay datos disponibles',
  isLoading = false,
  onRowClick,
  hoverable = true,
  striped = true,
  bordered = true,
  compact = false,
  maxHeight = '600px',
  stickyHeader = true,
  className = '',
}: TableProps<T>) {
  const getAlignClass = (align?: 'left' | 'center' | 'right') => {
    switch (align) {
      case 'center':
        return 'text-center';
      case 'right':
        return 'text-right';
      default:
        return 'text-left';
    }
  };

  const getCellValue = (row: T, column: TableColumn<T>, rowIndex: number) => {
    const value = (row as any)[column.key];
    
    if (column.render) {
      return column.render(value, row, rowIndex);
    }
    
    return value ?? '-';
  };

  if (isLoading) {
    return (
      <div className={`bg-white rounded-lg shadow overflow-hidden ${bordered ? 'border border-gray-200' : ''} ${className}`}>
        <div className="p-8 text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-admin-secondary"></div>
          <p className="mt-2 text-gray-500">Cargando...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-white rounded-lg shadow overflow-hidden ${bordered ? 'border border-gray-200' : ''} ${className}`}>
      <div 
        className="overflow-x-auto overflow-y-auto"
        style={{ maxHeight }}
      >
        <table className="min-w-full divide-y divide-gray-200">
          <thead className={`bg-gray-50 ${stickyHeader ? 'sticky top-0 z-10' : ''}`}>
            <tr>
              {columns.map((column) => (
                <th
                  key={column.key}
                  scope="col"
                  className={`
                    ${compact ? 'px-3 py-2' : 'px-6 py-3'} 
                    text-xs font-medium text-gray-500 uppercase tracking-wider
                    ${getAlignClass(column.align)}
                    ${column.sortable ? 'cursor-pointer hover:bg-gray-100' : ''}
                  `}
                  style={{ width: column.width }}
                >
                  <div className="flex items-center gap-1 justify-between">
                    <span>{column.label}</span>
                    {column.sortable && (
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                      </svg>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className={`bg-white divide-y divide-gray-200 ${striped ? '' : ''}`}>
            {data.length === 0 ? (
              <tr>
                <td 
                  colSpan={columns.length} 
                  className="px-6 py-8 text-center text-gray-500"
                >
                  <div className="flex flex-col items-center gap-2">
                    <svg className="w-12 h-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                    </svg>
                    <p>{emptyMessage}</p>
                  </div>
                </td>
              </tr>
            ) : (
              data.map((row, rowIndex) => (
                <tr
                  key={keyExtractor(row, rowIndex)}
                  onClick={() => onRowClick?.(row, rowIndex)}
                  className={`
                    ${striped && rowIndex % 2 === 0 ? 'bg-white' : striped ? 'bg-gray-50' : 'bg-white'}
                    ${hoverable ? 'hover:bg-gray-100' : ''}
                    ${onRowClick ? 'cursor-pointer' : ''}
                    transition-colors
                  `}
                >
                  {columns.map((column) => (
                    <td
                      key={column.key}
                      className={`
                        ${compact ? 'px-3 py-2' : 'px-6 py-4'}
                        text-sm text-gray-900
                        ${getAlignClass(column.align)}
                      `}
                    >
                      {getCellValue(row, column, rowIndex)}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
