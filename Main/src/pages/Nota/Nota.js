import React, { useState } from "react";
import { View, Text, Button } from "react-native";
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
import { TextError } from "../Login/Styles";

//import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";

function Nota() {
  const [data, setData] = useState(new Date());
  const [lembrete, setLembrete] = useState("");
  const [lembreteVazio, setLembreteVazio] = useState(false);

  const datePicker = () => {
    DateTimePickerAndroid.open({
      value: data,
      onChange: (event, dataSelecionada) => setData(dataSelecionada),
      mode: "data",
      is24Hour: true,
    });
  };
  const opcoesDeDataFormatada = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  const dataFormatada = data.toLocaleDateString("pt-BR", opcoesDeDataFormatada);

  function criarNota() {
    if (lembrete === "") {
      return setLembreteVazio(true);
    }
    setLembreteVazio(false);
    console.log(lembrete);
  }
  return (
    <ViewGlobal>
      <ViewNota>
        <ViewTitle>
          <Title fontSize="46px">Novo Lembrete</Title>
          <Linha />
        </ViewTitle>
        <Text onPress={() => datePicker()}>{dataFormatada}</Text>
        <ViewInputs>
          <TextLabel erro={lembreteVazio}>Descrição:</TextLabel>
          <Input
            erro={lembreteVazio}
            nota={true}
            placeholder="  "
            width="100%"
            height="165px"
            onChangeText={setLembrete}
            value={lembrete}
          />
          {lembreteVazio ? <TextError>Digite um lembrete</TextError> : null}
        </ViewInputs>
        <TextLink onPress={() => criarNota()}>+ Adicionar</TextLink>
      </ViewNota>
    </ViewGlobal>
  );
}

export default Nota;
