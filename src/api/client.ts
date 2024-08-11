import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://g-cup-be.vercel.app',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true
});

export default apiClient;