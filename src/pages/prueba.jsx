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
  const iniciosesion = () => {
    navigate("/iniciarsesion");
  }
  const usuariorol = () => {
    navigate("/usuariorol");
  }
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
       <button onClick={iniciosesion}>Ir a Iniciar Sesión</button>
       <button onClick={usuariorol}>Ir a Roles de Usuario</button> 
      </div>
   <p className="robototexto4"> Este párrafo tiene la tipografía F4 personalizada. </p>
   <p className="robototexto7"> Este párrafo tiene la tipografía F7 personalizada. </p>

  </div>

  );
}
export default Prueba;
