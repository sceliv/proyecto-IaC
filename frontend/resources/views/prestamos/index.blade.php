@extends('layout')

@section('title', 'Lista de Préstamos')

@section('content')
<div class="container mt-5">
    <h2 class="mb-4">Lista de Préstamos</h2>

    @if ($errors->any())
        <div class="alert alert-danger">{{ $errors->first() }}</div>
    @endif

    @if (!empty($prestamos))
        <table class="table table-bordered">
            <thead class="table-secondary">
                <tr>
                    <th>ID</th>
                    <th>Usuario</th>
                    <th>Libro</th>
                    <th>Fecha Préstamo</th>
                    <th>Fecha Devolución</th>
                </tr>
            </thead>
            <tbody>
                @foreach ($prestamos as $prestamo)
                    <tr>
                        <td>{{ $prestamo['id'] }}</td>
                        <td>{{ $prestamo['usuario_id'] }}</td>
                        <td>{{ $prestamo['libro_id'] }}</td>
                        <td>{{ $prestamo['fecha_prestamo'] }}</td>
                        <td>{{ $prestamo['fecha_devolucion'] }}</td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    @else
        <p>No hay préstamos registrados.</p>
    @endif

    <div class="mt-3">
        <a href="{{ url('/') }}" class="btn btn-outline-primary">Volver al dashboard</a>
    </div>
</div>
@endsection
