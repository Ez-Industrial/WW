// src/screens/TestScreen.js
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function TestScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Pantalla de prueba</Text>
      <TouchableOpacity
        style={{
          backgroundColor: "#0868cf",
          padding: 16,
          borderRadius: 8
        }}
        onPress={() => console.log("Botón funciona")}
      >
        <Text style={{ color: "#fff", fontSize: 18 }}>Presiona aquí</Text>
      </TouchableOpacity>
    </View>
  );
}