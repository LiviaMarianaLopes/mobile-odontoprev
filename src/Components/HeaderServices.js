import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import logo from "../../assets/logo-branca.png"
import settings from "../../assets/settings.png"
import alarm from "../../assets/alarm.png"
import voltar from "../../assets/seta-voltar.png"

export default function HeaderServices() {
  const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.navigate("Tela Home")}>
                    <Image source={voltar} style={styles.voltar} />
                </TouchableOpacity>
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
        paddingTop: 50,

    },
    header: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "flex-start",
    },
    options: {
        display: "flex",
        flexDirection: "row",
        width: "20%",
        justifyContent: "space-between"
    },
    icon: {
        width: 28,
        height: 28,
    },
    logo: {
        width: 150, 
        height: 30, 
        resizeMode: "contain",
    },
    voltar: {
        width: 30,
        height: 30,
        resizeMode: "contain", 
    }
});