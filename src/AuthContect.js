import { createContext, useEffect, useState } from "react";
import { getAuth } from "firebase/auth";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [rol, setRol] = useState(null);
  const auth = getAuth();

  useEffect(() => {
    if (auth.currentUser) {
      auth.currentUser.getIdTokenResult().then((idTokenResult) => {
        setRol(idTokenResult.claims.role);
      });
    }
  }, [auth.currentUser]);

  return (
    <AuthContext.Provider value={{ rol }}>
      {children}
    </AuthContext.Provider>
  );
};