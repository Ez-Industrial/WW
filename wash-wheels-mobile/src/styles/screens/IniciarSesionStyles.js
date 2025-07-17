// src/screens/styles/IniciarSesionStyles.js
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 32,
    textAlign: "center",
    marginBottom: 24
  },
  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 12,
    marginBottom: 16
  },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 14,
    borderRadius: 6,
    marginBottom: 12
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16
  },
  link: {
    color: "#007AFF",
    textAlign: "center",
    marginTop: 8
  }
});