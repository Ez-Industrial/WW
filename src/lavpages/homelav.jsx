import { useNavigate } from "react-router-dom";

function Homelav() {
  const navigate = useNavigate();

  return (
    <div className="contenedor-centro">
      <h1>Wash Wheels</h1>
      <h2>Inicio para ser lavador</h2>
    </div>
    
  );
}

export default Homelav;