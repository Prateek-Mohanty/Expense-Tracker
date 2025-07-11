import axios from 'axios';

const api = axios.create({
  baseURL: 'TOBEREPLACED', 
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;