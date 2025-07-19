import React from "react";
import { View, Text, Image, TouchableOpacity } from "../core/native";
import { useAuth } from "../context/AuthContext";
import styles from "../styles/global";
import { cerrarSesion } from "../services/firebaseService";
import { useNavigation } from "@react-navigation/native";
import auth from "../services/firebase"
export default function PerfilScreen() {
  const { user } = useAuth();
    const navigation = useNavigation();
const foto = user?.photoURL
  ? { uri: user.photoURL }
  : require("../assets/sin-foto.png");
  const handleSignOut = async () => {
    try {
      await cerrarSesion(auth);
      navigation.reset({
        index: 0,
        routes: [{ name: "Login" }]
      });
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }};

  return (
    <View style={styles.container}>
      <Image source={foto}  style={{ width: 100, height: 100, borderRadius: 50, marginBottom: 16 }}/>
      <Text style={styles.title}>{user?.name ?? "Nombre no disponible"}</Text>
      <Text style={styles.email}>{user?.email}</Text>
      <Text style={styles.muted}>Rol: {user?.rol ?? "Sin rol"}</Text>
      <TouchableOpacity style={styles.button} onPress={handleSignOut}>
        <Text style={styles.buttonText}>Cerrar sesión</Text>
      </TouchableOpacity>
    </View>
  );
}