import axios from 'axios';

const HttpClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export { HttpClient };
