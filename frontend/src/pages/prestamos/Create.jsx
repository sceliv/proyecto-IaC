import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/Layout';

const PrestamosCreate = () => {
  const [id_usuario, setIdUsuario] = useState('');
  const [id_libro, setIdLibro] = useState('');
  const [fecha_prestamo, setFechaPrestamo] = useState('');
  const [fecha_devolucion, setFechaDevolucion] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${import.meta.env.VITE_API_GATEWAY_URL}/api/prestamos`, {
        id_usuario,
        id_libro,
        fecha_prestamo,
        fecha_devolucion,
      });
      navigate('/prestamos');
    } catch (error) {
      console.error('Error al registrar el préstamo:', error);
    }
  };

  return (
    <Layout>
      <div className="container">
        <h2 className="mb-4">Registrar Préstamo</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">ID Usuario</label>
            <input
              type="number"
              className="form-control"
              value={id_usuario}
              onChange={(e) => setIdUsuario(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">ID Libro</label>
            <input
              type="number"
              className="form-control"
              value={id_libro}
              onChange={(e) => setIdLibro(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Fecha de Préstamo</label>
            <input
              type="date"
              className="form-control"
              value={fecha_prestamo}
              onChange={(e) => setFechaPrestamo(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Fecha de Devolución (opcional)</label>
            <input
              type="date"
              className="form-control"
              value={fecha_devolucion}
              onChange={(e) => setFechaDevolucion(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary">Registrar</button>
        </form>
      </div>
    </Layout>
  );
};

export default PrestamosCreate;
