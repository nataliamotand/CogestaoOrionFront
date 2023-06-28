import * as requesterService from "./RequesterService";

export const requisicaoLogin = async (email) => {
  try {
    return await requesterService.login(email);
  } catch (error) {
    return error;
  }
};
