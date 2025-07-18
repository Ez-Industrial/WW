// AuthContext.js
import { createContext, useContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db, doc, getDoc } from "../services/firebase";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // ✅ inicia como true

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async fbUser => {
      if (!fbUser || !fbUser.emailVerified) {
        setUser(null);
        setLoading(false);
        return;
      }

      try {
        const ref = doc(db, "usuarios", fbUser.uid);
        const snap = await getDoc(ref);
        const data = snap.exists() ? snap.data() : {};

        setUser({
          uid: fbUser.uid,
          email: fbUser.email,
          name: fbUser.displayName ?? "",
          emailVerified: fbUser.emailVerified,
          rol: data.rol ?? null,
          photoURL: fbUser.photoURL ?? null
        });
      } catch (error) {
        console.error("Error al obtener datos del usuario:", error);
        setUser(null);
      }

      setLoading(false);
    });

    return () => unsub();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

