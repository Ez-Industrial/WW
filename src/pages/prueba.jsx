import { useNavigate } from "react-router-dom";
function Prueba (){
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
  return (
    <div className="contenedor-centro">
      <h1>Prueba</h1>
      <div className= "datos">
      <button onClick={lavarauto}>Ir a Home Cliente</button>
      <button onClick={lavador}>Ir a Home Lavador</button>
      <button onClick={sobre}>Ir a Sobre</button>
      <button onClick={inicio}>Ir a Inicio</button>
      <button onClick={registrar}>Ir a Registrar</button>
      <button onClick={perfil}>Ir a Perfil</button>
      </div>  
    </div>
    
  );
}
export default Prueba;
