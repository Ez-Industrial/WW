// src/pages/SolicitudForm.jsx
import React, { useEffect, useRef, useState } from 'react';
import {TouchableOpacity,View , Text, TextInput, ScrollView, ActivityIndicator, Platform, Image, Alert} from "../core/native";
import  {useColorScheme, Button } from 'react-native';
import { db, auth, storage } from '../services/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import styles from "../styles/global";
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import MapView,{ Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { useNavigation } from '@react-navigation/native';
import BackButton from '../components/BackButton';
import * as ImagePicker from 'expo-image-picker';
import {  ref, uploadBytes, getDownloadURL } from 'firebase/storage';

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
  const [image, setImage] = useState(null);
   const pickImage = async () => {
    console.log('📌 pickImage ejecutado');
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    console.log('📌 Permiso:', status);

    if (status !== 'granted') {
      Alert.alert('Permiso requerido', 'Debes permitir acceso a tus fotos.');
      return; }

    console.log('📌 Abriendo galería...');
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: [ImagePicker.MediaType.Images],
      allowsEditing: true,
      quality: 0.7,
    });

    console.log('📌 Resultado picker:', result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      console.log('📌 Imagen seleccionada:', result.assets[0].uri);
    } else {
      console.log('📌 Selección cancelada'); } };

  
    const uriToBlob = (uri) => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = () => resolve(xhr.response);
      xhr.onerror = () => reject(new TypeError('Network request failed'));
      xhr.responseType = 'blob';
      xhr.open('GET', uri, true);
      xhr.send(null);
    });
  };
  const [region, setRegion]         = useState({
    latitude: 19.5438, longitude: -96.9106,
    latitudeDelta: 0.01, longitudeDelta: 0.01 });
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
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status === 'granted') {
        let loc = await Location.getCurrentPositionAsync({ accuracy: 5 });
        setLocation(loc.coords);
        setRegion(r => ({ ...r, latitude: loc.coords.latitude, longitude: loc.coords.longitude }));} })();

    auth.onAuthStateChanged(u => {
      if (u) {
        setUserId(u.uid);
        setUserName(u.displayName || u.email); }})  }, []);

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
    latitude: loc.coords.latitude, longitude: loc.coords.longitude
  }));
};

  const onMarkerDragEnd = e => {
    const { latitude, longitude } = e.nativeEvent.coordinate;
    setRegion(r => ({ ...r, latitude, longitude }));
  };

  const handleSubmit = async () => {
      setSubmitting(true);
    try {
      let photoURL = null;

          console.log('📷 Imagen seleccionada:', image);


      if (image) {
        console.log('🔄 Convirtiendo URI a blob...');

        const blob = await uriToBlob(image);
        console.log('✅ Blob creado, subiendo a Storage...');


        const filename = `solicitudes/${Date.now()}.jpg`;
        const storageRef = ref(storage, filename);
        await uploadBytes(storageRef, blob);
        blob.close?.();
        console.log('✅ Imagen subida, obteniendo URL...');

        photoURL = await getDownloadURL(storageRef);
         console.log('🌐 URL de imagen:', photoURL);
    } else {
      console.warn('⚠️ No se seleccionó imagen, se enviará sin photoURL');
      }
console.log('📝 Guardando solicitud en Firestore...');

      await addDoc(collection(db, 'solicitudes'), {
        clientId:     userId,
        clientName:   userName,
        coords:       { latitude: region.latitude, longitude: region.longitude },
        timestamp:    serverTimestamp(),
        carModel:     finalCarModel,
        color:        finalColor,
        serviceType,
        preferredAt:  date,
        notes,
        status:       'pending',
        photoURL,
      });
      Alert.alert('¡Solicitud enviada!','Tu solicitud se ha registrado correctamente.');
      setImage(null);

      setNotes(''); setMarca(''); setModelo(''); setCustom(''); setColor(''); setCustomCol('');
      setService('basico'); setDate(new Date());
      navigation.navigate('ClienteTabs', { screen: 'Inicio' });

    } catch (err) {
      console.error('Error enviando solicitud:', err);
      Alert.alert('Error', err.message || 'No se pudo enviar la solicitud.');
    } finally {
      setSubmitting(false);
    }
  };


  if (!location) {
    return <ActivityIndicator style={{ flex:1 }} size="large" />; }

  return (
    <ScrollView contentContainerStyle={{ ...styles.formContent, backgroundColor: colorScheme === 'dark' ? '#333' : '#fff' }}>
      <View style={styles.header}>
           <BackButton style={styles.backButton}/> 
           <Text style={styles.heading}>Solicita un lavado de auto</Text>

      </View>     
      
      {/* Marca y Modelo */}
      <Text style={styles.label}>Marca</Text>
      <Picker style={{ color: pickerTextColor }} dropdownIconColor={pickerTextColor} selectedValue={marca}
        onValueChange={v => { setMarca(v); setModelo(''); setCustom(''); }}>
        <Picker.Item label="--Selecciona marca--" value="" />
        {Object.keys(marcasYModelos).map(m => (
          <Picker.Item key={m} label={m} value={m} /> ))}
      </Picker>

      {marca && marca !== 'Otro' && (
        <>
          <Text style={styles.label}>Modelo</Text>
          <Picker selectedValue={modelo}
            onValueChange={v => { setModelo(v);
              if (v !== 'Otro') setCustom(''); }} >
            <Picker.Item label="--Selecciona modelo--" value="" />
            {marcasYModelos[marca].map(mod => (
              <Picker.Item key={mod} label={mod} value={mod} /> ))}
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
        {colores.map(c => ( <Picker.Item key={c} label={c} value={c} /> ))}
      </Picker>
      {color === 'Otro' && ( <TextInput style={styles.input} placeholder="Color personalizado" value={customColor} onChangeText={setCustomCol} /> )}

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
          onChange={(_, d) => { setShowPicker(false);
            if (d) setDate(d); }} /> )}

      {/* Notas */}
      <Text style={styles.label}>Detalles adicionales</Text>
      <TextInput style={[styles.input, { height: 80 }]} multiline
        placeholder="Ej. zona de acceso, llaves…"
        value={notes} onChangeText={setNotes} />
       <Button title="Seleccionar foto" onPress={pickImage} />
      {image && (
        <Image
          source={{ uri: image }}
          style={{ width: 200, height: 200, marginVertical: 10 }}
        />
      )}
      
      {/* Mapa */}
      <Text style={styles.label}>Selecciona ubicación</Text>
      <MapView
        style={styles.map} initialRegion={region}>

        <Marker coordinate={region} draggable onDragEnd={onMarkerDragEnd} />
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

