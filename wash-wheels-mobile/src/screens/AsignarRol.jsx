// AsignarRol.jsx
import React, { useState } from "react";
import { getAuth } from "firebase/auth";
import axios from "axios";

function AsignarRol() {
  const [uid, setUid] = useState("");
  const [rol, setRol] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [claims, setClaims] = useState(null);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = getAuth().currentUser;
    if (!user) return setMensaje("No estás autenticado.");

    try {
      const token = await user.getIdToken();
      await axios.post("https://washwheels.vercel.app/api/roles/asignar-rol" ,
        { uid, rol },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
    await user.getIdToken(true);
    const result = await user.getIdTokenResult();  
    console.log("user recibido:", user);
console.log("typeof user.getIdToken:", typeof user.getIdToken);
    setClaims(result.claims);
      setMensaje(`✅ Rol "${rol}" asignado correctamente al usuario.`);
    } catch (error) {
      console.error("Error al asignar rol:", error);
      setMensaje("❌ Error al asignar rol.");
    }
  };

  return (
    <div className= "contenedor-centro">
      <h2>Asignar Rol a Usuario</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="UID del usuario"
          value={uid}
          onChange={(e) => setUid(e.target.value)}
          required
        /><br/><br/>
        <select value={rol} onChange={(e) => setRol(e.target.value)} required>
          <option value="">Seleccionar rol</option>
          <option value="cliente">cliente</option>
          <option value="lavador">lavador</option>
          <option value="admin">admin</option>
        </select><br/><br/>
        <button type="submit" disabled={!uid || !rol}>  Asignar Rol</button>
      </form>
      {mensaje && <p>{mensaje}</p>}
      {claims?.rol && (<p><strong>Rol actualizado:</strong> {claims.rol}</p>)}
    </div>
  );
}

export default AsignarRol;