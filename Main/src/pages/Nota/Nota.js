import React from "react";
import { View, Text } from "react-native";
import ViewGlobal from "../../styles/ViewGlobal";
import {
  TextLabel,
  ViewNota,
  ViewInputs,
  TextLink,
  Linha,
  TextTitle,
  ViewTitle,
} from "./Styles";
import Input from "../../styles/Input";
import Title from "../../styles/Title";

function Nota() {
  const dataAtual = new Date();

  return (
    <ViewGlobal>
      <ViewNota>
        <ViewTitle>
          <Title fontSize="46px">Novo Lembrete</Title>
          <Linha />
        </ViewTitle>
        <Text>Datepicker</Text>
        <ViewInputs>
          <TextLabel>Descrição:</TextLabel>
          <Input placeholder="  " width="100%" height="165px" />
        </ViewInputs>
        <TextLink>+ Adicionar</TextLink>
      </ViewNota>
    </ViewGlobal>
  );
}

export default Nota;
