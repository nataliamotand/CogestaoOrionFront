import api from "./api";

export const login = (email) =>
  api.post("/login", { email }).catch((error) => console.log(error));
