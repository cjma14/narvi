import { useEffect } from 'react';
import { useAuth } from '../auth/AuthProvider';

export default function RequireAuth({ children }: { children: React.ReactNode }) {
  const auth = useAuth();

  useEffect(() => {
    if (!auth.isAuthenticated) {
      // preserve intended path
      const next = encodeURIComponent(window.location.pathname + window.location.search);
      window.location.href = `/admin/login?next=${next}`;
    }
  }, [auth]);

  if (!auth.isAuthenticated) return null;
  return <>{children}</>;
}
