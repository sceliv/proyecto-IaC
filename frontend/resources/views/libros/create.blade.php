@extends('layout')

@section('title', 'Registrar Libro')

@section('content')
<div class="container mt-5">
    <h2 class="mb-4">Registrar nuevo libro</h2>

    @if ($errors->any())
        <div class="alert alert-danger">
            {{ $errors->first() }}
        </div>
    @endif

    <form method="POST" action="{{ url('/libros') }}">
        @csrf
        <div class="mb-3">
            <label class="form-label">Título</label>
            <input type="text" name="titulo" class="form-control" required>
        </div>

        <div class="mb-3">
            <label class="form-label">Autor</label>
            <input type="text" name="autor" class="form-control" required>
        </div>

        <div class="mb-3">
            <label class="form-label">Categoría</label>
            <input type="text" name="categoria" class="form-control" required>
        </div>

        <div class="mb-3">
            <label class="form-label">Año de publicación</label>
            <input type="number" name="anio_publicacion" class="form-control" required>
        </div>

        <button class="btn btn-primary" type="submit">Guardar libro</button>
        <a href="{{ url('/libros') }}" class="btn btn-secondary ms-2">Cancelar</a>
    </form>
</div>
@endsection