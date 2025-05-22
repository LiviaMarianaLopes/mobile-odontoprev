import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import axios from "axios";
import RNPickerSelect from "react-native-picker-select";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";


export default function AgendamentoForm() {
  const [dentistas, setDentistas] = useState([]);
  const [unidades, setUnidades] = useState([]);
  const [dentistaSelecionado, setDentistaSelecionado] = useState("");
  const [unidadeSelecionada, setUnidadeSelecionada] = useState("");
  const [dataConsulta, setDataConsulta] = useState(null);
  const [horaConsulta, setHoraConsulta] = useState(null);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [motivo, setMotivo] = useState("");
  const [carregando, setCarregando] = useState(false);
  const showDatePicker = () => setDatePickerVisibility(true);
  const hideDatePicker = () => setDatePickerVisibility(false);

  const handleConfirmDate = (date) => {
    setDataConsulta(date);
    hideDatePicker();
  };

  const showTimePicker = () => setTimePickerVisibility(true);
  const hideTimePicker = () => setTimePickerVisibility(false);
  const handleConfirmTime = (time) => {
    setHoraConsulta(time);
    hideTimePicker();
  };

  useEffect(() => {
    const buscarDados = async () => {
      try {
        const [dentistasRes, unidadesRes] = await Promise.all([
          axios.get("https://odontoprev-spring-mvc.onrender.com/api/dentistas"),
          axios.get("https://odontoprev-spring-mvc.onrender.com/api/unidades"),
        ]);
        setDentistas(dentistasRes.data);
        setUnidades(unidadesRes.data);
    
      } catch (error) {
        Alert.alert("Erro", "Não foi possível carregar os dados.");
      }
    };

    buscarDados();
  }, []);

  const agendarConsulta = async () => {
    if (
      !dataConsulta ||
      !horaConsulta ||
      !dentistaSelecionado ||
      !unidadeSelecionada ||
      !motivo
    ) {
      Alert.alert("Atenção", "Preencha todos os campos.");
      return;
    }

    const dataHoraFormatada = `${moment(dataConsulta).format("DD/MM/YYYY")} ${moment(horaConsulta).format("HH:mm")}`;
    const idPaciente = await AsyncStorage.getItem("pacienteId");

    setCarregando(true);
    try {
      await axios.post("https://odontoprev-spring-mvc.onrender.com/api/consultas", {
        data: dataHoraFormatada,
        idPaciente: idPaciente,
        idDentista: parseInt(dentistaSelecionado),
        idUnidade: parseInt(unidadeSelecionada),
        motivo: motivo,
      });

      Alert.alert("Sucesso", "Consulta agendada com sucesso!");
      setDataConsulta("");
      setHoraConsulta("");
      setDentistaSelecionado("");
      setUnidadeSelecionada("");
      setMotivo("");
    } catch (error) {
      Alert.alert("Erro", "Não foi possível agendar a consulta.");
    } finally {
      setCarregando(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Agendar Consulta</Text>

      <Text style={styles.label}>Data da consulta</Text>
      <TouchableOpacity onPress={showDatePicker} style={styles.input}>
        <Text style={{ color: dataConsulta ? "#000" : "#999" }}>
          {dataConsulta ? moment(dataConsulta).format("DD/MM/YYYY") : "Selecione uma data"}
        </Text>
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirmDate}
        onCancel={hideDatePicker}
      />

      <Text style={styles.label}>Hora da consulta</Text>
      <TouchableOpacity onPress={showTimePicker} style={styles.input}>
        <Text style={{ color: horaConsulta ? "#000" : "#999" }}>
          {horaConsulta ? moment(horaConsulta).format("HH:mm") : "Selecione uma hora"}
        </Text>
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isTimePickerVisible}
        mode="time"
        is24Hour={true}
        onConfirm={handleConfirmTime}
        onCancel={hideTimePicker}
      />

      <Text style={styles.label}>Motivo da consulta</Text>
      <TextInput
        style={styles.input}
        value={motivo}
        onChangeText={setMotivo}
        placeholder="Ex: Consulta de rotina"
        placeholderTextColor="#999"
      />

      <Text style={styles.label}>Selecione o dentista</Text>
      <RNPickerSelect
        value={dentistaSelecionado}
        onValueChange={setDentistaSelecionado}
        placeholder={{ label: "Selecione um dentista", value: null }}
        items={dentistas.map((d) => ({ label: d.nome, value: d.id.toString() }))}
        style={pickerStyles}
      />

      <Text style={styles.label}>Selecione a unidade</Text>
      <RNPickerSelect
        value={unidadeSelecionada}
        onValueChange={setUnidadeSelecionada}
        placeholder={{ label: "Selecione uma unidade", value: null }}
        items={unidades.map((u) => ({ label: u.nome, value: u.id.toString() }))}
        style={pickerStyles}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={agendarConsulta}
        disabled={carregando}
      >
        {carregando ? (
          <ActivityIndicator color="#FFF" />
        ) : (
          <Text style={styles.buttonText}>Agendar</Text>
        )}
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    padding: 20,
    alignItems: "stretch",
  },
  title: {
    fontSize: 24,
    color: "#0063FF",
    fontWeight: "bold",
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    color: "#333",
    marginBottom: 5,
    fontWeight: "500",
  },
  input: {
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    fontSize: 14,
  },
  button: {
    backgroundColor: "#0063FF",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
    elevation: 5,
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
  },
});

const pickerStyles = {
  inputIOS: {
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    color: "#000",
  },
  inputAndroid: {
    borderWidth: 1,
    borderColor: "#222",
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    color: "#000",
  },
};
