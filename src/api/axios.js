import axios from "axios";

const RAW_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "https://iza-backend.vercel.app/api/v1";
const NORMALIZED_BASE_URL = RAW_BASE_URL.replace(/\/+$/, "");
  console.log(import.meta.env);
console.log("🔧 VITE_API_BASE_URL value:", import.meta.env.VITE_API_BASE_URL);
console.log("🔧 Axios will use base URL:", NORMALIZED_BASE_URL);

const axiosInstance = axios.create({
  baseURL: NORMALIZED_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000, // 10 seconds timeout
});

// Optional: Add authorization token automatically
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token"); // or use context/store
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  // Ensure every request always uses the configured base URL
  config.baseURL = NORMALIZED_BASE_URL;
  config.url = (config.url || "").replace(/^\/+/, "");

  // Log request details for debugging
  console.log("🚀 API Request:", {
    method: config.method?.toUpperCase(),
    url: config.url,
    baseURL: config.baseURL,
    fullURL: `${config.baseURL}/${config.url}`,
    data: config.data,
    headers: config.headers,
  });

  return config;
});

// Response interceptor - Handle errors globally
axiosInstance.interceptors.response.use(
  (response) => {
    // Log successful response
    console.log("✅ API Response Success:", {
      status: response.status,
      url: response.config.url,
      data: response.data,
    });
    return response;
  },
  (error) => {
    // Log error details for debugging
    console.error("❌ API Error:", {
      message: error.message,
      status: error.response?.status,
      statusText: error.response?.statusText,
      url: error.config?.url,
      fullURL: error.config?.baseURL
        ? `${error.config.baseURL}/${error.config.url}`
        : error.config?.url,
      requestData: error.config?.data,
      responseData: error.response?.data,
      headers: error.response?.headers,
    });

    // Handle common errors
    if (error.response?.status === 401) {
      // Unauthorized - clear token and redirect to login
      localStorage.removeItem("token");
      // You can add redirect logic here if needed
      // window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;

