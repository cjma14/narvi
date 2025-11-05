<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\LanguageController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProductImageController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

// Rutas públicas (sin autenticación)
Route::post('/login', [AuthController::class, 'login']);

// Endpoints públicos de productos con traducciones aplicadas
Route::prefix('public/{lang}')->where(['lang' => '[a-z]{2}'])->group(function () {
    Route::get('/products', [ProductController::class, 'indexPublic']);
    Route::get('/products/{alias}', [ProductController::class, 'showPublic']);
});

Route::get('/languages', [LanguageController::class, 'index']);

// Rutas protegidas (requieren autenticación)
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', [AuthController::class, 'user']);
    Route::post('/logout', [AuthController::class, 'logout']);
    
    // CRUD de usuarios (con transacciones)
    Route::middleware('db.transaction')->group(function () {
        Route::post('/users', [UserController::class, 'store']);
        Route::put('/users/{id}', [UserController::class, 'update']);
        Route::delete('/users/{id}', [UserController::class, 'destroy']);
    });
    Route::get('/users', [UserController::class, 'index']);
    Route::get('/users/{id}', [UserController::class, 'show']);
    
    // CRUD de productos (con transacciones)
    Route::middleware('db.transaction')->group(function () {
        Route::post('/products', [ProductController::class, 'store']);
        Route::put('/products/{id}', [ProductController::class, 'update']);
        Route::delete('/products/{id}', [ProductController::class, 'destroy']);
    });
    Route::get('/products', [ProductController::class, 'index']);
    Route::get('/products/{id}', [ProductController::class, 'show']);
    
    // Imágenes de productos (con transacciones)
    Route::middleware('db.transaction')->group(function () {
        Route::post('/products/{product}/images', [ProductImageController::class, 'store']);
        Route::delete('/products/{product}/images/{image}', [ProductImageController::class, 'destroy']);
        Route::put('/products/{product}/images/reorder', [ProductImageController::class, 'reorder']);
    });
    
    // Roles
    Route::get('/roles', [RoleController::class, 'index']);
});