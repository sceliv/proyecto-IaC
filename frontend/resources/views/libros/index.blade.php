@extends('layout')

@section('title', 'Listado de Libros')

@section('content')
<div class="container mt-5">
    <h2 class="mb-4">Listado de Libros</h2>

    @if ($errors->any())
        <div class="alert alert-danger">
            {{ $errors->first() }}
        </div>
    @endif

    @if (!empty($libros))
        <table class="table table-bordered">
            <thead class="table-secondary">
                <tr>
                    <th>ID</th>
                    <th>Título</th>
                    <th>Autor</th>
                    <th>Categoría</th>
                    <th>Año</th>
                </tr>
            </thead>
            <tbody>
                @foreach ($libros as $libro)
                    <tr>
                        <td>{{ $libro['id'] }}</td>
                        <td>{{ $libro['titulo'] }}</td>
                        <td>{{ $libro['autor'] }}</td>
                        <td>{{ $libro['categoria'] }}</td>
                        <td>{{ $libro['anio_publicacion'] }}</td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    @else
        <p>No hay libros registrados.</p>
    @endif

    <div class="mt-3">
        <a href="{{ url('/') }}" class="btn btn-outline-primary">Volver al dashboard</a>
    </div>
</div>
@endsection