import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "../core/native";
import { registerUserWithProfile } from "../services/firebaseService";
import styles from "../styles/global";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export default function Registrarse() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();

  const handleSignup = async () => {
    if (!email || !password || !username || !displayName) {
      return Alert.alert("Completa todos los campos");
    }
    try {
      await registerUserWithProfile({ email, password, username, displayName });
      Alert.alert("Registro exitoso", "Verifica tu correo y luego inicia sesión");
      navigation.goBack();
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Regístrate</Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
        placeholderTextColor="#b0b6abff"
      />

      <TextInput
        style={styles.input}
        placeholder="Nombre a mostrar"
        value={displayName}
        onChangeText={setDisplayName}
        placeholderTextColor="#b0b6abff"
      />
         <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        placeholderTextColor="#b0b6abff"
      />
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TextInput
          style={[styles.input, { flex: 1 }]}
          placeholder="Contraseña"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
          placeholderTextColor="#b0b6abff"
        />
        <TouchableOpacity onPress={() => setShowPassword((s) => !s)} style={{ padding: 8 }}>
          <Ionicons name={showPassword ? "eye-off" : "eye"} size={24} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Registrarse</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.link}>¿Ya tienes cuenta? Inicia sesión</Text>
      </TouchableOpacity>
    </View>
  );
}