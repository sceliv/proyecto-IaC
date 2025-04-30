<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\LibroController;
use App\Http\Controllers\PrestamoController;
use App\Http\Controllers\UsuarioController;

// Rutas de autenticación
Route::get('/register', [AuthController::class, 'showRegister']);
Route::post('/register', [AuthController::class, 'register']);

Route::get('/login', [AuthController::class, 'showLogin']);
Route::post('/login', [AuthController::class, 'login']);

// Dashboard
Route::get('/', function () {
    return view('dashboard');
});

// Rutas para libros
// Recuerda actualizar la vista 'libros.index' para que extienda el layout general usando @extends('layout')
Route::get('/libros', [LibroController::class, 'index']);
// Recuerda aplicar @extends('layout') y @section en la vista 'libros.create' para unificar el diseño
Route::get('/libros/create', [LibroController::class, 'create']);
Route::post('/libros', [LibroController::class, 'store']);

// Rutas para préstamos
// Considera revisar que 'prestamos.index' también extienda de layout.blade.php
Route::get('/prestamos', [PrestamoController::class, 'index']);
// Puedes revisar que la vista 'prestamos.create' esté utilizando el layout base también
Route::get('/prestamos/create', [PrestamoController::class, 'create']);
Route::post('/prestamos', [PrestamoController::class, 'store']);

// Rutas para usuarios
// Asegúrate de que la vista 'usuarios.index' esté usando el layout principal para mantener coherencia visual
Route::get('/usuarios', [UsuarioController::class, 'index']);
// Verifica que 'usuarios.create' esté alineado visualmente con las demás vistas usando layout.blade.php
Route::get('/usuarios/create', [UsuarioController::class, 'create']);
Route::post('/usuarios', [UsuarioController::class, 'store']);
