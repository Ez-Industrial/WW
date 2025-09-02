// src/navigation/index.js
import React from 'react';
import { NavigationContainer }          from '@react-navigation/native';
import { createNativeStackNavigator }   from '@react-navigation/native-stack';
import { useAuth }                      from '../context/AuthContext';
import RoleChoice     from './RoleChoice';
import AuthStack      from './AuthStack';
import ClienteTabs       from './ClienteTabs';
import LavadorTabs from './LavadorTaps';
import PerfilScreen from '../screens/Perfil';
import Regalos from '../screens/Regalos';
import Noticias from '../screens/Noticias';
import FAQ from '../screens/FAQ';
import Encuesta from '../screens/Encuesta';
import TerminosyCondiciones from '../screens/TerminosyCondiciones';
import Privacidad from '../screens/Privacidad';
import PruebaScreenScroll from '../screens/ScreenScroll';
import SolicitudForm from '../screens/SolicitudForm';
import Legales from '../screens/Legales';
const Root = createNativeStackNavigator();

export default function AppNavigator() {
  const { loading, user } = useAuth();
  if (loading) { return null;}
  if (!user) {
  return (
    <NavigationContainer>
      <Root.Navigator screenOptions={{ headerShown: false }}>
        <Root.Screen name="RoleChoice" component={AuthStack} />
      </Root.Navigator>
    </NavigationContainer>
  );
}

  return (
  <NavigationContainer>
    <Root.Navigator screenOptions={{ headerShown: false }}  initialRouteName="RoleChoice">
      <Root.Screen  name="RoleChoice" component={RoleChoice} />
      <Root.Screen  name="AuthStack" component={AuthStack}  />
      <Root.Screen name="ClienteTabs" component={ClienteTabs} />
      <Root.Screen name="LavadorTabs" component={LavadorTabs} />
      <Root.Screen name='Perfil' component={PerfilScreen}/>
      <Root.Screen name="Regalos" component={Regalos} />
      <Root.Screen name="Noticias" component={Noticias}/>
      <Root.Screen name='FAQ' component={FAQ}/>
      <Root.Screen name='Encuesta' component={Encuesta}/>
      <Root.Screen name='Terminos y Condiciones' component={TerminosyCondiciones}/>
      <Root.Screen name='Privacidad' component={Privacidad}/>
      <Root.Screen name='Prueba' component={PruebaScreenScroll}/>
      <Root.Screen name='Solicitud' component={SolicitudForm}/>
      <Root.Screen name= 'Legales'component={Legales}/>
    </Root.Navigator>
  </NavigationContainer>
  );
}