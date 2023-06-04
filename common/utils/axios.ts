import axios from 'axios';

export const apiUrl = axios.create({
  baseURL: 'http://192.168.18.224:1337/api',
  headers: {
    Accept: 'application/json',
    'content-Type': 'application/json',
  },
});
