import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { TextButton, TextLabel, ViewLogin } from "./Styles";

import Input from "../../styles/Input";
import ViewGlobal from "../../styles/ViewGlobal";
import Button from "../../styles/Button";
import Title from "../../styles/Title";

import * as ManagerService from "../../services/ManagerService";

function Login() {
  let [email, setEmail] = useState("");
  let [erroEmail, setErroEmail] = useState(false);

  function login() {
    const requisicao = ManagerService.requisicaoLogin(email);
  }

  return (
    <ViewGlobal>
      <ViewLogin>
        <Title fontSize="36px">Login</Title>
        <View>
          <TextLabel>E-mail</TextLabel>
          <Input
            placeholder="Digite seu e-mail"
            onChangeText={setEmail}
            value={email}
          />
        </View>
        <Button onPress={() => login()}>
          <TextButton>Login</TextButton>
        </Button>
      </ViewLogin>
    </ViewGlobal>
  );
}

export default Login;
