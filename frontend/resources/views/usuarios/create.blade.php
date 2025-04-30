@extends('layout')

@section('title', 'Registrar Usuario')

@section('content')
<div class="container mt-5">
    <h2 class="mb-4">Registrar nuevo usuario</h2>

    @if ($errors->any())
        <div class="alert alert-danger">{{ $errors->first() }}</div>
    @endif

    <form method="POST" action="{{ url('/usuarios') }}">
        @csrf
        <div class="mb-3">
            <label class="form-label">Nombre</label>
            <input type="text" name="nombre" class="form-control" required>
        </div>

        <div class="mb-3">
            <label class="form-label">Correo</label>
            <input type="email" name="correo" class="form-control" required>
        </div>

        <div class="mb-3">
            <label class="form-label">Rol</label>
            <select name="rol" class="form-select" required>
                <option value="">Seleccione un rol</option>
                <option value="lector">Lector</option>
                <option value="admin">Administrador</option>
            </select>
        </div>

        <button class="btn btn-primary" type="submit">Guardar usuario</button>
        <a href="{{ url('/usuarios') }}" class="btn btn-secondary ms-2">Cancelar</a>
    </form>
</div>
@endsection