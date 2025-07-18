// src/styles/globals.js
import { StyleSheet } from "../core/native"

export const colors = { primary: "#0868cfff", danger: "#FF3B30", gray: "#ccc", background: "#fff", text: "#333" };

export const spacing = { xs: 4, sm: 8, md: 16, lg: 24, xl: 32 };

export const fonts = {
  title: { fontSize: 32, fontWeight: "bold"},
  body: { fontSize: 16 } };

export default StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20, backgroundColor: "#fff", alignItems: "center" },
  title: { fontSize: 32, textAlign: "center", marginBottom: 24, color: "#274bb1ff" },
  input: { height: 30, borderColor: "#ccc", borderWidth: 1, borderRadius: 3, paddingHorizontal: 20, 
            color:"#274bb1ff" , marginBottom: 16 },
  button: { backgroundColor: "#274bb1ff", paddingVertical: 10, paddingHorizontal: 20, borderRadius: 4,marginBottom: 9 },
  buttonText: { color: "#fff", textAlign: "center", fontSize: 16 },
  link: { color: "#274bb1ff", textAlign: "center", marginTop: 8},
  welcome: { fontSize: 28, marginBottom: 8 },
  email: { fontSize: 16, color: "#666", marginBottom: 24},
  subtitle: { fontSize: 20, fontWeight: "600", color: "#666", marginBottom: 8, },
  linkText: { fontSize: 16, color: "#007AFF", textDecorationLine: "underline", },
  muted: { fontSize: 14, color: "#999",},
  textBase: { fontSize: 16, color: "#333", lineHeight: 24, fontFamily: "System", marginBottom: 8,},
});