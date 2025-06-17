import { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home';
import { registrarUsuario, loginCorreo, logout } from "./firebaseService";
import { getAuth, onAuthStateChanged } from "firebase/auth";


function App() {
  const [datos, setDatos] = useState([]); 
  const [mensaje, setMensaje] = useState("");
  const [usuario, setUsuario] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth();

  async function obtenerMensajes() {
  if (!usuario) return;

  try {
    const response = await fetch(`https://washwheels.vercel.app/mensajes/${usuario.uid}`);
    const data = await response.json();
    console.log("Mensajes filtrados del usuario:", data);
    setDatos(Array.isArray(data) ? data : []);
  } catch (error) {
    console.error("Error obteniendo mensajes:", error);
    setDatos([]);
  }


async function obtenerIdToken() {
  if (!auth.currentUser) {
    console.error("⚠️ No hay usuario autenticado.");
    return;
  }
  const token = await auth.currentUser.getIdToken();
  console.log("🔑 ID Token obtenido:", token);



  // Esto es tu ID token: un string largo tipo “eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9…”
  const idToken = await user.getIdToken();
  console.log("Mi ID token:", idToken);
}
}

async function fetchProfile() {
  const user = auth.currentUser;
  if (!user) throw new Error("No estás logueado");
  const token = await user.getIdToken();
  const res = await fetch("https://washwheels.vercel.app/profile", {
    headers: { Authorization: `Bearer ${token}` }
  });
  const profile = await res.json();
console.log(profile); // { uid: "abc123", email: "x@x.com", role: "admin" }
  const data = await res.json();
  console.log("Mi perfil:", data);
}
  
useEffect(() => {
  console.log("Ejecutando solicitud al backend...");
  
onAuthStateChanged(auth, (user) => {
  if (user) {
    setUsuario(user);
    console.log("Usuario autenticado tras recarga:", user.email);
   obtenerIdToken(); 

    // Creamos una función async dentro del callback
    (async () => {
      try {
        const token = await user.getIdToken();
        console.log("🔑 ID Token obtenido:", token);

        // Llamamos a /profile con Authorization
        const res = await fetch("https://washwheels.vercel.app/profile", {
          headers: { Authorization: `Bearer ${token}` }
        });
        const profile = await res.json();
        console.log("Perfil cargado:", profile);

        obtenerMensajes(); // Cargar mensajes del usuario al recargar la página
      } catch (error) {
        console.error("⚠️ Error al obtener el perfil:", error);
      }
    })(); // Se ejecuta inmediatamente
  } else {
    setUsuario(null);
  }
});

auth.currentUser?.getIdToken().then(token => {
    fetch("https://washwheels.vercel.app/profile", {
      headers: { 
        "Authorization": `Bearer ${token}` 
      }
    })
    .then(res => res.json())
    .then(data => console.log("Mi perfil:", data))
    .catch(console.error);
  });
  
  obtenerMensajes();
  }, []);
 
  const enviarDatos = async () => {
  if (!usuario) {
    console.error("Usuario no autenticado.");
    return;
  }

  try {
    const response = await fetch("https://washwheels.vercel.app/api/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ mensaje, uid: usuario.uid }) // ✅ Enviar el UID correctamente
    });

    const data = await response.json();
    console.log("Mensaje guardado:", data);
    obtenerMensajes(); // 🔄 Recargar mensajes después de enviar uno nuevo
  } catch (error) {
    console.error("Error al enviar datos:", error);
  }
};

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
        <h1>Autenticación con Firebase</h1>
    
          {usuario ? (
        <div>
          <p>Bienvenido, {usuario.email}!</p>
          <button onClick={() => { logout(); setUsuario(null); }}>Cerrar sesión</button>
        </div>
      ) : (
        <div>
          <input type="email" placeholder="Correo electrónico" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button onClick={async () => setUsuario(await registrarUsuario(email, password))}>Registrarse</button>
          <button onClick={async () => setUsuario(await loginCorreo(email, password))}>Iniciar sesión</button>
        </div>
      )}
      
       {/* Formulario para enviar datos al backend */}
      <div>
        <h2>Enviar datos al backend</h2>
        <input
          type="text"
          placeholder="Escribe un mensaje"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
        />
        <button onClick={enviarDatos}>Enviar</button>
      </div>

      <h2>Historial de mensajes</h2>
      <ul>
        {Array.isArray(datos) && datos.length > 0 ? (
          datos.map((item, index) => <li key={index}>{item.mensaje}</li>)
        ) : (
          <p>No hay mensajes aún.</p>
        )}
      </ul>
    </Router>
  );
}

export default App;