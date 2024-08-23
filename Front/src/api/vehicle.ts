import axiosInstance from '../services/axiosInstance';
import { Vehicle } from '../types/vehicle';

// Função para buscar o veículo do backend
export const fetchVehicle = async (): Promise<Vehicle> => {
  try {
    const response = await axiosInstance.get<Vehicle>('/vehicle');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar veículo:', error);
    throw error;  // Lançar erro para o tratamento no App
  }
};