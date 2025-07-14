import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "./config/firebase";

function BotonCerrarSesion() {
  const navigate = useNavigate();

  const handleCerrarSesion = () => {
    signOut(auth)
      .then(() => {
        console.log("Sesión cerrada correctamente.");
        // Redirige al usuario a la página de inicio o login tras cerrar sesión
        navigate("/");
      })
      .catch((error) => {
        console.error("Error al cerrar sesión:", error);
      });
  };

  return (
    <button onClick={handleCerrarSesion}>
      Cerrar Sesión
    </button>
  );
}

export default BotonCerrarSesion;