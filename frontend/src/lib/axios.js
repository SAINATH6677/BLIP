import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:5696/api',
  withCredentials: true,
});
