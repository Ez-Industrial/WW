import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="contenedor-centro">
      <h1>Wash Wheels</h1>
      <p>Ingresa tus datos para continuar.</p>
      <div className= "registro-contenedor">
      <Link to="/registrar" className="link-registro">¿No tienes cuenta? Regístrate aquí</Link>
      </div>  
    </div>
    
  );
}

export default Home;