import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

const services = [
    { id: 1, name: "Agendamento", icon: require("../../assets/calendario.png") },
    { id: 2, name: "Minha Cobertura", icon: require("../../assets/dente.png") },
    { id: 3, name: "Localizar Dentista", icon: require("../../assets/localizacao.png") },
    { id: 4, name: "Fale Conosco", icon: require("../../assets/comunicacao.png") },
    { id: 5, name: "Meus Exames", icon: require("../../assets/exames.png") },
    { id: 6, name: "Na Consulta", icon: require("../../assets/hospital.png") },
    { id: 7, name: "Dentista Online", icon: require("../../assets/dente-machucado.png") },
    { id: 8, name: "Benefícios", icon: require("../../assets/presente.png") },
    { id: 9, name: "Minhas Consultas", icon: require("../../assets/tempo.png") },
];

export default function ServicesGrid() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Serviços</Text>
            <View style={styles.grid}>
                {services.map((service) => (
                    <TouchableOpacity key={service.id} style={styles.serviceBox} >
                        <Image source={service.icon} style={styles.icon} />
                        <Text style={styles.text}>{service.name}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        alignItems: "center",
        backgroundColor: "#FFF",
        width: "100%",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 15,
        color: "#0063FF",
        alignSelf: "flex-start",
        padding: 10
    },
    grid: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
        width: "100%",
        backgroundColor: "#FFF",

    },
    serviceBox: {
        width: 100,
        height: 110,
        backgroundColor: "#FFF",
        margin: 10,
        marginBottom: 20,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
    },
    icon: {
        width: 40,
        height: 40,
        marginBottom: 5,
        resizeMode: "contain",
    },
    text: {
        color: "#000000",
        fontSize: 11,
        textAlign: "center",
        fontWeight: "bold",
    },
});
