import axios from "axios";
import { useAuthStore } from "../auth/authStore";

export const http = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL ?? "https://api.example.com",
  timeout: 20_000
});

http.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token;
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});
