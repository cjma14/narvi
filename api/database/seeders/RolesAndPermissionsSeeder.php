<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RolesAndPermissionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Limpiar caché de permisos
        app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();

        // Definir permisos
        $permissions = [
            // Permisos de usuarios
            'users.view',
            'users.create',
            'users.edit',
            'users.delete',
            
            // Permisos de productos
            'products.view',
            'products.create',
            'products.edit',
            'products.delete',
        ];

        // Crear o actualizar permisos
        foreach ($permissions as $permission) {
            Permission::firstOrCreate(
                ['name' => $permission],
                ['guard_name' => 'web']
            );
        }

        $this->command->info('Permisos creados/actualizados: ' . count($permissions));

        // Definir roles y sus permisos
        $roles = [
            'admin' => [
                'permissions' => [
                    'users.view',
                    'users.create',
                    'users.edit',
                    'users.delete',
                    'products.view',
                    'products.create',
                    'products.edit',
                    'products.delete',
                ],
            ],
            'editor' => [
                'permissions' => [
                    'users.view',
                    'products.view',
                    'products.create',
                    'products.edit',
                ],
            ],
            'viewer' => [
                'permissions' => [
                    'users.view',
                    'products.view',
                ],
            ],
        ];

        // Crear o actualizar roles y asignar permisos
        foreach ($roles as $roleName => $roleData) {
            $role = Role::firstOrCreate(
                ['name' => $roleName],
                ['guard_name' => 'web']
            );

            // Sincronizar permisos (esto elimina permisos antiguos y agrega los nuevos)
            $role->syncPermissions($roleData['permissions']);

            $this->command->info("Rol '$roleName' creado/actualizado con " . count($roleData['permissions']) . " permisos.");
        }

        $this->command->info('');
        $this->command->info('==============================================');
        $this->command->info('Roles y permisos creados/actualizados exitosamente');
        $this->command->info('==============================================');
        $this->command->info('');
        $this->command->info('Roles disponibles:');
        foreach ($roles as $roleName => $roleData) {
            $this->command->info("  - $roleName (" . count($roleData['permissions']) . " permisos)");
        }
    }
}
