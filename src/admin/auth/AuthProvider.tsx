import React, { createContext, useContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';

interface User {
  id: number;
  name: string;
  email: string;
  roles_list?: string[];
  permissions_list?: string[];
}

interface AuthContextValue {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<{ ok: boolean; message?: string }>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

const TOKEN_KEY = 'narvi_token';
const USER_KEY = 'narvi_user';

const COOKIE_OPTIONS = {
  expires: 7, 
  secure: import.meta.env.PROD, 
  sameSite: 'strict' as const,
  path: '/',
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
  // Inicializar estado desde cookies
  const [token, setToken] = useState<string | null>(() => {
    if (typeof window === 'undefined') return null;
    return Cookies.get(TOKEN_KEY) || null;
  });
  
  const [user, setUser] = useState<User | null>(() => {
    if (typeof window === 'undefined') return null;
    try {
      const raw = Cookies.get(USER_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    // Sincronizar cookies cuando cambia el estado
    if (typeof window === 'undefined') return;
    
    try {
      if (token) {
        Cookies.set(TOKEN_KEY, token, COOKIE_OPTIONS);
      } else {
        Cookies.remove(TOKEN_KEY);
      }
      
      if (user) {
        Cookies.set(USER_KEY, JSON.stringify(user), COOKIE_OPTIONS);
      } else {
        Cookies.remove(USER_KEY);
      }
    } catch (err) {
      console.warn('AuthProvider cookie sync error', err);
    }
  }, [token, user]);

  const login = async (email: string, password: string) => {
    try {
      const apiUrl = import.meta.env.PUBLIC_API_URL || 'http://localhost:6650/api';
      const res = await fetch(`${apiUrl}/login`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const contentType = res.headers.get('content-type');
      const isJson = contentType?.includes('application/json');

      if (res.status === 200 && isJson) {
        const data = await res.json();
        const t = data.token ?? data.access_token ?? null;
        const u = data.user ?? null;
        
        if (!t || !u) {
          return { ok: false, message: 'Respuesta inválida del servidor' };
        }
        
        setToken(t);
        setUser(u);
        return { ok: true, message: data.message || 'Inicio de sesión exitoso' };
      }

      if (!isJson) {
        if (res.status === 302 || res.status === 301) {
          return { ok: false, message: 'Credenciales incorrectas' };
        }
        return { ok: false, message: 'Error de servidor. Intenta nuevamente.' };
      }


      try {
        const body = await res.json();
        const message = body.message || 
                       (body.errors ? Object.values(body.errors).flat().join(', ') : null) ||
                       `Error: ${res.status}`;
        return { ok: false, message };
      } catch {
        return { ok: false, message: `Error de servidor (${res.status})` };
      }
    } catch (err: any) {
      console.error('Login error:', err);
      return { ok: false, message: err?.message || 'Error de conexión. Verifica que la API esté corriendo.' };
    }
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    
    try {
      Cookies.remove(TOKEN_KEY);
      Cookies.remove(USER_KEY);
    } catch (err) {
      console.warn('Error clearing cookies', err);
    }
    
    window.location.href = '/admin/login';
  };

  const value: AuthContextValue = {
    user,
    token,
    isAuthenticated: !!token,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    return {
      user: null,
      token: null,
      isAuthenticated: false,
      login: async () => ({ ok: false, message: 'Auth not available on server' }),
      logout: () => {
        if (typeof window !== 'undefined') {
          window.location.href = '/admin/login';
        }
      },
    } as AuthContextValue;
  }
  return ctx;
}

export default AuthProvider;
