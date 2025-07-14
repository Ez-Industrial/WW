import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";
function Inicio (){
  const navigate = useNavigate();
  const { user } = useAuth();
  const rol = user?.rol;
  console.log("ROL ACTUAL:", rol);
  
  const lavarauto = () => {
        if (!user){
        alert("Debes Iniciar Sesión o Registrarte")
        navigate("/registrar");
        } else {
        navigate("/home");
        }
  };
  const lavador = () => {
        if (!user) {
        alert("Debes Iniciar Sesión o Registrarte")
        navigate("/registrar");
        }else {
      if (rol === "cliente") {
        alert("La opción 'Lavar auto' no está disponible para clientes.");
      } else if (rol === "lavador" || rol === "admin") {
        navigate("/homelav");
      } else {
        alert("No tienes permisos para esta acción.");
      }
    }
  };

  return (
    <div className="contenedor-centro">
      <h1>Wash Wheels</h1>
      <p>Ingresa tus datos para continuar.</p>
      <div className= "datos">
      <button onClick={lavarauto}>Solicitar Lavar Auto</button>
      <button onClick={lavador}>Ser Lavador</button>
      </div>  
    </div>
    
  );
}
export default Inicio;
