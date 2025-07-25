//src/screens/Configuracion.js
import React from "react";
import styles from "../styles/global";
import { View, Text, SectionList, TouchableOpacity } from "../core/native";
import { useNavigation } from '@react-navigation/native';

const SECTIONS = [
  { title: 'General',
    data: [ { key: 'Volver a Inicio', screen: 'Inicio' } ]},

  { title: 'Mi Cuenta',
    data: [ { key: 'Perfil', screen: 'Perfil' },
      { key: 'Regalos', screen: 'Regalos' },
      { key: 'Noticias', screen: 'Noticias' }, ] },

  { title: 'Ayuda y Feedback',
    data: [ { key: 'Preguntas Frecuentes', screen: 'FAQ' },
      { key: 'Encuesta', screen: 'Encuesta' }, ] },

  { title: 'Legal',
    data: [ { key: 'Términos y Condiciones', screen: 'Legales' },
      { key: 'Privacidad', screen: 'Legales' }, ] },
  { title: 'Configuración',
    data: [ { key: 'Configuraciones', screen: 'Legales' }, ] }
];


export default function Menu() {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate(item.screen)}
    >
      <Text style={styles.itemText}>{item.key}</Text>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
     <Text style={styles.title}>Wash Wheels</Text> 
    <Text style={styles.welcome}>Configuración</Text>
   
    <SectionList sections={SECTIONS} keyExtractor={(item) => item.key} renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.cuadra}>{title}</Text>)}
        renderItem={renderItem}
        ItemSeparatorComponent={() => 
    <View style={styles.separator} />} />
    <TouchableOpacity style={styles.cuadra} onPress={() => navigation.navigate('RoleChoice')}>
     <Text style={styles.textBase}>Ir al Inicio</Text>
    </TouchableOpacity>
    </View>
  );
}
