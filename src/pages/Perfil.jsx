import React, { useEffect, useState } from "react";
import { getUserClaims } from "../firebaseService";
import { getAuth } from "firebase/auth";
import BotonCerrarSesion from "../BotonCerrarSesion";
function Perfil (){
  const [claims, setClaims] = useState(null);
  const auth = getAuth();
  const user = auth.currentUser;

  useEffect(() => {
    async function fetchClaims() {
      const result = await getUserClaims();
      setClaims(result);
    }
    
    // Llama a la función si existe algún usuario autenticado
    if (user) {
      fetchClaims();
    }
  }, [user]);

  if (!user) {
    return <p>No hay usuario autenticado.</p>;
  }

  if (!claims) {
    return <p>Cargando información del usuario...</p>;
  }

  return (
    <div className= "contenedor-centro">
      <h2>Perfil del Usuario</h2>
      <p>
        <strong>Correo:</strong> {user.email}
      </p>
      <p>
        <strong>Rol:</strong> {claims.customRole ? claims.customRole : "Sin rol asignado"}
      </p>
          <div style={{ textAlign: "center" }}>
      <BotonCerrarSesion />
    </div>
    </div>

  );
}

export default Perfil;