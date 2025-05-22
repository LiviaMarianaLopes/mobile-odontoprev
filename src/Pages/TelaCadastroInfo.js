import React, { useState } from "react";
import { View, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

import FormCadastroInfo from "../Components/FormCadastroInfo";
import FormEndereco from "../Components/FormEndereco";
import FormSenha from "../Components/FormSenha";

export default function CadastroPaciente() {
  const [step, setStep] = useState(1);
  const [dadosPessoais, setDadosPessoais] = useState(null);
  const [endereco, setEndereco] = useState(null);
  const [credenciais, setCredenciais] = useState({ email: "", senha: "" });

  const navigation = useNavigation();

  const handleNextInfo = (data) => {
    setDadosPessoais(data.dadosPessoais);
    setStep(2);
  };

  const handleNextEndereco = (data) => {
    setEndereco(data.endereco);
    setStep(3);
  };

  const handleFinalizarCadastro = async (data) => {
    setCredenciais({ email: data.email, senha: data.senha });

    const paciente = {
      nome: dadosPessoais.nome,
      dataNascimento: formatarData(dadosPessoais.dataNascimento),
      email: data.email,
      telefone: dadosPessoais.telefone.replace(/\D/g, ""),
      cpf: dadosPessoais.cpf.replace(/\D/g, ""),
      login: {
        email: data.email,
        senha: data.senha
      },
      genero: {
        titulo: dadosPessoais.genero
      },
      endereco: {
        logradouro: endereco.logradouro,
        numero: parseInt(endereco.numero),
        cep: parseInt(endereco.cep.replace("-", "")),
        complemento: endereco.complemento,
        bairro: {
          nome: endereco.bairro,
          cidade: {
            nome: endereco.cidade,
            estado: {
              nome: nomeDoEstado(endereco.estado),
              sigla: endereco.estado
            }
          }
        }
      }
    };

    try {
      const response = await fetch("https://odontoprev-spring-mvc.onrender.com/api/pacientes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(paciente)
      });

      if (response.ok) {
        const pacienteCriado = await response.json();

        await AsyncStorage.setItem("pacienteId", String(pacienteCriado.id));
        navigation.navigate("Tela Home");

      } else {
        const erro = await response.json();
        Alert.alert("Erro", erro.message || "Erro ao cadastrar paciente.");
      }
    } catch (err) {
      Alert.alert("Erro", "Não foi possível conectar à API.");
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {step === 1 && <FormCadastroInfo onNext={handleNextInfo} />}
      {step === 2 && <FormEndereco onNext={handleNextEndereco} />}
      {step === 3 && <FormSenha onSubmit={handleFinalizarCadastro} />}
    </View>
  );
}

function formatarData(data) {
  const [dia, mes, ano] = data.split("/");
  return `${ano}-${mes}-${dia}`;
}

function nomeDoEstado(sigla) {
  const estados = {
    "AC": "Acre", "AL": "Alagoas", "AP": "Amapá", "AM": "Amazonas", "BA": "Bahia",
    "CE": "Ceará", "DF": "Distrito Federal", "ES": "Espírito Santo", "GO": "Goiás",
    "MA": "Maranhão", "MT": "Mato Grosso", "MS": "Mato Grosso do Sul", "MG": "Minas Gerais",
    "PA": "Pará", "PB": "Paraíba", "PR": "Paraná", "PE": "Pernambuco", "PI": "Piauí",
    "RJ": "Rio de Janeiro", "RN": "Rio Grande do Norte", "RS": "Rio Grande do Sul",
    "RO": "Rondônia", "RR": "Roraima", "SC": "Santa Catarina", "SP": "São Paulo",
    "SE": "Sergipe", "TO": "Tocantins"
  };
  return estados[sigla] || sigla;
}

