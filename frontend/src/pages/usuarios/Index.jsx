import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';

const UsuariosIndex = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_GATEWAY_URL}/api/usuarios`)
      .then(res => setUsuarios(res.data))
      .catch(err => console.error('Error al cargar usuarios:', err));
  }, []);

  return (
    <Layout>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center my-4">
          <h2>Lista de Usuarios</h2>
          <Link to="/usuarios/create" className="btn btn-success">Agregar Usuario</Link>
        </div>

        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Tipo de Usuario</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map(usuario => (
              <tr key={usuario.id}>
                <td>{usuario.id}</td>
                <td>{usuario.nombre}</td>
                <td>{usuario.correo}</td>
                <td>{usuario.tipo_usuario}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default UsuariosIndex;
