import React from "react";
import { View, StyleSheet, TouchableOpacity, Text, Image } from "react-native";
import FormCadastroInfo from "../Components/FormCadastroInfo";
import logo from "../../assets/icon-odontoprev.png";

export default function TelaCadastroInfo({ navigation }) {
    const handleNext = (dados) => {
        navigation.navigate("Tela Endereco", dados);
    };

    return (
        <>
            <View style={styles.containerInicial}>
                <Image source={logo} style={styles.icon} />
                <View>
                    <FormCadastroInfo onNext={handleNext} />
                </View>

            </View>
        </>
    );
}

const styles = StyleSheet.create({
    containerInicial: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "flex-end",
        backgroundColor: "#FFF",
        paddingTop: 70
    },
    icon: {
        width: 31.5,
        height: 33,
        marginRight: 25,
    },

})