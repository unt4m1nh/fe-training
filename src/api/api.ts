import axios from "axios";

// Initialize an instance of axios
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // Base URL of the API
  timeout: 5000, // Request timeout (will throw error if exceeded)
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;