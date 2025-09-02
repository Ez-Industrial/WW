//src/screens/DetalelSolicitud.js
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function DetalleSolicitud({ route }) {
  const { solicitud } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Solicitud de {solicitud.clientName}</Text>

      {/* Espacio para imagen */}
      <View style={styles.imagePlaceholder}>
        <Text style={{ color: '#888' }}>Imagen del auto</Text>
      </View>

      <Text style={styles.label}>Modelo:</Text>
      <Text style={styles.value}>{solicitud.carModel}</Text>

      <Text style={styles.label}>Color:</Text>
      <Text style={styles.value}>{solicitud.color}</Text>

      <Text style={styles.label}>Tipo de servicio:</Text>
      <Text style={styles.value}>{solicitud.serviceType}</Text>

      <Text style={styles.label}>Notas:</Text>
      <Text style={styles.value}>{solicitud.notes || 'Sin notas'}</Text>

      <Text style={styles.label}>Ubicación:</Text>
      <Text style={styles.value}>
        Lat: {solicitud.coords.latitude ?? solicitud.coords.lat},  
        Lng: {solicitud.coords.longitude ?? solicitud.coords.lng}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 16 },
  label: { fontWeight: 'bold', marginTop: 8 },
  value: { marginBottom: 8 },
  imagePlaceholder: {
    width: '100%',
    height: 200,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    borderRadius: 8
  }
});