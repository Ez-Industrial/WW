//src/navigation/index.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native"; 
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import  InicioScreen from "../screens/Inicio";
import Prueba from "../screens/prueba";
import Sisisi from "../screens/sisisi";
import Home from "../screens/Home";
import Homelav from "../screens/HomeLav";
import IniciarSesion from "../screens/IniciarSesion";
import TestScreen from "../screens/TestScreen";
const Stack = createNativeStackNavigator();

export default function AppNavigator() {
 return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: true }}> 
        <Stack.Screen name="Inicio" component={InicioScreen} />
        <Stack.Screen name="Sisisi" component={Sisisi} />
        <Stack.Screen name="Prueba" component={Prueba} />
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Home Lav" component={Homelav}/>
        <Stack.Screen name="Login" component={IniciarSesion}/>
        <Stack.Screen name="Test" component={TestScreen}/>
      </Stack.Navigator>
    </NavigationContainer>     
); }
