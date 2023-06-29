import styled from "styled-components/native";
import { Text, View, Dimensions } from "react-native";
import Title from "../../styles/Title";

export const TextLabel = styled.Text`
  font-size: 24px;
  padding-bottom: 20px;
  color: ${(props) => (props.erro ? "red" : "black")};
`;

export const ViewNota = styled.View`
  width: 80%;
  justify-content: center;
  align-items: center;
  gap: 50px;
  height: 100%;
`;

export const Linha = styled.View`
  height: 2px;
  width: 80%;
  background-color: #6766f6;
`;

export const ViewInputs = styled.View`
  width: 100%;
`;
export const ViewTitle = styled(ViewInputs)`
  align-items: center;
`;

export const TextLink = styled.Text`
  color: #6766f6;
  font-size: 25px;
`;
