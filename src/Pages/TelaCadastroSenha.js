import React from "react";
import { View, StyleSheet, Image } from "react-native";
import FormSenha from "../Components/FormSenha";
import logo from "../../assets/icon-odontoprev.png";

export default function TelaCadastroInfo({ navigation }) {
  const handleNext = () => {
    navigation.navigate("Tela Home");
  };

  return (
    <>
      <View style={styles.containerInicial}>
        <Image source={logo} style={styles.icon} />
        <View>
          <FormSenha onNext={handleNext} />
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
    paddingTop: 70,
    paddingBottom: 150,
  },
  icon: {
    width: 31.5,
    height: 33,
    marginRight: 25,
    alignSelf: "flex-end"
  },

})