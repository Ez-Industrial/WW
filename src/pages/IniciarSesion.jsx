import { useNavigate } from "react-router-dom";
import { ingresarUsuario } from "../firebaseService";
import { useState } from "react";

function IniciarSesion () {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const handleLogin = (e) => {
    e.preventDefault();
    ingresarUsuario(email, password);
  };

  return (
    <div className="contenedor-centro">
      <h1>Iniciar sesión</h1>
      <form onSubmit={handleLogin} className="formulario">
        <input type="email" placeholder="Correo" value={email} onChange={(e) => setEmail(e.target.value)} required className="input"/>
        <div className="password-container">
          <input type={showPassword ? 'text' : 'password'} placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required className="input" />
          <span className="toggle-password" onClick={() => setShowPassword(!showPassword)} > {showPassword ? '🙈' : '👁️'} </span>
        </div>
        <button type="submit" className="button">
          Iniciar sesión
        </button>
      </form>
      <div className= "contenedor-centro">
      <p>¿No tienes una cuaenta? <a href="/registrar">Registrarse</a></p>
    </div>
    </div>
  );
};

export default IniciarSesion;