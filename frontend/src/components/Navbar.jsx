import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">Sistema Biblioteca</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/libros">Libros</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/usuarios">Usuarios</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/prestamos">Préstamos</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">Salir</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
