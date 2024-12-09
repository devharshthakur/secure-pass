/**
 * @file axios.ts
 * @description Exports a configuired axios instance for making api calls(requests).
 */

import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3001/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
