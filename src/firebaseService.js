//firebaseService.jsaa
import { auth } from "./config/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, getAuth, sendEmailVerification } from "firebase/auth";

export const actionCodeSettings = { 
  url: "https://wash-wheels.web.app/",
  handleCodeInApp: true };
export const registrarUsuario = async (email, password) => {
  try {
    const { user } = await createUserWithEmailAndPassword(auth, email, password);
    console.log("Usuario registrado", user.uid);
    await sendEmailVerification(user, actionCodeSettings);
    console.log("Email de verificación enviado a:", email);
    alert("¡Mail de verificación enviado! Revisa tu bandeja.");
    return user;}
     catch (error) {
     console.error("Error en registro:", error);
     throw error;}
};

export const ingresarUsuario = async (email, password) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    console.log("Inicio de sesión exitoso:", user.uid);
    if (!user.emailVerified) {
      await sendEmailVerification(user, actionCodeSettings);
      console.log("Reenviando email de verificación a:", email);
      alert("Te hemos reenviado el correo de verificación");
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