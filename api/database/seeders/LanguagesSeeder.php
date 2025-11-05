<?php

namespace Database\Seeders;

use App\Models\Language;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class LanguagesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $languages = [
            [
                'code' => 'es',
                'name' => 'Español',
                'is_default' => true,
            ],
            [
                'code' => 'en',
                'name' => 'English',
                'is_default' => false,
            ]
        ];

        foreach ($languages as $language) {
            Language::updateOrCreate(
                ['code' => $language['code']],
                $language
            );
        }

        $this->command->info('Idiomas creados/actualizados exitosamente.');
        $this->command->info('Total: ' . count($languages) . ' idiomas');
    }
}
