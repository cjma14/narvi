<?php

use App\Http\Controllers\DocsController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

// Scalar/OpenAPI solo fuera de production (local, staging, etc.)
if (! app()->environment('production')) {
    Route::get('/api/docs', [DocsController::class, 'reference'])->name('docs.reference');
    Route::get('/api/docs/openapi', [DocsController::class, 'openapi'])->name('docs.openapi');
}
