/**
 * UserModal Component
 * Modal para crear y editar usuarios
 * Usa react-hook-form para validación
 */

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import api from '../../utils/api';
import type { User, Role, UserFormData } from '../../types/shared';

interface UserModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  user: User | null;
  mode: 'create' | 'edit';
}

// form shape comes from shared types: UserFormData

export default function UserModal({ isOpen, onClose, onSuccess, user, mode }: UserModalProps) {
  const [roles, setRoles] = useState<Role[]>([]);
  const [loading, setLoading] = useState(false);
  const [loadingRoles, setLoadingRoles] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
    trigger,
  } = useForm<UserFormData>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
      roles: [],
    },
  });

  const password = watch('password');
  const selectedRoles = watch('roles');

  useEffect(() => {
    if (isOpen) {
      loadRoles();
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      if (mode === 'edit' && user) {
        setTimeout(() => {
          reset({
            name: user.name || '',
            email: user.email || '',
            password: '',
            password_confirmation: '',
            roles: user.roles_list || [],
          });
        }, 0);
      } else if (mode === 'create') {
        reset({
          name: '',
          email: '',
          password: '',
          password_confirmation: '',
          roles: [],
        });
      }
    } else {
      reset({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        roles: [],
      });
    }
  }, [mode, user, isOpen, reset]);

  const loadRoles = async () => {
    try {
      setLoadingRoles(true);
      const response = await api.get('/api/roles');
      setRoles(response.roles || []);
    } catch (error: any) {
      console.error('Error loading roles:', error);
      toast.error('Error al cargar roles', {
        duration: 3000,
        position: 'top-right',
      });
    } finally {
      setLoadingRoles(false);
    }
  };

  const onSubmit = async (data: UserFormData) => {
    try {
      setLoading(true);

      const payload: any = {
        name: data.name,
        email: data.email,
        roles: data.roles,
      };

      // Solo incluir password si se proporcionó
      if (data.password) {
        payload.password = data.password;
        payload.password_confirmation = data.password_confirmation;
      }

      if (mode === 'create') {
        await api.post('/api/users', payload);
        toast.success('Usuario creado exitosamente', {
          duration: 3000,
          position: 'top-right',
          icon: '✅',
        });
      } else {
        await api.put(`/api/users/${user?.id}`, payload);
        toast.success('Usuario actualizado exitosamente', {
          duration: 3000,
          position: 'top-right',
          icon: '✅',
        });
      }

      onSuccess();
      onClose();
    } catch (error: any) {
      console.error('Error saving user:', error);
      toast.error(error.message || 'Error al guardar usuario', {
        duration: 4000,
        position: 'top-right',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleRoleToggle = (roleName: string) => {
    const currentRoles = selectedRoles || [];
    const newRoles = currentRoles.includes(roleName)
      ? currentRoles.filter(r => r !== roleName)
      : [...currentRoles, roleName];
    setValue('roles', newRoles);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="relative bg-white rounded-lg shadow-xl max-w-2xl w-full p-6 z-50">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              {mode === 'create' ? 'Crear Nuevo Usuario' : 'Editar Usuario'}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" autoComplete="off">
            {/* Nombre */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Nombre Completo <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                autoComplete="off"
                {...register('name', {
                  required: 'El nombre es requerido',
                  minLength: {
                    value: 3,
                    message: 'El nombre debe tener al menos 3 caracteres'
                  }
                })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-admin-secondary focus:border-admin-secondary transition-colors"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Correo Electrónico <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                autoComplete="off"
                {...register('email', {
                  required: 'El email es requerido',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Email inválido'
                  }
                })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-admin-secondary focus:border-admin-secondary transition-colors"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Contraseña {mode === 'create' && <span className="text-red-500">*</span>}
                {mode === 'edit' && <span className="text-gray-500 text-xs">(Dejar en blanco para mantener la actual)</span>}
              </label>
              <input
                type="password"
                id="password"
                autoComplete="new-password"
                {...register('password', {
                  required: mode === 'create' ? 'La contraseña es requerida' : false,
                  minLength: {
                    value: 8,
                    message: 'La contraseña debe tener al menos 8 caracteres'
                  }
                })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-admin-secondary focus:border-admin-secondary transition-colors"
              />
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
              )}
            </div>

            {/* Confirmar Password */}
            {password && (
              <div>
                <label htmlFor="password_confirmation" className="block text-sm font-medium text-gray-700 mb-1">
                  Confirmar Contraseña <span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  id="password_confirmation"
                  autoComplete="new-password"
                  {...register('password_confirmation', {
                    validate: value => !password || value === password || 'Las contraseñas no coinciden'
                  })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-admin-secondary focus:border-admin-secondary transition-colors"
                />
                {errors.password_confirmation && (
                  <p className="mt-1 text-sm text-red-600">{errors.password_confirmation.message}</p>
                )}
              </div>
            )}

            {/* Roles */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Roles
              </label>
              {loadingRoles ? (
                <div className="text-gray-500 text-sm">Cargando roles...</div>
              ) : (
                <div className="space-y-2">
                  {roles.map((role) => (
                    <label key={role.id} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedRoles.includes(role.name)}
                        onChange={() => handleRoleToggle(role.name)}
                        className="w-4 h-4 text-admin-secondary border-gray-300 rounded focus:ring-admin-secondary"
                      />
                      <span className="text-sm text-gray-700 capitalize">{role.name}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-3 pt-4 border-t">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                disabled={loading}
              >
                Cancelar
              </button>
              <button
                type="submit"
                disabled={loading}
                className="px-4 py-2 bg-admin-secondary hover:bg-admin-secondary-600 text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Guardando...
                  </>
                ) : (
                  mode === 'create' ? 'Crear Usuario' : 'Actualizar Usuario'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
