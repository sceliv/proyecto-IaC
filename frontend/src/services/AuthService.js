import axios from 'axios';

const API = import.meta.env.VITE_API_GATEWAY_URL;

// Registro de nuevo usuario
export const register = async (data) => {
  try {
    const response = await axios.post(`${API}/api/auth/register`, data);
    return response.data;
  } catch (error) {
    throw error.response?.data || { msg: 'Error al registrar' };
  }
};

// Inicio de sesión
export const login = async (data) => {
  try {
    const response = await axios.post(`${API}/api/auth/login`, data);
    return response.data;
  } catch (error) {
    throw error.response?.data || { msg: 'Error al iniciar sesión' };
  }
};
