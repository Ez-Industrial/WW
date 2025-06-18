// AuthContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase"; // Tu configuración de Firebase

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(""); // Ejemplo: "cliente", "lavador", "admin"

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      // Aquí puedes obtener e indicar el rol del usuario desde la base de datos o atributos
      // Por ejemplo:
      if (currentUser) {
        // Supón que currentUser tiene un campo customRole
        setRole(currentUser.customRole || "cliente");
      } else {
        setRole("");
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, role }}>
      {children}
    </AuthContext.Provider>
  );
};