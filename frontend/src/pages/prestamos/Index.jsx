import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';

const PrestamosIndex = () => {
  const [prestamos, setPrestamos] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_GATEWAY_URL}/api/prestamos`)
      .then(res => setPrestamos(res.data))
      .catch(err => console.error('Error al cargar préstamos:', err));
  }, []);

  return (
    <Layout>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center my-4">
          <h2>Lista de Préstamos</h2>
          <Link to="/prestamos/create" className="btn btn-success">Nuevo Préstamo</Link>
        </div>

        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>ID Usuario</th>
              <th>ID Libro</th>
              <th>Fecha Préstamo</th>
              <th>Fecha Devolución</th>
            </tr>
          </thead>
          <tbody>
            {prestamos.map(prestamo => (
              <tr key={prestamo.id}>
                <td>{prestamo.id}</td>
                <td>{prestamo.id_usuario}</td>
                <td>{prestamo.id_libro}</td>
                <td>{prestamo.fecha_prestamo}</td>
                <td>{prestamo.fecha_devolucion || 'Pendiente'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default PrestamosIndex;
