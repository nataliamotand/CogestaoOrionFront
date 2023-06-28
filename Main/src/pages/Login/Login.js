import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { TextButton, TextError, TextLabel, ViewLogin } from "./Styles";

import Input from "../../styles/Input";
import ViewGlobal from "../../styles/ViewGlobal";
import Button from "../../styles/Button";
import Title from "../../styles/Title";

import * as SecureStore from "expo-secure-store";
import * as ManagerService from "../../services/ManagerService";

function Login() {
  let [email, setEmail] = useState("");
  let [erroEmail, setErroEmail] = useState(false);
  let [emailNaoRegistrado, setEmailNaoRegistrado] = useState(false);

  async function login() {
    if (!/\S+@\S+\.\S+/.test(email)) return setErroEmail(true);
    setErroEmail(false);

    const resposta = await ManagerService.requisicaoLogin(email);
    if (!resposta.status) return setEmailNaoRegistrado(true);
    setEmailNaoRegistrado(false);

    await SecureStore.setItemAsync("secure_token", resposta.data.token);
    const token = await SecureStore.getItemAsync("secure_token");
    //FAZER A NAVEGAÇÃO PARA A HOME
  }

  return (
    <ViewGlobal>
      <ViewLogin>
        <Title fontSize="36px">Login</Title>
        <View>
          <TextLabel erro={erroEmail || emailNaoRegistrado}>E-mail</TextLabel>
          <Input
            placeholder="Digite seu e-mail"
            onChangeText={setEmail}
            value={email}
            erro={erroEmail || emailNaoRegistrado}
          />
          {erroEmail ? <TextError>E-mail inválido</TextError> : null}
          {emailNaoRegistrado ? (
            <TextError>E-mail não registrado</TextError>
          ) : null}
        </View>
        <Button onPress={() => login()}>
          <TextButton>Login</TextButton>
        </Button>
      </ViewLogin>
    </ViewGlobal>
  );
}

export default Login;
