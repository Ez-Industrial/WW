// src/navigation/ClienteTabs.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeCliente from '../screens/Home';
import Actividades from '../screens/Actividades';
import SettingsStack from '../screens/SettingsStacks';

const Tab = createBottomTabNavigator();

export default function ClienteTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          const icons = {
            Inicio: 'home',
            Actividades: 'list',
            Menu: 'ellipsis-horizontal',
          };
          return <Ionicons name={icons[route.name]} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#274bb1ff',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { height: 60, paddingBottom: 6 },
        tabBarLabelStyle: { fontSize: 12 },
      })}
    >
      <Tab.Screen name="Inicio" component={HomeCliente} />
      <Tab.Screen name="Actividades" component={Actividades} />
      <Tab.Screen name="Menu" component={SettingsStack} />
    </Tab.Navigator>
  );
}