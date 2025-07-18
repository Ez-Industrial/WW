//firebaseService.js
import { auth } from "./firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendEmailVerification } from "firebase/auth";
import { Alert } from "../core/native";

export const actionCodeSettings = { 
  url: "https://wash-wheels.web.app/",
  handleCodeInApp: true };
export const registerUser = async (email, password) => {
  try {
    if (!email.includes("@")) {
    throw new Error("Correo inválido");}
    const { user } = await createUserWithEmailAndPassword(auth, email, password);
    console.log("Usuario registrado", user.uid);
    await sendEmailVerification(user, actionCodeSettings);
    console.log("Email de verificación enviado a:", email);
    Alert.alert("¡Mail de verificación enviado! Revisa tu bandeja.");
    return user;}
     catch (error) {
     console.error("Error en registro:", error);
     throw error;}
};

export const loginUser = async (email, password) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    console.log("Inicio de sesión exitoso:", user.uid);
    if (!user.emailVerified) {
     await sendEmailVerification(user, actionCodeSettings);
     Alert.alert( "Correo no verificado", "Te hemos reenviado el correo de verificación. Por favor verifica tu cuenta antes de continuar.");
}

    return user;
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    throw error;
  }
};

export const cerrarSesion = async () => {
  try {
    await signOut(auth);
    console.log("Sesión cerrada exitosamente");
  } catch (error) {
    console.error("Error al cerrar sesión:", error);
    throw error;
  }
};