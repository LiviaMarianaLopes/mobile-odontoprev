import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function FormSenha({onSubmit}) {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [erroSenha, setErroSenha] = useState("");

  const handleSubmit  = () => {
    if (senha !== confirmarSenha) {
      setErroSenha("As senhas não coincidem.");
      return;
    }
    setErroSenha("");
    onSubmit({email, senha})
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar Conta:</Text>

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        keyboardType="email-address"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={senha}
        onChangeText={(text) => setSenha(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Confirmar Senha"
        secureTextEntry
        value={confirmarSenha}
        onChangeText={(text) => setConfirmarSenha(text)}
      />

      {erroSenha ? <Text style={styles.errorText}>{erroSenha}</Text> : null}

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.registerButton} onPress={() => navigation.navigate("Tela Endereco")}>
          <Text style={styles.registerText}>Voltar</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.loginButton, senha !== confirmarSenha && styles.disabledButton]} 
          onPress={handleSubmit}
          disabled={senha !== confirmarSenha || senha == ""}
        >
          <Text style={styles.loginText}>Criar conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    marginBottom: 30,
    color: "#0063FF",
    paddingRight: 180,
  },
  input: {
    width: 350,
    backgroundColor: "#eee",
    padding: 12,
    borderRadius: 50,
    marginBottom: 18,
    fontSize: 16
  },
  errorText: {
    color: "red",
    fontSize: 14,
    marginBottom: 10,
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
