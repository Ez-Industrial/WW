import React from 'react';
import { ScrollView, View, Text, Image } from '../core/native';
import styles from "../styles/global";
import BackButton from '../components/BackButton';
export default function PruebaScreenScroll() {

  return (
    <ScrollView contentContainerStyle={styles.containerScroll}>
      <BackButton/>
      <Text style={styles.title}>Bienvenida a mi app</Text>

      <Text style={styles.paragraph}>
        Aquí puedes agregar todo tipo de contenido: párrafos, listas, imágenes, videos, formularios…
        sisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisii
        sisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisi
        sisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisii
        sisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisi
        sisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisii
        sisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisi
        sisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisii
        sisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisi
        sisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisii
        sisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisi


        sisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisii
        sisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisi
        sisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisii
        sisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisi
        sisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisii
        sisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisi

        sisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisii
        sisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisi
        sisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisii
        sisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisi

        sisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisii
        sisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisi
        sisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisii
        sisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisi
        sisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisii
        sisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisi
        sisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisii
        sisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisi
        sisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisii
        sisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisi
        sisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisii
        sisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisi
        sisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisii
        sisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisi
        sisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisii
        sisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisi


        sisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisii
        sisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisi
        sisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisii
        sisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisi
        sisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisii
        sisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisi

        sisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisii
        sisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisi
        sisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisii
        sisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisi

        sisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisii
        sisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisi
        sisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisii
        sisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisi
        sisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisii
        sisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisiisisi
      </Text>

      <View style={styles.box}>
        <Text>Este es un recuadro adicional que también participa en el scroll.</Text>
      </View>
      
    </ScrollView>
  );
}
