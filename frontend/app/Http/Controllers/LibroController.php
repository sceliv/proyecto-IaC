<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class LibroController extends Controller
{
    public function index()
    {
        $url = env('API_GATEWAY_URL') . '/api/libros';
        $response = Http::get($url);

        if ($response->successful()) {
            $libros = $response->json();
            return view('libros.index', compact('libros'));
        }

        return view('libros.index')->withErrors(['error' => 'No se pudo obtener la lista de libros']);
    }

    public function create()
    {
        return view('libros.create');
    }

    public function store(Request $request)
    {
        $url = env('API_GATEWAY_URL') . '/api/libros';

        $response = Http::post($url, [
            'titulo' => $request->input('titulo'),
            'autor' => $request->input('autor'),
            'categoria' => $request->input('categoria'),
            'anio_publicacion' => $request->input('anio_publicacion')
        ]);

        if ($response->successful()) {
            return redirect('/libros')->with('success', 'Libro registrado correctamente');
        }

        return back()->withErrors(['error' => 'Error al registrar el libro']);
    }
}
