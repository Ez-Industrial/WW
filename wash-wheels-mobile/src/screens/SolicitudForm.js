// src/pages/SolicitudForm.jsx
import React, { useEffect, useRef, useState } from 'react';
import {TouchableOpacity, Text, TextInput, Button, ScrollView, ActivityIndicator, Platform} from "../core/native";
import { useColorScheme } from 'react-native';
import { db, auth } from '../services/firebase';
import { collection, addDoc, serverTimestamp,Timestamp } from 'firebase/firestore';
import styles from "../styles/global";
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import MapView,{ Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { useNavigation } from '@react-navigation/native';

export default function SolicitudForm() {
  const [marca, setMarca]           = useState('');
  const [modelo, setModelo]         = useState('');
  const [customCarModel, setCustom] = useState('');
  const [color, setColor]           = useState('');
  const [customColor, setCustomCol] = useState('');
  const [serviceType, setService]   = useState('basico');
  const [date, setDate]             = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [notes, setNotes]           = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [location, setLocation]     = useState(null);
  const [region, setRegion]         = useState({
    latitude: 19.5438,
    longitude: -96.9106,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01 });
  const [userId, setUserId]         = useState(null);
  const [userName, setUserName]     = useState('');

  const marcasYModelos = {
  Toyota: ["Corolla", "Camry", "Yaris", "Hilux", "Otro"],
  Nissan: ["Sentra", "Altima", "Versa", "X-Trail", "Otro"],
  Ford: ["Fiesta", "Focus", "Explorer", "Mustang", "Otro"],
  Chevrolet: ["Aveo", "Cruze", "Spark", "Trax","Otro"],
  Honda: ["Civic", "Accord", "Fit", "CR-V", "Otro"],};

  const colores = [ "Blanco", "Negro", "Gris", "Rojo", "Azul", "Verde", "Amarillo", "Plateado", "Dorado", "Otro"];

   useEffect(() => {
    // ubicación inicial
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status === 'granted') {
        let loc = await Location.getCurrentPositionAsync({ accuracy: 5 });
        setLocation(loc.coords);
        setRegion(r => ({
          ...r,
          latitude: loc.coords.latitude,
          longitude: loc.coords.longitude
        }));
}
    })();

    // usuario actual
    auth.onAuthStateChanged(u => {
      if (u) {
        setUserId(u.uid);
        setUserName(u.displayName || u.email);
      }
    });
  }, []);

  // si seleccionas “Otro” para marca o color
  const finalCarModel =
    marca === 'Otro'
      ? customCarModel
      : modelo === 'Otro'
      ? customCarModel
      : `${marca} ${modelo}`;
  const navigation = useNavigation();
  const finalColor = color === 'Otro' ? customColor : color;
  const colorScheme = useColorScheme();
  const pickerTextColor = colorScheme === 'dark' ? '#fff' : '#000';
  const goToCurrentLocation = async () => {
  let { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== 'granted') {
    alert('Permiso de ubicación denegado');
    return;
  }
  let loc = await Location.getCurrentPositionAsync({ accuracy: 5 });
  setRegion(r => ({
    ...r,
    latitude: loc.coords.latitude,
    longitude: loc.coords.longitude
  }));
};

  const onMarkerDragEnd = e => {
    const { latitude, longitude } = e.nativeEvent.coordinate;
    setRegion(r => ({ ...r, latitude, longitude }));
  };

  const handleSubmit = async () => {
    if (!userId) return alert('Debes iniciar sesión');
    setSubmitting(true);
    try {
      await addDoc(collection(db, 'solicitudes'), {
        clientId:     userId,
        clientName:   userName,
        coords:       { lat: region.latitude, lng: region.longitude },
        timestamp:    serverTimestamp(),
        carModel:     finalCarModel,
        color:        finalColor,
        serviceType,
        preferredAt:  date,
        notes,
        status:       'pending'
      });
      alert('¡Solicitud enviada!');
     navigation.navigate('LavadorTabs', { screen: 'Inicio' });



      // resetea campos
      setNotes('');
      setMarca(''); setModelo(''); setCustom(''); setColor(''); setCustomCol('');
      setService('basico'); setDate(new Date());
    } catch (err) {
      console.error(err);
      alert('Error enviando solicitud');
    } finally {
      setSubmitting(false);
    }
  };

  if (!location) {
    return <ActivityIndicator style={{ flex:1 }} size="large" />; }

  return (
    <ScrollView contentContainerStyle={styles.formContent}>
      
      <Text style={styles.heading}>Solicita un lavado de auto</Text>

      {/* Marca y Modelo */}
      <Text style={styles.label}>Marca</Text>
      <Picker style={{ color: pickerTextColor }} dropdownIconColor={pickerTextColor} selectedValue={marca}
        onValueChange={v => {
          setMarca(v); setModelo(''); setCustom(''); }}>
        <Picker.Item label="--Selecciona marca--" value="" />
        {Object.keys(marcasYModelos).map(m => (
          <Picker.Item key={m} label={m} value={m} />
        ))}
      </Picker>

      {marca && marca !== 'Otro' && (
        <>
          <Text style={styles.label}>Modelo</Text>
          <Picker selectedValue={modelo}
            onValueChange={v => {
              setModelo(v);
              if (v !== 'Otro') setCustom('');
            }}
          >
            <Picker.Item label="--Selecciona modelo--" value="" />
            {marcasYModelos[marca].map(mod => (
              <Picker.Item key={mod} label={mod} value={mod} />
            ))}
          </Picker>
        </>
      )}

      {(marca === 'Otro' || modelo === 'Otro') && (
        <>
          <Text style={styles.label}>Especifica marca/modelo</Text>
          <TextInput style={styles.input} placeholder="Marca y modelo" value={customCarModel} onChangeText={setCustom} />
        </>
      )}

      {/* Color */}
      <Text style={styles.label}>Color</Text>
      <Picker selectedValue={color} onValueChange={setColor} style={{ color: '#f01b1bff' }}  >
        <Picker.Item label="--Selecciona color--" value="" />
        {colores.map(c => (
          <Picker.Item key={c} label={c} value={c} />
        ))}
      </Picker>
      {color === 'Otro' && (
        <TextInput style={styles.input} placeholder="Color personalizado" value={customColor} onChangeText={setCustomCol} />
      )}

      {/* Tipo de servicio */}
      <Text style={styles.label}>Tipo de servicio</Text>
      <Picker selectedValue={serviceType}  onValueChange={setService} style={{ color: pickerTextColor }} dropdownIconColor={pickerTextColor}  >
        <Picker.Item label="Básico"  value="basico" />
        <Picker.Item label="Premium" value="premium" />
        <Picker.Item label="Deluxe"  value="deluxe" />
      </Picker>

      {/* Fecha y hora */}
      <Text style={styles.label}>Fecha preferida</Text>
      <Button title={date.toLocaleString()} onPress={() => setShowPicker(true)} />
      {showPicker && (
        <DateTimePicker value={date} mode="datetime" display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          onChange={(_, d) => {
            setShowPicker(false);
            if (d) setDate(d);
          }}
        />
      )}

      {/* Notas */}
      <Text style={styles.label}>Detalles adicionales</Text>
      <TextInput
        style={[styles.input, { height: 80 }]}
        multiline
        placeholder="Ej. zona de acceso, llaves…"
        value={notes}
        onChangeText={setNotes}
      />

      {/* Mapa */}
      <Text style={styles.label}>Selecciona ubicación</Text>
      <MapView
        style={styles.map}
        initialRegion={region}>

        <Marker
          coordinate={region}
          draggable
          onDragEnd={onMarkerDragEnd}
        />
      </MapView>
      <TouchableOpacity style={{ backgroundColor: '#797e83ff', padding: 10, borderRadius: 8, alignSelf: 'center', marginBottom: 8, heigh: 50 }}
      onPress={goToCurrentLocation}>
      <Text style={{ color: '#fff', fontWeight: 'bold' }}>📍 Mi ubicación</Text>
      </TouchableOpacity>

      {/* Botón enviar */}
      {submitting
        ? <ActivityIndicator style={{ margin: 16 }} />
        : <Button
            title="Enviar solicitud"
            onPress={handleSubmit}
          />
      }
    </ScrollView>
  );
}

