import { Text } from "react-native";
import styled from "styled-components/native";

export const Title = styled.Text`
  font-size: ${(props) => props.fontSize ?? "36px"};
  font-weight: 800;
`;
export default Title;
