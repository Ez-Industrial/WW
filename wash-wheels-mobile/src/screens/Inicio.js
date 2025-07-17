// src/screens/InicioScreen.js
import React from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../context/AuthContext";
import styles from "../styles/screens/HomeStyle";

export default function Inicio() {
  const navigation = useNavigation();
  const { user } = useAuth();
  const rol = user?.rol;

  console.log("ROL ACTUAL:", rol);

  const lavarauto = () => {
    if (!user) {
      Alert.alert("Debes Iniciar Sesión o Registrarte");
      navigation.navigate("Login");
    } else {
      navigation.navigate("Home");
    }
  };

  const lavador = () => {
    if (!user) {
      Alert.alert("Debes Iniciar Sesión o Registrarte");
      navigation.navigate("Login");
    } else {
      if (rol === "cliente") {
        Alert.alert("La opción 'Lavar auto' no está disponible para clientes.");
      } else if (rol === "lavador" || rol === "admin") {
        navigation.navigate("HomeLav");
      } else {
        Alert.alert("No tienes permisos para esta acción.");
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Wash Wheels</Text>

      <Text style={styles.email}>
        Bienvenido{user?.name ? `, ${user.name}` : ""}!
      </Text>

      <Text style={styles.email}>{user?.email}</Text>

      <TouchableOpacity style={styles.button} onPress={lavarauto}>
        <Text style={styles.buttonText}>Solicitar Lavado</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={lavador}>
        <Text style={styles.buttonText}>Ser Lavador</Text>
      </TouchableOpacity>
    </View>
  );
}