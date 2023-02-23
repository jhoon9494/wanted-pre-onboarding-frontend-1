import axios from 'axios';

const BACKEND_URL = 'https://pre-onboarding-selection-task.shop/';
const axiosConfig = {
  baseURL: BACKEND_URL,
  headers: {
    'Content-Type': 'application/json ',
  },
};

const API = axios.create(axiosConfig);

export default API;
