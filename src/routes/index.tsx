import { NavigationContainer } from "@react-navigation/native";
import theme from "@theme/index";
import { View } from "react-native";
import { useTheme } from "styled-components/native";
import { AppRoutes } from "./app.routes";

export function Routes() {
  const { COLORS } = useTheme()
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.GRAY_600 }}>
    <NavigationContainer >
      <AppRoutes />
    </NavigationContainer>
    </View>
  )
}