// src/navigation/SettingsStack.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ConfiguracionScreen from './Menu';
import PerfilScreen        from '../screens/Perfil';
import Regalos      from '../screens/Regalos';
import Noticias      from '../screens/Noticias';
import FAQ           from '../screens/FAQ';
import Encuesta     from '../screens/Encuesta';
import Legales       from '../screens/Legales';

const Stack = createNativeStackNavigator();

export default function SettingsStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen name="Configuracion" component={ConfiguracionScreen}/>
      <Stack.Screen name="Perfil"        component={PerfilScreen}       />
      <Stack.Screen name="Regalos"       component={Regalos}      />
      <Stack.Screen name="Noticias"      component={Noticias}     />
      <Stack.Screen name="FAQ"           component={FAQ}          />
      <Stack.Screen name="Encuesta"      component={Encuesta}     />
      <Stack.Screen name="Legales"       component={Legales}      />
    </Stack.Navigator>
  );
}