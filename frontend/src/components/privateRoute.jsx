// src/components/PrivateRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('auth'); // o tu lógica de autenticación

  return isAuthenticated ? children : <Navigate to="/" />;
};

export default PrivateRoute;
