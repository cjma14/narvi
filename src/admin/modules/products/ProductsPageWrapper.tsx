/**
 * ProductsPageWrapper
 * 
 * Wrapper que protege la página de productos con permisos
 */

import ProtectedRoute from '../../guards/ProtectedRoute';
import ProductListTable from './ProductListTable';
import { Toaster } from 'react-hot-toast';

export default function ProductsPageWrapper() {
  return (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          style: {
            padding: '16px',
            borderRadius: '10px',
            fontSize: '14px',
            fontWeight: '500',
          },
          success: {
            style: {
              background: '#10B981',
              color: '#fff',
            },
          },
          error: {
            style: {
              background: '#EF4444',
              color: '#fff',
            },
          },
        }}
      />
      
      <ProtectedRoute permissions={['products.view']}>
        <ProductListTable />
      </ProtectedRoute>
    </>
  );
}
