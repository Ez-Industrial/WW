import React from "react";
import { TouchableOpacity, Image } from "../core/native";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../context/AuthContext";

export default function PerfilButton() {
  const navigation = useNavigation();
  const { user } = useAuth();
  const foto = user?.photoURL
  ? { uri: user.photoURL }
  : require("../assets/sin-foto.png");
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Perfil")}>
      <Image source={ foto } style={{ width: 32, height: 32, borderRadius: 16, marginRight: 12 }} />
    </TouchableOpacity>
  );
}