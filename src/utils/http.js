import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:4000/',
  timeout: 10000,
  headers: {'X-Custom-Header': 'foobar'}
});