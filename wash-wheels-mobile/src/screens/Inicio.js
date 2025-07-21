// src/screens/Inicio.js
import React from "react";
import { View, Text, TouchableOpacity, Alert,Pressable } from "../core/native";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../context/AuthContext";
import styles from "../styles/global";

export default function InicioScreen() {
  const navigation = useNavigation();
  const { user } = useAuth();
  const rol = user?.rol;
  console.log("ROL ACTUAL:", rol);
  const iraPrueba =() => navigation.navigate ("Prueba") ;
    const navegarComoCliente = () => navigation.navigate("Home");
  const navegarComoLavador = () => navigation.navigate("Home Lav");
  const pedirLogin = () => { 
  Alert.alert("Debes Iniciar Sesión o Registrarte");
  navigation.navigate("Registrar");
};
  const lavarauto = () => { 
    console.log("Botón presionado");
if (!user) return pedirLogin(); navegarComoCliente();
  };

  const lavador = () => {
    console.log("Botón presionado");
  if (!user) return pedirLogin();
  switch (rol) {
    case "cliente":
      Alert.alert("La opción 'Lavar auto' no está disponible para clientes.");
      break;
    case "lavador":
    case "admin":
      navegarComoLavador();
      break;
    default:
      Alert.alert("No tienes permisos para esta acción.");
  }
};

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Wash Wheels</Text>

      <Text style={styles.email}>
        Bienvenido{user?.name ? `, ${user.name}` : ""}!
      </Text>
      <Text style={styles.email}>{user?.email}</Text>
      <TouchableOpacity style={styles.button} onPress={iraPrueba}>
        <Text style={styles.buttonText}>Prueba</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={lavarauto}>
        <Text style={styles.buttonText}>Solicitar Lavado</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={lavador}>
        <Text style={styles.buttonText}>Ser Lavador</Text>
      </TouchableOpacity>

    </View>
  );
}