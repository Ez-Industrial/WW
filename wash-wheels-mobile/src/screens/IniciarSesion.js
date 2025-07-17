import { registerUser } from "../services/firebaseService";
import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from "react-native";
import styles from "../styles/screens/IniciarSesionStyles";
export function IniciarSesion () {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignup, setIsSignup] = useState(false);
  const navigate = useNavigate();
  const handleAuth = async () => {
    try {
      if (isSignup) {
        await registerUser(email, password);
        Alert.alert ("Registro exitososs", "Revisa tu correo para verificar la cuenta ") 
      } else{ await loginUser (email, password);} }
      catch (error) {
      Alert.alert ("Error iniciar sesión:", error);
      alert( error.code === "auth/user-not-found"
          ? "Usuario no encontrado"
          : error.message );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Wash Wheels</Text>

      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleAuth}>
        <Text style={styles.buttonText}>
          {isSignup ? "Registrarse" : "Iniciar Sesión"}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setIsSignup(!isSignup)}>
        <Text style={styles.link}>
          {isSignup
            ? "¿Ya tienes cuenta? Inicia sesión"
            : "¿No tienes cuenta? Regístrate"}
        </Text>
      </TouchableOpacity>
    </View>
  )
};