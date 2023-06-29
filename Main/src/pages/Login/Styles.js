import styled from "styled-components/native";
import { Text, View } from "react-native";

export const TextButton = styled.Text`
  color: #fff;
  font-size: 22px;
  font-weight: 700;
`;

export const TextLabel = styled.Text`
  font-size: 16px;
  padding-bottom: 20px;
  color: ${(props) => (props.erro ? "red" : "black")};
`;

export const TextError = styled.Text`
  font-size: 13px;
  color: red;
`;

export const ViewLogin = styled.View`
  margin-bottom: 70%;
  width: 80%;
  justify-content: space-evenly;
  height: 380px;
  border-bottom-color: #000;
  border-bottom-width: 1px;
`;
