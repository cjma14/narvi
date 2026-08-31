/**
 * NewsPageWrapper
 *
 * Wrapper que protege la pagina de noticias con permisos
 */

import ProtectedRoute from '../../guards/ProtectedRoute';
import { NewsTable } from './index';

export default function NewsPageWrapper() {
  return (
    <ProtectedRoute permissions={['news.view']}>
      <NewsTable />
    </ProtectedRoute>
  );
}
