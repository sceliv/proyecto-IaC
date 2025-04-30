@extends('layout')

@section('title', 'Lista de Usuarios')

@section('content')
<div class="container mt-5">
    <h2 class="mb-4">Lista de Usuarios</h2>

    @if ($errors->any())
        <div class="alert alert-danger">{{ $errors->first() }}</div>
    @endif

    @if (!empty($usuarios))
        <table class="table table-bordered">
            <thead class="table-secondary">
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Correo</th>
                    <th>Rol</th>
                </tr>
            </thead>
            <tbody>
                @foreach ($usuarios as $usuario)
                    <tr>
                        <td>{{ $usuario['id'] }}</td>
                        <td>{{ $usuario['nombre'] }}</td>
                        <td>{{ $usuario['correo'] }}</td>
                        <td>{{ $usuario['rol'] }}</td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    @else
        <p>No hay usuarios registrados.</p>
    @endif

    <div class="mt-3">
        <a href="{{ url('/') }}" class="btn btn-outline-primary">Volver al dashboard</a>
    </div>
</div>
@endsection
