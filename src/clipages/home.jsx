import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const perfil = () => {
    navigate("/perfil");
  };
  return (
    <div className="contenedor-centro">
      <h1>Wash Wheels</h1>
      <h2>Inicio para solicitar lavado</h2>
      <button onClick={perfil}>Ir a Perfil</button>
    </div>
    
  );
}

export default Home;