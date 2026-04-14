import { Text, View, TextInput, TouchableOpacity, Alert, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParam } from "../types/navigation";
import { useState } from "react";
import { MESSAGES } from "../constants/constants";

type NavigationProp = NativeStackNavigationProp<RootStackParam>;

export default function AuthScreen(){
    const navigation = useNavigation<NavigationProp>();

    const [nome, setNome] = useState("");
    const [password, setPassword] = useState("");

    const validar = () =>{
        if(nome.trim() == "") return Alert.alert(MESSAGES.NOME_VAZIO);

        if(password.trim() == "") return Alert.alert(MESSAGES.SENHA_VAZIA);

        if(password.length < 3) return Alert.alert(MESSAGES.SENHA_FRACA);

        Alert.alert("Usuário criado!");
        navigation.navigate('HomeScreen');
    }
    return(
        <View style={styles.container}>
            <Text style={styles.title}>AutScreen</Text>

            <TextInput 
            placeholder="Digite seu nome"
            onChangeText={setNome}
            style={styles.input}
            placeholderTextColor="#9CA3AF"
            />
            <TextInput 
            placeholder="Digite sua senha"
            onChangeText={setPassword}
            style={styles.input}
            placeholderTextColor="#9CA3AF"
            secureTextEntry
            />

            <TouchableOpacity
            onPress={validar}
            style={styles.button}
            >
                <Text style={styles.buttonText}>Enviar Form</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F9FAFB",
        justifyContent: "center",
        paddingHorizontal: 28,
        gap: 16,
    },
    title: {
        fontSize: 28,
        fontWeight: "700",
        color: "#111827",
        marginBottom: 8,
        textAlign: "center",
    },
    input: {
        backgroundColor: "#FFFFFF",
        borderWidth: 1,
        borderColor: "#D1D5DB",
        borderRadius: 12,
        paddingVertical: 14,
        paddingHorizontal: 16,
        fontSize: 15,
        color: "#111827",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 1,
    },
    button: {
        backgroundColor: "#4F46E5",
        borderRadius: 12,
        paddingVertical: 16,
        alignItems: "center",
        marginTop: 8,
        shadowColor: "#4F46E5",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 4,
    },
    buttonText: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "600",
        letterSpacing: 0.3,
    },
});