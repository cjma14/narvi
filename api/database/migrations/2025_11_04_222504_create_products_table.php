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
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            // Campos en español (idioma por defecto)
            $table->string('title');
            $table->string('url_alias')->unique(); // Alias único para la URL
            $table->text('description')->nullable();
            $table->string('primary_button_url')->nullable();
            $table->string('primary_button_title')->nullable();
            $table->string('secondary_button_url')->nullable();
            $table->string('secondary_button_title')->nullable();
            $table->json('specifications')->nullable(); // Array de especificaciones en español
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
