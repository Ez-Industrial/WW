//src/screens/HomeLav.js
import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import MapView, { Marker,Callout } from 'react-native-maps';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../services/firebase';
import { useNavigation } from '@react-navigation/native';


export default function HomeLav() {
  const [solicitudes, setSolicitudes] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    const unsub = onSnapshot(collection(db, 'solicitudes'), (snap) => {
      const data = snap.docs
        .map(doc => ({ id: doc.id, ...doc.data() }))
        .filter(s => s.status === 'pending');
      setSolicitudes(data);
      setLoading(false);
    });

    return () => unsub();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" style={{ flex: 1 }} />;
  }

  return (
    <MapView style={{ flex: 1 }}
      initialRegion={{
        latitude: 25.8631, // centro inicial
        longitude: -97.5187,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      }}
    >
      {solicitudes.map(s => (
        <Marker
          key={s.id}
          coordinate={{
            latitude: s.coords.latitude ?? s.coords.lat,
            longitude: s.coords.longitude ?? s.coords.lng
          }}
        >
          <Callout
            onPress={() =>
              navigation.navigate('DetalleSolicitud', { solicitud: s })
            }
          >
            <View style={{ padding: 5 }}>
              <Text style={{ fontWeight: 'bold' }}>{s.clientName}</Text>
              <Text>{s.carModel}</Text>
              <Text style={{ color: 'blue', marginTop: 4 }}>
                Ver detalles →
              </Text>
            </View>
          </Callout>
        </Marker>
      ))}
    </MapView>
  );
}

