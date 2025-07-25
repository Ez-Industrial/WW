// src/navigation/LavadorTabs.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons }                from '@expo/vector-icons';

import Actividades  from '../screens/Actividades'; // opcional
import Homelav from '../screens/HomeLav';
import Menu from '../screens/Menu';

const Tab = createBottomTabNavigator();

export default function LavadorTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          const icons = {
            'Inicio':  'car',
            Menu: 'ellipsis-horizontal',
            Actividades:   'list',
          };
          return <Ionicons name={icons[route.name]} size={size} color={color} />;
        },
        tabBarActiveTintColor:   '#274bb1ff',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle:             { height: 60, paddingBottom: 6 },
        tabBarLabelStyle:        { fontSize: 12 },
      })}
    >
      <Tab.Screen name="Inicio"   component={Homelav} />
      <Tab.Screen name="Actividades"  component={Actividades} />
      <Tab.Screen name="Menu" component={Menu} />
    </Tab.Navigator>
  );
}