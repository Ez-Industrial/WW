// src/navigation/index.js
import React from 'react';
import { NavigationContainer }          from '@react-navigation/native';
import { createNativeStackNavigator }   from '@react-navigation/native-stack';
import { useAuth }                      from '../context/AuthContext';
import RoleChoice     from './RoleChoice';
import AuthStack      from './AuthStack';
import ClienteTabs       from './ClienteTabs';
import LavadorTabs from './LavadorTaps';

const Root = createNativeStackNavigator();

export default function AppNavigator() {
  const { loading, user } = useAuth();
  if (loading) { return null;}

  return (
  <NavigationContainer>
    <Root.Navigator screenOptions={{ headerShown: false }}  initialRouteName="RoleChoice">
      <Root.Screen  name="RoleChoice" component={RoleChoice} />
      <Root.Screen  name="AuthStack" component={AuthStack}  />
      <Root.Screen name="MainTabs" component={ClienteTabs} />
      <Root.Screen name="LavadorTabs" component={LavadorTabs} />
    </Root.Navigator>
  </NavigationContainer>
  );
}