import React, { useEffect, useRef, useState } from 'react';
import { db, query, where, onSnapshot, collection } from '../config/firebase';
import { geohashQueryBounds, distanceBetween } from 'geofire-common';
import L from "leaflet";
import "../config/Homelav.css"
import "leaflet/dist/leaflet.css";

export default function Mapa({ userPos }) {
 const mapRef     = useRef(null);
 const markersRef = useRef({});
 const radiusInKm = 10;
   const goToUserLocation = () => {
    const map = mapRef.current;
    if (map && userPos) {
      map.flyTo(userPos, 18, { animate: true, duration: 1 });
    }};

  useEffect(() => {
    if (!mapRef.current) {
     const map = L.map("map", { center: userPos, zoom: 16 });
       mapRef.current = map;
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")
         .addTo(map);
         setTimeout(() => map.invalidateSize(), 0);
 
     const onResize = () => map.invalidateSize();
       window.addEventListener("resize", onResize);
 
       return () => window.removeEventListener("resize", onResize);
     }
    }, []);
  useEffect(() => {
      if (mapRef.current) {
          mapRef.current.panTo(userPos);
        }
    }, [userPos]);
  
  useEffect(() => {
      const map = mapRef.current;
      if (!map) return;
  
      // quita antiguos
      Object.values(markersRef.current).forEach((m) => map.removeLayer(m));
      markersRef.current = {};
  
      const bounds = geohashQueryBounds(userPos, radiusInKm);
      const unsubs = bounds.map(([start, end]) => {
        const q = query(
          collection(db, "lavadores"),
          where("geohash", ">=", start),
          where("geohash", "<=", end)
        );
        return onSnapshot(q, (snap) => {
          snap.docChanges().forEach((c) => {
            const id = c.doc.id;
            const { latitude, longitude } = c.doc.data().coords;
            const dist = distanceBetween(userPos, [latitude, longitude]);
  
            if (dist <= radiusInKm * 1000) {
              if (markersRef.current[id]) {
                markersRef.current[id].setLatLng([latitude, longitude]);
              } else {
                markersRef.current[id] = L.marker([latitude, longitude])
                  .addTo(map)
                  .bindPopup(c.doc.data().nombre || "Lavador");
              }
            } else {
              if (markersRef.current[id]) {
                map.removeLayer(markersRef.current[id]);
                delete markersRef.current[id];
              }
            }
          });
        });
      });

      return () => unsubs.forEach((fn) => fn());   
  }, [userPos]);
 useEffect(() => {
    if (!mapRef.current) {
      const map = L.map('map', { center: [20.7, -103.3], zoom: 12 });
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
       .addTo(map);
      mapRef.current = map;
    }
  }, []);

  useEffect(() => {
    const q = query(
      collection(db, 'solicitudes'),
      where('status', '==', 'pending')
    );
    const unsub = onSnapshot(q, snap => {
      snap.docChanges().forEach(change => {
        const id = change.doc.id;
        const data = change.doc.data();
        const pos = [data.coords.lat, data.coords.lng];

        if (change.type === 'added') {
          const marker = L.marker(pos).addTo(mapRef.current)
            .bindPopup(`
              <b>${data.clientName}</b><br/>
              ${data.carModel}<br/>
              <button id="accept-${id}">Aceptar</button>
            `);
          markersRef.current[id] = marker;
          marker.on('popupopen', () => {
            document
              .getElementById(`accept-${id}`)
              .addEventListener('click', async () => {
                await updateDoc(change.doc.ref, { status: 'assigned' });
              });
          });
        }

        if (change.type === 'removed' || data.status !== 'pending') {
          const m = markersRef.current[id];
          if (m) {
            mapRef.current.removeLayer(m);
            delete markersRef.current[id];
          }
        }
      });
    });
    return () => unsub();
  }, []);

  return (
  <div className='lavador-cen'>
    <div id="map" className='map-container' />
     <button className="locate-btn" onClick={goToUserLocation} aria-label="Ir a mi ubicación" > 📍 Mi ubicación </button>
 </div> 
 
);
}
