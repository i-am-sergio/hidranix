import api from '../../services/apiService';

// src/api/user.ts
export const getUserByClerkId = async (clerkId: string) => {
    try {
        const response = await api.get(`/users/clerk/${clerkId}`);
        return response.data;
    } catch (error: any) {
        throw error.response?.data?.message || 'Error al obtener el usuario';
    }
};
