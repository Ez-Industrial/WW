// src/styles/ButtonStyles.js
import { StyleSheet } from "react-native";

export const getButtonStyles = (disabled) =>
  StyleSheet.create({
    button: {
      backgroundColor: disabled ? "#ccc" : "#007AFF",
      padding: 14,
      borderRadius: 6
    },
    text: {
      color: "#fff",
      textAlign: "center"
    }
  });