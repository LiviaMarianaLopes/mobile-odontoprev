import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, StyleSheet, ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function HistoricoConsultas() {
    const [consultasAgendadas, setConsultasAgendadas] = useState([]);
    const [consultasPassadas, setConsultasPassadas] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchConsultas() {
            try {
                const idPaciente = JSON.parse(await AsyncStorage.getItem("pacienteId"));
                console.log("ID do paciente recuperado:", idPaciente);

                if (!idPaciente) {
                    throw new Error("ID do paciente não encontrado no AsyncStorage.");
                }

                const response = await fetch(`https://odontoprev-spring-mvc.onrender.com/api/consulta/${idPaciente}`);
                const data = await response.json();

                const hoje = new Date();

                const agendadas = [];
                const passadas = [];

                data.forEach(consulta => {
                    const dataConsulta = new Date(consulta.data);
                    const item = {
                        id: consulta.id,
                        data: formatarDataHora(dataConsulta),
                        motivo: consulta.motivo,
                        dentista: consulta.dentista.nome,
                        unidade: consulta.unidade.nome,
                    };

                    if (dataConsulta > hoje) {
                        agendadas.push(item);
                    } else {
                        passadas.push(item);
                    }
                });

                setConsultasAgendadas(agendadas);
                setConsultasPassadas(passadas);
            } catch (error) {
                console.error("Erro ao buscar consultas:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchConsultas();
    }, []);

    function formatarDataHora(data) {
        return data.toLocaleDateString("pt-BR") + " às " + data.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
    }
    function renderConsulta(consulta, isAgendada = false) {
        return (
            <View key={consulta.id} style={styles.card}>
                <Text style={styles.data}>{consulta.data}</Text>
                <Text style={styles.label}>Dentista:</Text>
                <Text style={styles.text}>{consulta.dentista}</Text>
                <Text style={styles.label}>Unidade:</Text>
                <Text style={styles.text}>{consulta.unidade}</Text>
                <Text style={styles.label}>Motivo:</Text>
                <Text style={styles.text}>{consulta.motivo}</Text>

                {isAgendada && (
                    <View style={styles.botaoContainer}>
                        <Text style={styles.botao} onPress={() => desagendarConsulta(consulta.id)}>
                            Desagendar
                        </Text>
                    </View>


                )}
            </View>
        );
    }

    async function desagendarConsulta(idConsulta) {
        try {
            const response = await fetch(`https://odontoprev-spring-mvc.onrender.com/api/consultas/${idConsulta}`, {
                method: "DELETE",
            });

            if (response.ok) {
                setConsultasAgendadas(prev => prev.filter(c => c.id !== idConsulta));
                alert("Consulta desagendada com sucesso!");
            } else {
                throw new Error("Erro ao desagendar. Tente novamente.");
            }
        } catch (error) {
            console.error("Erro ao desagendar consulta:", error);
            alert("Não foi possível desagendar a consulta.");
        }
    }


    return (
        <ScrollView contentContainerStyle={styles.container}>
            {loading ? (
                <ActivityIndicator size="large" color="#3B82F6" />
            ) : (
                <>
                    <Text style={styles.title}>Consultas Agendadas</Text>
                    {consultasAgendadas.length > 0 ? (
                        consultasAgendadas.map(consulta => renderConsulta(consulta, true))
                    ) : (
                        <Text style={styles.vazio}>Nenhuma consulta agendada.</Text>
                    )}

                    <Text style={styles.title}>Histórico de Consultas</Text>
                    {consultasPassadas.length > 0 ? (
                        consultasPassadas.map(renderConsulta)
                    ) : (
                        <Text style={styles.vazio}>Nenhum histórico de consulta.</Text>
                    )}
                </>
            )}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: "#FFF",
        minHeight: "100%",
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#0063FF",
        marginTop: 20,
        marginBottom: 10,
    },
    card: {
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        padding: 15,
        marginBottom: 15,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 4,
    },
    data: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#1F2937",
        marginBottom: 8,
    },
    label: {
        fontWeight: "600",
        color: "#374151",
        marginTop: 4,
    },
    text: {
        color: "#4B5563",
        marginBottom: 4,
    },
    vazio: {
        fontStyle: "italic",
        color: "#9CA3AF",
        marginBottom: 20,
    },
    botaoContainer: {
        marginTop: 10,
        alignItems: "flex-end",
    },
    botao: {
        color: "#EF4444",
        fontWeight: "bold",
        fontSize: 14,
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderWidth: 1,
        borderColor: "#EF4444",
        borderRadius: 6,
    },

});
