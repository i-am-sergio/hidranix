import api from '../../services/apiService';


export const cardPaymentService = async (cardFormData: any) : Promise<any> => {
    try {
        const response = await api.post('/payments/process_payment', cardFormData);
        return response.data;
    } catch (error: any) {
        throw error.response?.data?.message || 'Error en el procesamiento del pago';
    }
}