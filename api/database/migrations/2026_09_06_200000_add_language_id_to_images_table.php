<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('images', function (Blueprint $table) {
            $table->foreignId('language_id')
                ->nullable()
                ->after('type')
                ->constrained('languages')
                ->nullOnDelete();

            $table->unique(
                ['imageable_type', 'imageable_id', 'type', 'language_id'],
                'images_imageable_type_lang_unique'
            );
        });

        $defaultLanguageId = DB::table('languages')->where('is_default', true)->value('id');

        if ($defaultLanguageId) {
            DB::table('images')
                ->where('type', 'cover')
                ->whereNotNull('imageable_id')
                ->whereNull('language_id')
                ->update(['language_id' => $defaultLanguageId]);
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('images', function (Blueprint $table) {
            $table->dropUnique('images_imageable_type_lang_unique');
            $table->dropConstrainedForeignId('language_id');
        });
    }
};
