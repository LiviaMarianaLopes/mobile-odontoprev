import React from "react";
import { View, StyleSheet } from "react-native";
import HeaderServices from "../Components/HeaderServices";
import HistoricoConsultas from "../Components/HistoricoConsultas";

export default function TelaHistorico() {
  return (
    <View style={styles.container}>
      <HeaderServices/>
      <HistoricoConsultas/>
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