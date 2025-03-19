import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { TextInputMask } from 'react-native-masked-text';
import { useNavigation } from "@react-navigation/native";

export default function FormCadastroInfo({ onNext }) {
  const navigation = useNavigation();
  const [dadosPessoais, setDadosPessoais] = useState({
    nome: "",
    cpf: "",
    dataNascimento: "",
    telefone: "",
    genero: ""
  });

  const camposPreenchidos = dadosPessoais.nome && dadosPessoais.cpf && dadosPessoais.dataNascimento && dadosPessoais.telefone && dadosPessoais.genero;

  const handleNext = () => {
    if (camposPreenchidos) {
      onNext({ dadosPessoais });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crie sua conta:</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={dadosPessoais.nome}
        onChangeText={(text) => setDadosPessoais({ ...dadosPessoais, nome: text })}
      />

      <TextInputMask
        style={styles.input}
        placeholder="CPF"
        keyboardType="numeric"
        type={"cpf"}
        value={dadosPessoais.cpf}
        onChangeText={(text) => setDadosPessoais({ ...dadosPessoais, cpf: text })}
      />

      <TextInputMask
        style={styles.input}
        placeholder="Data de Nascimento"
        keyboardType="numeric"
        type={"custom"}
        options={{
          mask: "99/99/9999"
        }}
        value={dadosPessoais.dataNascimento}
        onChangeText={(text) => setDadosPessoais({ ...dadosPessoais, dataNascimento: text })}
      />

      <TextInputMask
        style={styles.input}
        placeholder="Telefone"
        keyboardType="phone-pad"
        type={"custom"}
        options={{
          mask: "(99)99999-9999"
        }}
        value={dadosPessoais.telefone}
        onChangeText={(text) => setDadosPessoais({ ...dadosPessoais, telefone: text })}
      />

      <Text style={styles.label}>Gênero:</Text>
      <View style={styles.genderContainer}>
        {["Masculino", "Feminino"].map((genero) => (
          <TouchableOpacity
            key={genero}
            style={[
              styles.genderButton,
              dadosPessoais.genero === genero && styles.genderButtonSelected
            ]}
            onPress={() => setDadosPessoais({ ...dadosPessoais, genero })}
          >
            <Text
              style={[
                styles.genderText,
                dadosPessoais.genero === genero && styles.genderTextSelected
              ]}
            >
              {genero}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.registerButton} onPress={() => navigation.navigate("Tela Inicial")}>
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
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#FFF",
  },
  title: {
    fontSize: 24,
    marginBottom: 30,
    color: "#0063FF",
    alignSelf: "flex-start",
  },
  input: {
    width: "100%",
    backgroundColor: "#eee",
    padding: 12,
    borderRadius: 50,
    marginBottom: 20,
    fontSize: 16
  },
  label: {
    fontSize: 16,
    alignSelf: "flex-start",
    marginBottom: 5,
    color: "#333",
    paddingLeft: 8,
  },
  genderContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 20,
  },
  genderButton: {
    backgroundColor: "#eee",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
    marginVertical: 5,
    alignItems: "center",
    width: "48%",
  },
  genderButtonSelected: {
    backgroundColor: "#007AFF",
  },
  genderText: {
    color: "#333",
    fontWeight: "bold",
  },
  genderTextSelected: {
    color: "#fff",
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
