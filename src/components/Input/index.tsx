import { TextInputProps } from "react-native";
import { useTheme } from "styled-components/native";
import { Container } from "./styles";

interface Props extends TextInputProps{}

export function Input({...rest}: Props) {
  const { COLORS } = useTheme()
  
  return(
    <Container
      placeholderTextColor={COLORS.GRAY_300}
      {...rest}
    >
      
    </Container>
  )
}