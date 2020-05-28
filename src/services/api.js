import axios from 'axios';

const api = axios.create({
  baseURL: 'https://sgr.hinova.com.br/sgr/',
});

export default api;
