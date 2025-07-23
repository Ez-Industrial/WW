// src/navigation/SettingsStack.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ConfiguracionScreen from '../screens/Configuracion';
import PerfilScreen        from '../screens/Perfil';
import RegalosScreen       from '../screens/Regalos';
import NoticiasScreen      from '../screens/Noticias';
import FAQScreen           from '../screens/FAQ';
import EncuestaScreen      from '../screens/Encuesta';
import LegalesScreen       from '../screens/Legales';

const Stack = createNativeStackNavigator();

export default function SettingsStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen name="Configuración" component={ConfiguracionScreen}/>
      <Stack.Screen name="Perfil"        component={PerfilScreen}       />
      <Stack.Screen name="Regalos"       component={RegalosScreen}      />
      <Stack.Screen name="Noticias"      component={NoticiasScreen}     />
      <Stack.Screen name="FAQ"           component={FAQScreen}          />
      <Stack.Screen name="Encuesta"      component={EncuestaScreen}     />
      <Stack.Screen name="Legales"       component={LegalesScreen}      />
    </Stack.Navigator>
  );
}