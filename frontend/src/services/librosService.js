import axios from 'axios';

const API = import.meta.env.VITE_API_GATEWAY_URL;

// Obtener todos los libros
export const getLibros = async () => {
  try {
    const response = await axios.get(`${API}/api/libros`);
    return response.data;
  } catch (error) {
    throw error.response?.data || { msg: 'Error al obtener libros' };
  }
};

// Agregar un nuevo libro
export const createLibro = async (data) => {
  try {
    const response = await axios.post(`${API}/api/libros`, data);
    return response.data;
  } catch (error) {
    throw error.response?.data || { msg: 'Error al agregar libro' };
  }
};
