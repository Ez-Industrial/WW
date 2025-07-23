// src/navigation/RoleChoice.js
import React, { useEffect } from 'react';
import { View, Button, Alert } from 'react-native';
import { useAuth } from '../context/AuthContext';
import styles from "../styles/global";

export default function RoleChoice({ navigation }) {
  const { user, userProfile, pendingFlow, setPendingFlow } = useAuth();

  const handleAccess = (flow) => {
    if (flow === 'cliente') {
      navigation.reset({ index: 0, routes: [{ name: 'ClienteTabs' }] });
    } else { 
      const role = userProfile.role;
      if (role === 'lavador' || role === 'admin') {
        navigation.reset({ index: 0, routes: [{ name: 'LavadorTabs' }] });
      } else {
        Alert.alert(
          'Acceso denegado',
          'Solo usuarios con rol lavador o admin pueden entrar aquí.'
        ); }}
    setPendingFlow(null);
  };

  const tryFlow = (flow) => {
    setPendingFlow(flow);

    if (!user) { navigation.navigate('AuthStack', { screen: 'Register' });
    } 
    else { handleAccess(flow);}};

   useEffect(() => {
    if (user && pendingFlow) {
      handleAccess(pendingFlow);
    }
  }, [user, pendingFlow]);

  return (
    <View style={styles.container}>
      <Button style={styles.button} title="Solicitar Lavado" onPress={() => tryFlow('cliente')} />
      <Button title="Ser Lavador" onPress={() => tryFlow('lavador')} />
    </View>
  );
}
