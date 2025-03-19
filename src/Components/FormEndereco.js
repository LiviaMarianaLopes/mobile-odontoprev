import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { TextInputMask } from 'react-native-masked-text';
import { useNavigation } from "@react-navigation/native";

export default function FormEndereco({ onNext }) {
    const navigation = useNavigation();
    const [endereco, setEndereco] = useState({
        cep: "",
        logradouro: "",
        numero: "",
        complemento: "",
        bairro: "",
        cidade: "",
        estado: ""
    });

    const buscarEndereco = async (cep) => {
        if (cep.length === 9) {
            try {
                const response = await fetch(`https://viacep.com.br/ws/${cep.replace("-", "")}/json/`);
                const data = await response.json();

                if (data.erro) {
                    Alert.alert("Erro", "CEP não encontrado.");
                } else {
                    setEndereco({
                        ...endereco,
                        logradouro: data.logradouro || "",
                        bairro: data.bairro || "",
                        cidade: data.localidade || "",
                        estado: data.uf || "",
                        cep,
                    });
                }
            } catch (error) {
                Alert.alert("Erro", "Não foi possível buscar o endereço.");
            }
        }
    };

    const camposPreenchidos = endereco.cep && endereco.numero && endereco.bairro && endereco.cidade && endereco.estado;

    const handleNext = () => {
        if (camposPreenchidos) {
            onNext({ endereco });
        }
    };

    return (
        <View style={styles.containerCadastro}>
            <Text style={styles.title}>Endereço:</Text>

            <TextInputMask
                style={styles.input}
                placeholder="CEP"
                type={"custom"}
                options={{ mask: "99999-999" }}
                keyboardType="numeric"
                value={endereco.cep}
                onChangeText={(text) => {
                    setEndereco({ ...endereco, cep: text });
                    buscarEndereco(text);
                }}
            />

            <TextInput
                style={styles.input}
                placeholder="Logradouro"
                value={endereco.logradouro}
                onChangeText={(text) => setEndereco({ ...endereco, logradouro: text })}
            />

            <TextInput
                style={styles.input}
                placeholder="Número"
                keyboardType="numeric"
                value={endereco.numero}
                onChangeText={(text) => setEndereco({ ...endereco, numero: text })}
            />

            <TextInput
                style={styles.input}
                placeholder="Complemento (Opcional)"
                value={endereco.complemento}
                onChangeText={(text) => setEndereco({ ...endereco, complemento: text })}
            />

            <TextInput
                style={styles.input}
                placeholder="Bairro"
                value={endereco.bairro}
                onChangeText={(text) => setEndereco({ ...endereco, bairro: text })}
            />

            <TextInput
                style={styles.input}
                placeholder="Cidade"
                value={endereco.cidade}
                onChangeText={(text) => setEndereco({ ...endereco, cidade: text })}
            />

            <TextInput
                style={styles.input}
                placeholder="Estado"
                value={endereco.estado}
                onChangeText={(text) => setEndereco({ ...endereco, estado: text })}
            />

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.registerButton} onPress={() => navigation.navigate("Tela Cadastro")}>
                    <Text style={styles.registerText}>Voltar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.loginButton, !camposPreenchidos && styles.disabledButton]}
                    onPress={handleNext}
                    disabled={!camposPreenchidos}
                >
                    <Text style={styles.loginText}>Próximo</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    containerCadastro: {
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#FFF",
        width: "100%",
    },
    title: {
        fontSize: 24,
        marginBottom: 30,
        color: "#0063FF",
        alignSelf: "flex-start",
    },
    input: {
        width: 350,
        backgroundColor: "#eee",
        padding: 12,
        borderRadius: 50,
        marginBottom: 18,
        fontSize: 16
    },
    buttonContainer: {
        flexDirection: "row",
        marginTop: 20,
    },
    loginButton: {
        backgroundColor: "#007AFF",
        padding: 12,
        borderRadius: 50,
        width: 147,
        alignItems: "center",
    },
    loginText: {
        color: "#fff",
        fontWeight: "bold",
        textAlign: "center",
    },
    disabledButton: {
        backgroundColor: "#A0A0A0",
    },
    registerButton: {
        borderWidth: 1,
        borderColor: "#007AFF",
        padding: 12,
        borderRadius: 50,
        marginRight: 10,
        width: 147,
        alignItems: "center",
    },
    registerText: {
        color: "#007AFF",
        fontWeight: "bold",
        textAlign: "center",
    },
});

