import { auth } from "./firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const navigate = useNavigate();

export const registrarUsuario = async (email, password) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    console.log("Usuario registrado");
  } catch (error) {
    console.error("Error en registro:", error);
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
    window.location.href = "/login"; // Redirigir a la página de inicio de sesión
  } catch (error) {
    console.error("Error al cerrar sesión:", error);
  }
};

const ingresarUsuario = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    console.log("Inicio de sesión exitoso");
    navigate("/perfil"); // Redirigir al perfil
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
  }
};

