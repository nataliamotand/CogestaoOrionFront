import api from "./api";

export const login = async (email) => {
  await api.post("/login", { email }).catch((error) => console.log(error));
};
