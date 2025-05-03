import React from 'react';
import Layout from '../components/Layout';
import { Link, useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('auth'); // Elimina el flag de autenticación
    navigate('/login');             // Redirige al login
  };

  return (
    <Layout>
      <div className="container text-center mt-5">
        <h2>Bienvenido al Sistema de Biblioteca</h2>
        <div className="d-grid gap-3 col-6 mx-auto mt-4">
          <Link to="/libros" className="btn btn-outline-primary btn-lg">Ver Libros</Link>
          <Link to="/usuarios" className="btn btn-outline-secondary btn-lg">Gestionar Usuarios</Link>
          <Link to="/prestamos" className="btn btn-outline-success btn-lg">Ver Préstamos</Link>
          <button onClick={handleLogout} className="btn btn-outline-danger btn-lg">Cerrar Sesión</button>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
