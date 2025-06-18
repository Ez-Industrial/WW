import { auth } from "./firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, } from "firebase/auth";
import { getAuth, getIdTokenResult } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase"; // Tu configuración de Firestore

export async function getUserClaims() {
  const auth = getAuth();
  const user = auth.currentUser;
  
  // Verifica que exista un usuario autenticado
  if (!user) {
    console.warn("No hay usuario autenticado.");
    return null;
  }
  
  try {
    const tokenResult = await getIdTokenResult(user);
    // Devuelve los custom claims, por ejemplo: tokenResult.claims
    // Si asignaste el rol en 'customRole', lo encontrarás en tokenResult.claims.customRole
    return tokenResult.claims;
  } catch (error) {
    console.error("Error obteniendo custom claims:", error);
    return null;
  }
}

export const registrarUsuario = async (email, password) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    console.log("Usuario registrado");
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      console.error("El correo ya está en uso:", error);
      window.location.href = "/";
    } else {
      console.error("Error en registro:", error);
    }
  }
};
export const ingresarUsuario = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    console.log("Inicio de sesión exitoso");
    window.location.href = "/perfil"; // Redirección tras login
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
  }
};
export const verificarSesion = (callback) => {
  onAuthStateChanged(auth, (user) => {
    callback(user);
  });
};
export const cerrarSesion = async () => {
  try {
    await signOut(auth);
    console.log("Sesión cerrada exitosamente");
    window.location.href = "/"; // Redirigir a la página de inicio de sesión
  } catch (error) {
    console.error("Error al cerrar sesión:", error);
  }
};

