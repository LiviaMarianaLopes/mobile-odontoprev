import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import TelaInicial from "./src/Pages/TelaInicial";
import TelaUserHome from "./src/Pages/TelaUserHome";
import TelaCadastroEnd from "./src/Pages/TelaCadastroEnd";
import TelaCadastroSenha from "./src/Pages/TelaCadastroSenha";
import TelaCadastroInfo from "./src/Pages/TelaCadastroInfo";
import TelaAgendamento from "./src/Pages/TelaAgendamento";

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
          component={TelaCadastroInfo}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Tela Home"
          component={TelaUserHome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Tela Endereco"
          component={TelaCadastroEnd}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Tela Senha"
          component={TelaCadastroSenha}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Tela Agendamento"
          component={TelaAgendamento}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>

    </NavigationContainer>
  );
}
