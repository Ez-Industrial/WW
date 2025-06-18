import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Iniciar Sesión</h1>
      <Link to="/register">¿No tienes cuenta? Regístrate aquí</Link>
    </div>
  );
}

export default Home;