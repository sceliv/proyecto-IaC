<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>@yield('title', 'Sistema Biblioteca')</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css">
</head>
<body class="bg-light">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="{{ url('/') }}">Biblioteca</a>
            <div class="collapse navbar-collapse">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item"><a class="nav-link" href="{{ url('/libros') }}">Libros</a></li>
                    <li class="nav-item"><a class="nav-link" href="{{ url('/usuarios') }}">Usuarios</a></li>
                    <li class="nav-item"><a class="nav-link" href="{{ url('/prestamos') }}">Préstamos</a></li>
                    <li class="nav-item"><a class="nav-link" href="{{ url('/login') }}">Salir</a></li>
                </ul>
            </div>
        </div>
    </nav>

    <main class="container mt-4">
        @yield('content')
    </main>
</body>
</html>
