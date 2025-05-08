import React from "react";
import { View, StyleSheet } from "react-native";
import HeaderHome from "../Components/HeaderHome";
import AgendamentoForm from "../Components/AgendamentoForm";
export default function TelaAgendamento() {
  return (
    <View style={styles.container}>
      <HeaderHome/>
      <AgendamentoForm/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor:"#FFF",
    height:"100%",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
