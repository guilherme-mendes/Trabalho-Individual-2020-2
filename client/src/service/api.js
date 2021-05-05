import axios from 'axios';

const PROD_URL = 'https://gces-trab-api.herokuapp.com/';
const DEV_URL = 'http://localhost:8000';

const ENV = process.env.NODE_ENV;

export const api = axios.create({
  baseURL: ENV === 'development' ? DEV_URL : PROD_URL
});