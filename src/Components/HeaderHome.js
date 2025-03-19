import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import logo from "../../assets/logo-branca.png"
import settings from "../../assets/settings.png"
import alarm from "../../assets/alarm.png"
import dentinho from "../../assets/dentinho.jpeg"
import sair from "../../assets/sair.png"

export default function HeaderHome() {
  const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logo} style={styles.logo} />
                <View style={styles.options} >
                    <TouchableOpacity>
                        <Image source={settings} style={styles.icon} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={alarm} style={styles.icon} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.user}>
                <Image source={dentinho} style={styles.userImg} />
                <View style={styles.text}>
                    <Text style={styles.title}>Bem vindo,</Text>
                    <Text style={styles.nome}>Sr. Usuário!</Text>
                </View>

                <TouchableOpacity onPress={() => navigation.navigate("Tela Inicial")}>
                    <Image source={sair} style={styles.sair} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        backgroundColor: "#0063FF",
        width: "100%",
        padding: 20,
        paddingTop: 40,

    },
    header: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "flex-start",
        paddingBottom: 20,
    },
    options: {
        display: "flex",
        flexDirection: "row",
        width: "20%",
        justifyContent: "space-between"
    },
    user: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "flex-end",

    },
    text: {
        paddingRight: 50,
    },
    title: {
        fontSize: 18,
        marginBottom: 3,
        color: "#FFF",
        alignSelf: "flex-start",
        fontWeight: "bold",

    },
    nome: {
        fontSize: 22,
        marginBottom: 5,
        color: "#FFF",
        alignSelf: "flex-start",
        fontWeight: "bold",

    },
    icon: {
        width: 28,
        height: 28,
    },
    logo: {
        width: 120, 
        height: 30, 
        resizeMode: "contain",
    },
    userImg: {
        width: 70,
        height: 70,  
        resizeMode: "contain", 
        borderRadius: 50,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 1.3,
        shadowRadius: 15,
        elevation: 25, 
    },
    sair: {
        width: 45, 
        height: 60,
        resizeMode: "contain", 
    }
});