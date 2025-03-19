import React from "react";
import { View, StyleSheet } from "react-native";
import HeaderHome from "../Components/HeaderHome";
import ServicesGrid from "../Components/ServicesGrid";

export default function TelaUserHome() {
  return (
    <View style={styles.container}>
      <HeaderHome/>
      <ServicesGrid/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor:"#FFF",
    height:"100%"
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
