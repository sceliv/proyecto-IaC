<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class AuthController extends Controller
{
    public function showRegister()
    {
        return view('register');
    }

    public function register(Request $request)
    {
        $url = env('API_GATEWAY_URL') . '/api/auth/register'; // Construir la URL del microservicio

        $response = Http::post($url, [
            'username' => $request->input('username'),
            'email' => $request->input('email'),
            'password' => $request->input('password'),
        ]);

        if ($response->successful()) {
            return redirect('/login')->with('success', 'Registro exitoso');
        }

        return back()->withErrors(['error' => 'Error al registrar']);
    }

    public function showLogin()
    {
        return view('login');
    }

    public function login(Request $request)
    {
        $url = env('API_GATEWAY_URL') . '/api/auth/login';

        $response = Http::post($url, [
            'username' => $request->input('username'),
            'password' => $request->input('password'),
        ]);

        if ($response->successful()) {
            // Aquí podrías guardar token o info en sesión
            return redirect('/')->with('success', 'Bienvenido');
        }

        return back()->withErrors(['error' => 'Credenciales incorrectas']);
    }
}