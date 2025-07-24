//Home.js
import styles from "../styles/global";
import {Text,ScrollView, TouchableOpacity } from "../core/native";
import { useNavigation } from "@react-navigation/native";

function HomeCliente() {
const navigation = useNavigation();
  return (
   <ScrollView style={styles.containerScroll}>
     <Text style={styles.welcome}>Wash Wheels</Text>
     <Text> Bienvenido a home </Text>
     <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Prueba')}>
         <Text style={styles.buttonText}>prueba</Text>
       </TouchableOpacity>
   </ScrollView>
    
  );
}

export default HomeCliente;