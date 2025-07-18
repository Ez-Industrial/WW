// src/styles/globals.js
import { StyleSheet } from "../core/native"

export const colors = { primary: "#0868cfff", danger: "#FF3B30", gray: "#ccc", background: "#fff", text: "#333" };

export const spacing = { xs: 4, sm: 8, md: 16, lg: 24, xl: 32 };

export const fonts = {
  title: { fontSize: 32, fontWeight: "bold"},
  body: { fontSize: 16 } };

export default StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20, backgroundColor: "#fff", alignItems: "center" },
  title: { fontSize: 32, textAlign: "center", marginBottom: 24, color: "#df0f66ff" },
  input: { height: 50, borderColor: "#ccc", borderWidth: 1, borderRadius: 6, paddingHorizontal: 12, marginBottom: 16 },
  button: { backgroundColor: "#274bb1ff", paddingVertical: 14, paddingHorizontal: 32, borderRadius: 4, marginBottom: 12 },
  buttonText: { color: "#fff", textAlign: "center", fontSize: 16 },
  link: { color: "#007AFF", textAlign: "center", marginTop: 8},
  welcome: { fontSize: 28, marginBottom: 8 },
  email: { fontSize: 16, color: "#666", marginBottom: 24},
});