<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class PrestamoController extends Controller
{
    public function index()
    {
        $url = env('API_GATEWAY_URL') . '/api/prestamos';
        $response = Http::get($url);

        if ($response->successful()) {
            $prestamos = $response->json();
            return view('prestamos.index', compact('prestamos'));
        }

        return view('prestamos.index')->withErrors(['error' => 'No se pudieron obtener los préstamos']);
    }

    public function create()
    {
        return view('prestamos.create');
    }

    public function store(Request $request)
    {
        $url = env('API_GATEWAY_URL') . '/api/prestamos';

        $response = Http::post($url, [
            'usuario_id' => $request->input('usuario_id'),
            'libro_id' => $request->input('libro_id'),
            'fecha_prestamo' => $request->input('fecha_prestamo'),
            'fecha_devolucion' => $request->input('fecha_devolucion')
        ]);

        if ($response->successful()) {
            return redirect('/prestamos')->with('success', 'Préstamo registrado');
        }

        return back()->withErrors(['error' => 'Error al registrar préstamo']);
    }
}
