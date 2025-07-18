import React from "react";
import { View, Text, Image } from "../core/native";
import { useAuth } from "../context/AuthContext";
import styles from "../styles/global";

export default function PerfilScreen() {
  const { user } = useAuth();
  const foto = user?.photoURL
  ? { uri: user.photoURL }
  : require("../assets/sin-foto.png");
  return (
    <View style={styles.container}>
      <Image source={foto}  style={{ width: 100, height: 100, borderRadius: 50, marginBottom: 16 }}/>
      <Text style={styles.title}>{user?.name ?? "Nombre no disponible"}</Text>
      <Text style={styles.email}>{user?.email}</Text>
      <Text style={styles.muted}>Rol: {user?.rol ?? "Sin rol"}</Text>
    </View>
  );
}