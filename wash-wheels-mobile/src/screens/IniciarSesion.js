//IniciarSesion.js
import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "../core/native";
import { loginUser } from "../services/firebaseService";
import styles from "../styles/global";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);
  const handleLogin = async () => {
    if (!email || !password) {
      return Alert.alert("Por favor ingresa correo y contraseña");}
    try {
      await loginUser(email, password);
      navigation.reset({ index: 0, routes: [{ name: "Inicio" }] });
    } catch (error) {
      let msg = error.message;
      if (error.code === "auth/user-not-found") msg = "Usuario no encontrado";
      else if (error.code === "auth/wrong-password") msg = "Contraseña incorrecta";
      Alert.alert("Error", msg); } };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Wash Whels</Text>
      <TextInput style={styles.input} placeholder="Correo electrónico" value={email} onChangeText={setEmail} keyboardType="email-address"
        autoCapitalize="none"placeholderTextColor="#b0b6abff" />
      <View style={styles.passwordContainer}>
        <TextInput style={styles.passwordInput} placeholder="Contraseña" value={password} onChangeText={setPassword} secureTextEntry={!showPassword} placeholderTextColor="#b0b6abff"/>
        <TouchableOpacity onPress={() => setShowPassword((s) => !s)} style={{ padding: 8 }}>
          <Ionicons name={showPassword ? "eye-off" : "eye"} size={20} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Iniciar Sesón</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Registrar")}>
        <Text style={styles.link}>¿No tienes cuenta? Regístrate</Text>
      </TouchableOpacity>
    </View>
  );
}