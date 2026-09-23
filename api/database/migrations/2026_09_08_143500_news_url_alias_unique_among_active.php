<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * El unique de url_alias solo aplica a noticias no eliminadas, para poder
     * reutilizar el alias de un soft-delete.
     */
    public function up(): void
    {
        Schema::table('news', function (Blueprint $table) {
            $table->dropUnique(['url_alias']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('news', function (Blueprint $table) {
            $table->unique('url_alias');
        });
    }
};
