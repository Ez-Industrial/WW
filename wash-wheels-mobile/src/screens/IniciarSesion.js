//IniciarSesion.js
import { registerUser, loginUser } from "../services/firebaseService";
import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "../core/native";
import styles from "../styles/global";
import { useNavigation } from "@react-navigation/native";

export default function IniciarSesion () {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignup, setIsSignup] = useState(false);
  const navigation = useNavigation();
  const handleAuth = async () => {
    if (!email || !password) {
      Alert.alert("Por favor ingresa correo y contraseña");
      return; }
    try {
      if (isSignup) {
        await registerUser(email, password);
        Alert.alert ("Registro exitososs", "Revisa tu correo para verificar la cuenta ") 
      } else{ await loginUser (email, password);
        navigation.reset({ index: 0, routes: [{ name: "Inicio" }]});
      } }
      catch (error) {
      let mensaje = "Ocurrió un error";
      if (error.code === "auth/user-not-found") {
        mensaje = "Usuario no encontrado";
      } else if (error.code === "auth/wrong-password") {
        mensaje = "Contraseña incorrecta";
      } else {
        mensaje = error.message;
      }
      Alert.alert("Error", mensaje);
    }
  };


  return (
   <View style={styles.container}>
    <Text style={styles.title}>Wash Wheels</Text>

    <TextInput style={styles.input}
      placeholder="Correo electrónico" keyboardType="email-address" autoCapitalize="none" value={email} onChangeText={setEmail} />
    <TextInput style={styles.input}
      placeholder="Contraseña" secureTextEntry value={password} onChangeText={setPassword} />
     
    <TouchableOpacity style={styles.button} onPress={handleAuth}>
      <Text style={styles.buttonText}>
       {isSignup ? "Registrarse" : "Iniciar Sesión"} </Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => setIsSignup(!isSignup)}>
      <Text style={styles.link}>
          {isSignup ? "¿Ya tienes cuenta? Inicia sesión" : "¿No tienes cuenta? Regístrate"}</Text>
    </TouchableOpacity>
   </View>
  )
};