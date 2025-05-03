import axios from 'axios';

const API = import.meta.env.VITE_API_GATEWAY_URL;

// Obtener todos los préstamos
export const getPrestamos = async () => {
  try {
    const response = await axios.get(`${API}/api/prestamos`);
    return response.data;
  } catch (error) {
    throw error.response?.data || { msg: 'Error al obtener préstamos' };
  }
};

// Crear un nuevo préstamo
export const createPrestamo = async (data) => {
  try {
    const response = await axios.post(`${API}/api/prestamos`, data);
    return response.data;
  } catch (error) {
    throw error.response?.data || { msg: 'Error al registrar préstamo' };
  }
};
