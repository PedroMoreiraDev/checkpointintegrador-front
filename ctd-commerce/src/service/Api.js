import axios from 'axios';

const api = axios.create({
  baseURL: 'https://infra-t2-g4.herokuapp.com/'
});

export default api;