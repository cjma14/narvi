<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class AdminUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $user = User::updateOrCreate(
            ['email' => 'admin@narvi.com'],
            [
                'name' => 'Admin Narvi',
                'password' => Hash::make('password123'),
            ]
        );

        // Asignar rol de admin si existe
        if (class_exists(\Spatie\Permission\Models\Role::class)) {
            $adminRole = \Spatie\Permission\Models\Role::where('name', 'admin')->first();
            if ($adminRole && !$user->hasRole('admin')) {
                $user->assignRole('admin');
                $this->command->info('Rol "admin" asignado al usuario.');
            }
        }

        $this->command->info('Usuario admin creado/actualizado exitosamente.');
        $this->command->info('Email: admin@narvi.com');
        $this->command->info('Password: password123');
    }
}
