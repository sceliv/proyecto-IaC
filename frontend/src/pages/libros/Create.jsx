import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/Layout';

const LibrosCreate = () => {
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [categoria, setCategoria] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${import.meta.env.VITE_API_GATEWAY_URL}/api/libros`, {
        titulo,
        autor,
        categoria,
      });
      navigate('/libros');
    } catch (error) {
      console.error('Error al registrar libro:', error);
    }
  };

  return (
    <Layout>
      <div className="container">
        <h2 className="mb-4">Registrar Libro</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Título</label>
            <input
              type="text"
              className="form-control"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Autor</label>
            <input
              type="text"
              className="form-control"
              value={autor}
              onChange={(e) => setAutor(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Categoría</label>
            <input
              type="text"
              className="form-control"
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Guardar
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default LibrosCreate;
