<?php

use App\Http\Controllers\DocsController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/api/docs', [DocsController::class, 'reference'])->name('docs.reference');
Route::get('/api/docs/openapi.json', [DocsController::class, 'openapi'])->name('docs.openapi');
