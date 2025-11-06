import { useState, type FormEvent, useEffect } from 'react';
import { useAuth } from './AuthProvider';
import toast, { Toaster } from 'react-hot-toast';

/**
 * SignIn Component
 * Handles user authentication for the admin panel
 */
export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const auth = useAuth();
  // no client-router dependency required; we'll read query params directly

  useEffect(() => {
    // If already authenticated, redirect to admin root
    if (auth.isAuthenticated) {
      window.location.href = '/admin';
    }
  }, [auth.isAuthenticated]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (!email || !password) {
        toast.error('Por favor ingresa tu correo y contraseña', {
          duration: 3000,
          position: 'top-center',
        });
        setLoading(false);
        return;
      }

      const result = await auth.login(email, password);
      if (!result.ok) {
        toast.error(result.message || 'Credenciales inválidas', {
          duration: 4000,
          position: 'top-center',
        });
        return;
      }

      // Success - show message and redirect after a short delay
      toast.success(result.message || 'Inicio de sesión exitoso', {
        duration: 2000,
        position: 'top-center',
        icon: '✅',
      });
      
      setTimeout(() => {
        const params = new URLSearchParams(window.location.search);
        const next = params.get('next') || '/admin';
        window.location.href = next;
      }, 1500);
    } catch (err) {
      toast.error('Ocurrió un error al iniciar sesión. Intenta nuevamente.', {
        duration: 4000,
        position: 'top-center',
      });
      console.error('Sign in error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          // Estilos personalizados para los toast
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
            iconTheme: {
              primary: '#fff',
              secondary: '#10B981',
            },
          },
          error: {
            style: {
              background: '#EF4444',
              color: '#fff',
            },
            iconTheme: {
              primary: '#fff',
              secondary: '#EF4444',
            },
          },
        }}
      />
      
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-admin-primary to-admin-primary-900 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-2xl shadow-2xl">
          {/* Logo */}
          <div className="flex justify-center">
            <img src="/img/logo/logo_white.png" alt="Narvi EC" className="w-32 h-auto bg-admin-primary p-4 rounded-xl" />
          </div>

          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Panel Administrativo
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Ingresa tus credenciales para acceder
            </p>
          </div>
          
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
            <div>
              <label htmlFor="email-address" className="block text-sm font-medium text-gray-700 mb-1">
                Correo electrónico
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-400 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-admin-secondary focus:border-admin-secondary sm:text-sm transition-colors"
                placeholder=""
                value={email}
                onChange={handleEmailChange}
                disabled={loading}
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Contraseña
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  required
                  className="appearance-none relative block w-full px-4 py-3 pr-12 border border-gray-300 placeholder-gray-400 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-admin-secondary focus:border-admin-secondary sm:text-sm transition-colors"
                  placeholder=""
                  value={password}
                  onChange={handlePasswordChange}
                  disabled={loading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                  tabIndex={-1}
                >
                  {showPassword ? (
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    </svg>
                  ) : (
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-semibold rounded-lg text-white bg-admin-secondary hover:bg-admin-secondary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-admin-secondary disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Iniciando sesión...
                </>
              ) : (
                'Iniciar Sesión'
              )}
            </button>
          </div>
        </form>

        <p className="mt-6 text-center text-xs text-gray-500">
          © 2025 Narvi EC. Todos los derechos reservados.
        </p>
      </div>
    </div>
    </>
  );
}
