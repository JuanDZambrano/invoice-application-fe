import axios, { AxiosError } from "axios";

export const BASE_URL = "http://localhost:8000/";

export const apiClient = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

// Helper function to get the CSRF token from cookies
function getCSRFTokenFromCookies(): string | null {
  const cookieValue = document.cookie.match(
    "(^|;)\\s*" + "csrftoken" + "\\s*=\\s*([^;]+)"
  );
  return cookieValue ? (cookieValue.pop() as string) : null;
}

// Interceptor to attach token to every request
apiClient.interceptors.request.use((config) => {
  const token = window.localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Token ${token}`;
  }

  // Set the CSRF token for mutating requests
  if (["post", "put", "patch", "delete"].includes(config.method || "")) {
    const csrfToken = getCSRFTokenFromCookies();
    if (csrfToken) {
      config.headers["X-CSRFToken"] = csrfToken;
    }
  }

  return config;
});

// Interceptor for handling errors
apiClient.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response && error.response.status === 401) {
      console.log("Token is expired or invalid.");
    } else {
      console.log(error.message);
    }
    throw error;
  }
);
