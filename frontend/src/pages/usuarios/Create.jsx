import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/Layout';

const UsuariosCreate = () => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [tipo_usuario, setTipoUsuario] = useState('lector');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${import.meta.env.VITE_API_GATEWAY_URL}/api/usuarios`, {
        nombre,
        correo,
        tipo_usuario,
      });
      navigate('/usuarios');
    } catch (error) {
      console.error('Error al registrar usuario:', error);
    }
  };

  return (
    <Layout>
      <div className="container">
        <h2 className="mb-4">Registrar Usuario</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Nombre</label>
            <input
              type="text"
              className="form-control"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Correo</label>
            <input
              type="email"
              className="form-control"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Tipo de Usuario</label>
            <select
              className="form-select"
              value={tipo_usuario}
              onChange={(e) => setTipoUsuario(e.target.value)}
            >
              <option value="lector">Lector</option>
              <option value="admin">Administrador</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary">Guardar</button>
        </form>
      </div>
    </Layout>
  );
};

export default UsuariosCreate;
