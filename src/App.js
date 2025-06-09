import React, { useState, useEffect } from "react";
import { db, collection, addDoc, getDocs } from "./firebase";
import App from "../src/App";

const App = () => {
    const [nombre, setNombre] = useState("");
    const [usuarios, setUsuarios] = useState([]);
    
    const guardarUsuario = async () => {
         try {
        const respuesta = await fetch("http://localhost:8081/usuarios", {
            method: "POST",
            headers: {    
                "Content-Type": "application/json"    
            },
            body: JSON.stringify({ nombre })
        });

        const data = await respuesta.json();

        if (respuesta.ok) {
            alert("✅ Usuario guardado con éxito!");
            obtenerUsuarios(); // Refrescar lista
        } else {
            console.error("❌ Error al guardar usuario:", data.error);
        }
    } catch (error) {
        console.error("❌ Error en la solicitud al backend:", error);
    }


    };

    const obtenerUsuarios = async () => {
    try {
        const respuesta = await fetch("http://localhost:8081/usuarios");
        const data = await respuesta.json();

        if (respuesta.ok) {
            setUsuarios(data);
        } else {
            console.error("❌ Error al obtener usuarios:", data.error);
        }
    } catch (error) {
        console.error("❌ Error en la solicitud al backend:", error);
    }
};

    useEffect(() => {
        obtenerUsuarios();
    }, []);

    return (
       <AuthProvider>  {/* Envolviendo toda la app con AuthProvider */}
            <div>
                <h1>Registro de Usuarios</h1>
                <input type="text" placeholder="Nombre" onChange={(e) => setNombre(e.target.value)} />
                <button onClick={guardarUsuario}>Guardar</button>
                
                <h2>Usuarios guardados:</h2>
                <ul>
                    {usuarios.map((user, index) => (
                        <li key={index}>{user.nombre}</li>
                    ))}
                </ul>
            </div>
        </AuthProvider>
    );
};


export default App;