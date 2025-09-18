import axios from 'axios';
import { BACKEND_URL } from './config';

const api = axios.create({
  baseURL: BACKEND_URL, 
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // Envío de cookies con las solicitudes
});

// Interceptor para manejar errores globalmente
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      console.error('Error de API:', error.response.data);
    } else {
      console.error('Error de red:', error.message);
    }
    return Promise.reject(error);
  }
);

export default api;