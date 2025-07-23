// src/navigation/AuthStack.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/IniciarSesion';
import Registrarse from '../screens/Registrar';

const Stack = createNativeStackNavigator();

export default function AuthStack({route}) {
 return (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Login" component={LoginScreen} initialParams={{ role }}/>
    <Stack.Screen name="Register" component={Registrarse} initialParams={{ role }}/>
  </Stack.Navigator>
  );}
