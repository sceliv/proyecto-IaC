@extends('layout')

@section('title', 'Registrar Préstamo')

@section('content')
<div class="container mt-5">
    <h2 class="mb-4">Registrar nuevo préstamo</h2>

    @if ($errors->any())
        <div class="alert alert-danger">
            {{ $errors->first() }}
        </div>
    @endif

    <form method="POST" action="{{ url('/prestamos') }}">
        @csrf
        <div class="mb-3">
            <label class="form-label">ID del Usuario</label>
            <input type="number" name="usuario_id" class="form-control" required>
        </div>

        <div class="mb-3">
            <label class="form-label">ID del Libro</label>
            <input type="number" name="libro_id" class="form-control" required>
        </div>

        <div class="mb-3">
            <label class="form-label">Fecha de Préstamo</label>
            <input type="date" name="fecha_prestamo" class="form-control" required>
        </div>

        <div class="mb-3">
            <label class="form-label">Fecha de Devolución</label>
            <input type="date" name="fecha_devolucion" class="form-control" required>
        </div>

        <button class="btn btn-primary" type="submit">Guardar préstamo</button>
        <a href="{{ url('/prestamos') }}" class="btn btn-secondary ms-2">Cancelar</a>
    </form>
</div>
@endsection