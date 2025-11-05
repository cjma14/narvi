<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('translations', function (Blueprint $table) {
            $table->id();
            $table->string('translatable_type'); // App\Models\Product, App\Models\Category, etc.
            $table->unsignedBigInteger('translatable_id'); // ID del modelo
            $table->foreignId('language_id')->constrained()->onDelete('cascade');
            $table->string('field', 100); // title, description, name, etc.
            $table->text('value')->nullable(); // El valor traducido
            $table->timestamps();

            // Índices para optimizar búsquedas
            $table->index(['translatable_type', 'translatable_id']);
            
            // Restricción única: un campo solo puede tener una traducción por idioma
            $table->unique(['translatable_type', 'translatable_id', 'language_id', 'field'], 'translations_unique');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('translations');
    }
};
