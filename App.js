import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import TelaInicial from "./src/Pages/TelaInicial";
import TelaCadastro from "./src/Pages/TelaCadastro";
import TelaUserHome from "./src/Pages/TelaUserHome";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tela Inicial">
        <Stack.Screen
          name="Tela Inicial"
          component={TelaInicial}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Tela Cadastro"
          component={TelaCadastro}
          options={{ headerShown: false }}
        />
        <Stack.Screen
         name="Tela Home"
         component={TelaUserHome}
         options={{headerShown: false}}
        />
      </Stack.Navigator>

    </NavigationContainer>
  );
}
