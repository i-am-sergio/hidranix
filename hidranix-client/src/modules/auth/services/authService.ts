import api from '../../services/apiService';

interface UserData {
  username: string | null;
  email?: string | null;
  password?: boolean;
}

interface Credentials {
  email: string;
  password: string;
}

interface UserDetails {
  id: string;
  username: string;
  email: string;
}

// Registrar un nuevo usuario
export const register = async (userData: UserData): Promise<any> => {
  try {
    const response = await api.post('/auth/register', userData);
    return response.data;
  } catch (error: any) {
    throw error.response?.data?.message || 'Error en el registro';
  }
};

// Iniciar sesión con credenciales
export const login = async (credentials: Credentials): Promise<any> => {
  try {
    const response = await api.post('/auth/login', credentials);
    console.log(response.data); // Para depuración
    return response.data;
  } catch (error: any) {
    throw error.response?.data?.message || 'Error en el login';
  }
};

// Cerrar sesión
export const logout = async (): Promise<void> => {
  try {
    await api.post('/auth/logout');
  } catch (error: any) {
    console.error('Error al cerrar sesión:', error);
  }
};

// Obtener los detalles del usuario
export const fetchUserDetails = async (userId: string): Promise<UserDetails | null> => {
  try {
    const response = await api.get(`/users/${userId}`);
    return response.data;
  } catch (error: any) {
    if (error.response?.status === 401) {
      return null;
    }
    throw error.response?.data?.message || 'Error al obtener datos del usuario';
  }
};
