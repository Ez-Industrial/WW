// src/lavpages/Homelav.jsx
import React, { useEffect, useRef, useState } from 'react';
import Mapa from '../pages/mapa';

export default function Homelav() {
  const [userPos, setUserPos] = useState([20.7, -103.3]);

  useEffect(() => {
    const watcher = navigator.geolocation.watchPosition(
      ({ coords }) =>
        setUserPos([coords.latitude, coords.longitude]),
      err => {
    console.error('Error obteniendo ubicación:', err);
    alert('No se pudo obtener tu ubicación automáticamente.');
  },

      { enableHighAccuracy: true, maximumAge: 5000 }
    );
   return () => navigator.geolocation.clearWatch(watcher);
  }, []);

   return (
    <div className="home-wrapper">
              <Mapa userPos={userPos} />
      <div className="info-below">
        <h2>Detalles de lavadores</h2>
        <p>Aquí puedes poner filtros, lista de lavadores, aaaaaaaaaaaaaaaaaaaaaaaaa</p>
      </div>
        <p>Aquí puedes poner filtros, lista de lavadores, aaaaaaaaaaaaaaaaaaaaaaaaa</p>
        <p>Aquí puedes poner filtros, lista de lavadores, aaaaaaaaaaaaaaaaaaaaaaaaa</p>
        <p>Aquí puedes poner filtros, lista de lavadores, aaaaaaaaaaaaaaaaaaaaaaaaa</p>
    </div>
  );
}


