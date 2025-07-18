import React from "react";
import { TouchableOpacity, Text } from "../core/native";
import { useNavigation } from "@react-navigation/native";

export default function BackButton({ label = "Volver", style = {} }) {
  const navigation = useNavigation();
// <BackButton label="← Regresar" style={{ marginBottom: 12 }} />
  return (
    <TouchableOpacity onPress={() => navigation.goBack()} style={style}>
      <Text style={{ color: "#007AFF", fontSize: 16 }}>{label}</Text>
    </TouchableOpacity>
  );
}