// src/services/axiosInstance.ts
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3333',  // Inclua o protocolo na URL base
  timeout: 10000,  // Tempo limite para cada requisição
  headers: { 'Content-Type': 'application/json' },  // Cabeçalhos padrão
});

export default axiosInstance;