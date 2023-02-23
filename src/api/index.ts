import { BACKEND_URL } from '@/constants/apiUrl';
import axios from 'axios';

const axiosConfig = {
  baseURL: BACKEND_URL,
  headers: {
    'Content-Type': 'application/json ',
  },
};

const API = axios.create(axiosConfig);

export default API;
