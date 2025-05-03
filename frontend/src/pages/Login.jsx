import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/AuthService';
import InputField from '../components/InputField';
import Layout from '../components/Layout';

const Login = () => {
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(form);
      localStorage.setItem('auth', 'true');
      navigate('/dashboard');
    } catch (err) {
        console.error(err); // para ver detalles en consola
        setError('Credenciales inválidas');
      }
      
  };

  return (
    <Layout>
      <div className="container mt-5">
        <h2>Iniciar Sesión</h2>
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleSubmit}>
          <InputField label="Usuario" name="username" value={form.username} onChange={handleChange} />
          <InputField label="Contraseña" name="password" type="password" value={form.password} onChange={handleChange} />
          <p className="mt-3">
           ¿No tienes una cuenta? <Link to="/register">Regístrate aquí</Link>
          </p>

          <button type="submit" className="btn btn-primary">Entrar</button>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
