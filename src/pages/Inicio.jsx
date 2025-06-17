import { registrarUsuario, loginCorreo, logout } from "./firebaseService";
function Inicio (){
      <Router>
      <Routes>
        <Route path="/inicio" element={<Home />} />
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
}
export default Inicio;
