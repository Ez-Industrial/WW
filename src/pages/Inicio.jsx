import { useNavigate } from "react-router-dom";
function Inicio (){
  const navigate = useNavigate();
  const lavarauto = () => {
    navigate("/home");
  };
  const lavador = () => {
    navigate("/homelav");
  };
  return (
    <div className="contenedor-centro">
      <h1>Wash Wheels</h1>
      <p>Ingresa tus datos para continuar.</p>
      <div className= "registro-contenedor">
      <button onClick={lavarauto}>Solicitar Lavar Auto</button>
      </div>
      <div className= "registro-contenedor">
      <button onClick={lavador}>Ser Lavador</button>
      </div>  
    </div>
    
  );
}
export default Inicio;
