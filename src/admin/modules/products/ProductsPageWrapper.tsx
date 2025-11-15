/**
 * ProductsPageWrapper
 * 
 * Wrapper que protege la página de productos con permisos
 */

import ProtectedRoute from '../../guards/ProtectedRoute';
import ProductListTable from './ProductListTable';

export default function ProductsPageWrapper() {
  return (
    <ProtectedRoute permissions={['products.view']}>
      <ProductListTable />
    </ProtectedRoute>
  );
}
