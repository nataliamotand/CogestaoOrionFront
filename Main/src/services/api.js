import axios from "axios";

const api = axios.create({
  baseURL: "http://200.238.195.115:3000",
});

export default api;
