import { useNavigate } from "react-router-dom";
import React from "react";
import { useAuth } from "../AuthContext";
function Prueba (){
  const { user } = useAuth();
  if (!user) {
    return <p>No hay usuario autenticado</p>;
  }
  const navigate = useNavigate();
  const lavarauto = () => {
    navigate("/home");
  };
  const lavador = () => {
    navigate("/homelav");
  };
  const sobre = () => {
    navigate("/about");
  };
  const inicio = () => {
    navigate("/");
  };
  const registrar = () => {
    navigate("/registrar");
  };
  const perfil = () => {
    navigate("/perfil");
  };
  const iniciosesion = () => {
    navigate("/iniciar-sesion");
  }
  return (
    
    <div className="contenedor-centro">
      <h2>Perfil del Usuario</h2>
      <p><strong>Correo:</strong> {user.email}</p>
      <p>
        <strong>Rol:</strong> {user.customRole ? user.customRole : "Rol no asignado"}
      </p>
      <h1>Prueba</h1>
      <div className= "datos">
      <button onClick={lavarauto}>Ir a Home Cliente</button>
      <button onClick={lavador}>Ir a Home Lavador</button>
      <button onClick={sobre}>Ir a Sobre</button>
      <button onClick={inicio}>Ir a Inicio</button>
      <button onClick={registrar}>Ir a Registrar</button>
      <button onClick={perfil}>Ir a Perfil</button>
      <button onClick={iniciosesion}>Ir a Iniciar Sesión</button>
      </div>  
    </div>
    
  );
}
export default Prueba;
