import axios from 'axios';

const API = import.meta.env.VITE_API_GATEWAY_URL;

// Obtener todos los usuarios
export const getUsuarios = async () => {
  try {
    const response = await axios.get(`${API}/api/usuarios`);
    return response.data;
  } catch (error) {
    throw error.response?.data || { msg: 'Error al obtener usuarios' };
  }
};

// Agregar un nuevo usuario
export const createUsuario = async (data) => {
  try {
    const response = await axios.post(`${API}/api/usuarios`, data);
    return response.data;
  } catch (error) {
    throw error.response?.data || { msg: 'Error al agregar usuario' };
  }
};
