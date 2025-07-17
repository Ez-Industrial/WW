import React from "react";
import {NavigatoContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { IniciarSesion } from "../screens/IniciarSesion"; 
import { Inicio } from "../screens/Inicio"

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
 return(
    <NavigatoContainer>
      <Stack.Navigator screenOptions = {{ headerShow: false}}>
        <Stack.Screen name="Inicio" component={Inicio} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="HomeLav" component={HomeLavScreen} />
        <Stack.Screen name="IniciarSesion" component={IniciarSesion} />
      </Stack.Navigator>

    </NavigatoContainer>
 );
}
