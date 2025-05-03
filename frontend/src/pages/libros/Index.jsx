import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';

const LibrosIndex = () => {
  const [libros, setLibros] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_GATEWAY_URL}/api/libros`)
      .then(res => setLibros(res.data))
      .catch(err => console.error('Error al cargar libros:', err));
  }, []);

  return (
    <Layout>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center my-4">
          <h2>Lista de Libros</h2>
          <Link to="/libros/create" className="btn btn-success">Agregar Libro</Link>
        </div>

        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Título</th>
              <th>Autor</th>
              <th>Categoría</th>
            </tr>
          </thead>
          <tbody>
            {libros.map(libro => (
              <tr key={libro.id}>
                <td>{libro.id}</td>
                <td>{libro.titulo}</td>
                <td>{libro.autor}</td>
                <td>{libro.categoria}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default LibrosIndex;
