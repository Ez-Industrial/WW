import React, { useEffect, useState } from "react";
import BotonCerrarSesion from "../BotonCerrarSesion";
import axios from "axios";
import { useAuth } from "../AuthContext"
function Perfil (){
  const { user } = useAuth();
  const [profile, setProfile] = useState(null);    
  useEffect(() => {
     if (!user) return;
  axios
    .get(`https://washwheels.vercel.app/api/usuarios/${user.uid}`)
    .then(({ data }) => {
      console.log("🎯 perfil data:", data);
      setProfile(data);
    })
    .catch(console.error);
}, [user]);

  if (!user)    return <p className="contenedor-centro"> No hay usuario autenticado. </p>;
  if (!profile) return <p className="contenedor-centro">Cargando información del usuario…</p>;

  return (
    <div className= "contenedor-centro">
      <h2>Perfil del Usuario</h2>
      <p>  <strong>Correo:</strong> {profile.email}  </p>
      <p>  <strong>Rol:</strong> {profile.rol || "Sin rol asignado"}  </p>
          <div style={{ textAlign: "center" }}>
      <BotonCerrarSesion />
    </div>
    </div>
  );
}

export default Perfil;