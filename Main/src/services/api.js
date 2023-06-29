import axios from "axios";

const api = axios.create({
  baseURL: "http://200.238.195.4:3000",
});

api.interceptors.request.use(
  async (req) => {
    const token = await SecureStore.getItemAsync("secure_token");

    if (!req.headers.Authorization && token) {
      req.headers.Authorization = `Bearer ${token}`;
    }
    return req;
  },

  (error) => Promise.reject(error)
);

export default api;
