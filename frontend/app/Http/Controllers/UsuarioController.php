<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class UsuarioController extends Controller
{
    public function index()
    {
        $url = env('API_GATEWAY_URL') . '/api/usuarios';
        $response = Http::get($url);

        if ($response->successful()) {
            $usuarios = $response->json();
            return view('usuarios.index', compact('usuarios'));
        }

        return view('usuarios.index')->withErrors(['error' => 'No se pudieron obtener los usuarios']);
    }

    public function create()
    {
        return view('usuarios.create');
    }

    public function store(Request $request)
    {
        $url = env('API_GATEWAY_URL') . '/api/usuarios';

        $response = Http::post($url, [
            'nombre' => $request->input('nombre'),
            'correo' => $request->input('correo'),
            'rol' => $request->input('rol')
        ]);

        if ($response->successful()) {
            return redirect('/usuarios')->with('success', 'Usuario registrado');
        }

        return back()->withErrors(['error' => 'Error al registrar usuario']);
    }
}
