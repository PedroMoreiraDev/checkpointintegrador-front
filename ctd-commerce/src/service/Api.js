import axios from 'axios';

const api = axios.create({
  baseURL: 'https://dh-store-db.herokuapp.com/'
});

export default api;