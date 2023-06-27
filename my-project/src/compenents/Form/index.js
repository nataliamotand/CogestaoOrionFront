import React, { useState } from "react";
import { 
  TextInput, 
  View, 
  Text, 
  TouchableOpacity, 
  Pressable,
  Keyboard
 } from "react-native";
import styles from "./style";
import Linha from "../Linha/index";
import { useNavigation } from '@react-navigation/native';

export default function Form() {

  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');

  const navigation = useNavigation();

  function ValidarEmail() {
    if (email != null) {
      setEmail(null);
      setMessage(null);
      navigation.navigate('Home');
    }
    else{
      setMessage("Campo obrigatório *");
    }
  }

  return (
    <Pressable onPress={Keyboard.dismiss} style={styles.conteudoForm}>
      <View style={styles.Formulario}>
        <Text style={styles.Label}>Email</Text>
        <Text style={styles.erroMessage}>{message}</Text>
        <TextInput
          onChangeText={setEmail}
          style={styles.textoInput}
          value={email}
        />
        <TouchableOpacity
        onPress={() => ValidarEmail()}
        style={styles.botaoLogin}
        >
          <Text style={styles.textoBotaoLogin}>Login</Text>
        </TouchableOpacity>
      </View>
      <Linha />
    </Pressable>
  );
}