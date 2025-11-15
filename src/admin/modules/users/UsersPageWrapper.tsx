/**
 * UsersPageWrapper
 * 
 * Wrapper que protege la página de usuarios con permisos
 */

import ProtectedRoute from '../../guards/ProtectedRoute';
import UserListTable from './UserListTable';

export default function UsersPageWrapper() {
  return (
    <ProtectedRoute permissions={['users.view']}>
      <UserListTable />
    </ProtectedRoute>
  );
}
