import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../services/AuthService';
import InputField from '../components/InputField';
import Layout from '../components/Layout';

const Register = () => {
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(form);
      navigate('/login');
    } catch (err) {
      console.error(err);
      setError('Error al registrar');
    }
  };

  return (
    <Layout>
      <div className="container mt-5">
        <h2>Registrarse</h2>
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleSubmit}>
          <InputField label="Usuario" name="username" value={form.username} onChange={handleChange} />
          <InputField label="Contraseña" name="password" type="password" value={form.password} onChange={handleChange} />
          <button type="submit" className="btn btn-success">Registrarse</button>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
