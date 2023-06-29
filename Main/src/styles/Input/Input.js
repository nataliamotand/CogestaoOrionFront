import { TextInput } from "react-native";
import styled from "styled-components/native";

export const Input = styled.TextInput`
  border-bottom-color: ${(props) =>
    props.erro && !props.nota ? "red" : "white"};
  border-bottom-width: 5px;
  background-color: #f2f5ff;
  height: ${(props) => (props.height ? props.height : "70px")};
  color: ${(props) => (props.erro ? "red" : "black")};
  border-radius: 10px;
  padding: 0 15px;
  margin-bottom: 10px;
`;

export default Input;
