import axios from "axios";

const api = axios.create({
  baseURL: "http://200.238.225.34:3000",
});

export default api;
