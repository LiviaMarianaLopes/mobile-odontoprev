import React from "react";
import { View, StyleSheet, Image } from "react-native";
import FormEndereco from "../Components/FormEndereco";
import logo from "../../assets/icon-odontoprev.png";

export default function TelaCadastroInfo({ navigation }) {
  const handleNext = (dados) => {
    navigation.navigate("Tela Senha", dados);
  };

  return (
    <>
      <View style={styles.containerInicial}>
        <Image source={logo} style={styles.icon} />
        <View>
          <FormEndereco onNext={handleNext} />
        </View>

      </View>
    </>
  );
}

const styles = StyleSheet.create({
  containerInicial: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#FFF",
    paddingTop: 70
  },
  icon: {
    width: 31.5,
    height: 33,
    marginRight: 25,
    alignSelf: "flex-end"
  },

})