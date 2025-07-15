// src/pages/SolicitudForm.jsx
import React, { use, useEffect, useRef, useState } from 'react';
import { db } from '../config/firebase';
import { collection, addDoc, serverTimestamp,Timestamp } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css'
export default function SolicitudForm() {
  const [coords, setCoords] = useState({ lat: 19.5438, lng: -96.9106 });
  const [carModel, setCarModel] = useState('');
  const [notes, setNotes] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [serviceType, setServiceType]   = useState('basico');
  const [preferredDate, setPreferredDate] = useState('');
  const [marca, setMarca]     = useState('');
  const [modelo, setModelo]   = useState('');
  const [color, setColor]     = useState('');
  const [customColor, setCustomColor] = useState('');
  const [customCarModel, setCustomCarModel] = useState('');
  const [clientId, setClientId] = useState(null);
  const [clientName, setClientName] = useState('');
  const mapContainerRef =useRef(null);
  const mapRef = useRef(null);
  const markerRef = useRef(null);

  const finalCarModel =
  marca === 'Otro'
    ? customCarModel
    : modelo === 'Otro'
      ? customCarModel
      : carModel;

  const marcasYModelos = {
  Toyota: ["Corolla", "Camry", "Yaris", "Hilux"],
  Nissan: ["Sentra", "Altima", "Versa", "X-Trail"],
  Ford: ["Fiesta", "Focus", "Explorer", "Mustang"],
  Chevrolet: ["Aveo", "Cruze", "Spark", "Trax"],
  Honda: ["Civic", "Accord", "Fit", "CR-V"],
  };

  const colores = [ "Blanco", "Negro", "Gris", "Rojo", "Azul",
  "Verde", "Amarillo", "Plateado", "Dorado", "Otro"];

  useEffect(() => 
  { if (!mapContainerRef.current) return
    mapRef.current = L.map(mapContainerRef.current,{ center:[coords.lat, coords.lng], zoom:13, scrollWheelZoom: false });
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
     .addTo(mapRef.current)

   mapRef.current.on('click', e=> {  const { lat, lng } = e.latlng
    setCoords({ lat, lng })
    if (markerRef.current) { markerRef.current.setLatLng(e.latlng); } 
    else { markerRef.current = L.marker(e.latlng, {draggable: true})
        .addTo(mapRef.current) .on('dragend', ev=> { setCoords(ev.target.getLatLng()); })
         }
   })
   return () => mapRef.current.remove();
  }, []); 

  useEffect(() => {
  if (!mapRef.current) return

  // Centra el mapa en las nuevas coords
  mapRef.current.setView([coords.lat, coords.lng], mapRef.current.getZoom())

  // Mueve el marcador si ya existe
  if (markerRef.current) {
    markerRef.current.setLatLng([coords.lat, coords.lng])
  }
}, [coords])

  useEffect(() => {
    const auth = getAuth();
    return onAuthStateChanged(auth, user => {
      if (user) {
        setClientId(user.uid);
        setClientName(user.displayName || user.email);
      }
    });
  }, []);
  
  useEffect(() => {
    if (marca === 'Otro' || modelo === 'Otro') {
      setCarModel(customCarModel);
    } else if (marca && modelo) {
      setCarModel(`${marca} ${modelo}`);
    } else {
      setCarModel('');
    }
  }, [marca, modelo, customCarModel]);

  // Captura la geoloc al montar
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => setCoords({ lat: coords.latitude, lng: coords.longitude }),
     err => {
    console.error('Error obteniendo ubicación:', err);
    alert('No se pudo obtener tu ubicación automáticamente.');
  },
      { enableHighAccuracy: true }
    );
  }, []);

  const handleSubmit = async e => {
    e.preventDefault();
    if (!coords) return alert('Obteniendo ubicación…');
    setSubmitting(true);
    try {
      await addDoc(collection(db, 'solicitudes'), {
        clientId,
        clientName,
        coords,
        timestamp:   serverTimestamp(),
        carModel: finalCarModel,
        serviceType,
        preferredDate: preferredDate
          ? Timestamp.fromDate(new Date(preferredDate))
          : null,
        notes,
        status:     'pending',
        color: color === 'Otro' ? customColor : color,
        photoURL:   null      // campo opcional
      });
      alert('¡Solicitud enviada!');
      setServiceType('basico');
      setCarModel(''); setNotes('');
    } catch (err) {
      console.error(err);
      alert('Error al enviar la solicitud.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="solicitud-form-wrapper">
    <form className="solicitud-form" onSubmit={handleSubmit}>
      <h2>Solicita un lavado de auto</h2>
      <label> Marca del auto
       <select value={marca} onChange={e => { setMarca(e.target.value); setModelo(''); setCustomCarModel(''); }} >
        <option value="">-- Selecciona una marca --</option>
         {Object.keys(marcasYModelos).map(m => ( <option key={m} value={m}>{m}</option> ))}
        <option value="Otro">Otro</option>       
       </select>
      </label>
      {marca === 'Otro' && (
      <label> Especifica la marca y Modelo
        <input type="text" value={customCarModel} onChange={e => setCustomCarModel(e.target.value)} placeholder="Escribe la marca y modelo" required />
      </label>)}

     {marca && marca !== 'Otro' && (
      <label> Modelo del auto
       <select value={modelo} onChange={e => {setModelo(e.target.value); if (e.target.value !== 'Otro') setCustomCarModel('') ; }}>
        <option value="">-- Selecciona un modelo --</option>
        {marcasYModelos[marca].map(mod => ( <option key={mod} value={mod}>{mod}</option> ))}
        <option value="Otro">Otro</option>
       </select>
      </label>)}

      {modelo === 'Otro' && (
        <label> Especifica el modelo
          <input type="text" value={customCarModel} onChange={e => setCustomCarModel(e.target.value)} placeholder="Modelo personalizado" required />
        </label>
      )}
      <label> Color del auto
       <select value={color} onChange={e => { setColor(e.target.value); if (e.target.value !== 'Otro') setCustomColor(''); }} >
        <option value="">-- Selecciona un color --</option>
         {colores.map(c => (<option key={c} value={c}>{c}</option> ))}
       </select>
      </label>
      {color === 'Otro' && (
      <label> Especifica el color
        <input type="text" value={customColor} onChange={e => setCustomColor(e.target.value)} placeholder="Escribe el color personalizado" required />
      </label>)}

      <label> Tipo de servicio
        <select value={serviceType} onChange={e => setServiceType(e.target.value)}>
            <option value="basico">Básico</option>
            <option value="premium">Premium</option>
            <option value="deluxe">Deluxe</option>
        </select>
      </label>
      <label> Fecha y hora preferida
         <input type="datetime-local" value={preferredDate} onChange={e => setPreferredDate(e.target.value)} />
      </label>
      <label> Detalles adicionales
        <textarea value={notes} onChange={e => setNotes(e.target.value)} />
      </label>

      <div ref={mapContainerRef} id="mini-map" style={{ width: '100%', height: '250px' }}/>

      <button type="submit" disabled={submitting}> {submitting ? 'Enviando…' : 'Enviar solicitud'} </button>

      {!coords && <p>Obteniendo ubicación…</p>}
    </form>
    </div>
  );
}