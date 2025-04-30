@extends('layout')

@section('title', 'Panel Principal')

@section('content')
<div class="text-center">
    <h2>Bienvenido al Sistema de Biblioteca</h2>

    @if (session('success'))
        <div class="alert alert-success mt-3">
            {{ session('success') }}
        </div>
    @endif

    <div class="mt-4 d-grid gap-3 col-6 mx-auto">
        <a href="{{ url('/libros') }}" class="btn btn-outline-primary btn-lg">Ver Libros</a>
        <a href="{{ url('/usuarios') }}" class="btn btn-outline-secondary btn-lg">Gestionar Usuarios</a>
        <a href="{{ url('/prestamos') }}" class="btn btn-outline-success btn-lg">Ver Préstamos</a>
        <a href="{{ url('/logout') }}" class="btn btn-outline-danger btn-lg">Cerrar Sesión</a>
    </div>
</div>
@endsection
