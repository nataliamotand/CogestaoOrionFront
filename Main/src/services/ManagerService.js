import * as requesterService from "./RequesterService";

export const requisicaoLogin = async (email) => {
  const resposta = await requesterService.login(email);
  console.log(resposta);
};
