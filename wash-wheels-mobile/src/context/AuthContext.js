// AuthContext.js
import { createContext, useContext, useState, useEffect } from "react";
import { onAuthStateChanged }                           from "firebase/auth"; 
import { auth, db, doc, getDoc } from "../services/firebase"
const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async fbUser => {
      if (!fbUser) {
        setUser(null);
        return;
      }
      if (!fbUser.emailVerified) {
        setUser(null);
        return;
      }

      const ref  = doc(db, "usuarios", fbUser.uid);
      const snap = await getDoc(ref);
      const data = snap.exists() ? snap.data() : {};

      setUser({
        uid:   fbUser.uid,
        email: fbUser.email,
        name:  fbUser.displayName,
        emailVerified:  fbUser.emailVerified,
        rol:   data.rol ?? null
      });
    });
    return () => unsub();
  }, [auth, db]);

  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  );
};
