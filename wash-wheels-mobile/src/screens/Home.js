//Home.js
import styles from "../styles/global";
import {Text,ScrollView, View, TouchableOpacity, SafeAreaView} from "../core/native";
import { useNavigation } from "@react-navigation/native";
import BackButton from "../components/BackButton";

function HomeCliente() {
const navigation = useNavigation();
  return (
  <SafeAreaView style={styles.container}> 
     <View style={styles.header}>
      <BackButton style={styles.backButton}/> 
      <Text style={styles.title}>Wash Wheels</Text>
     </View>
   <ScrollView style={styles.containerScroll}>
    
     <Text> Bienvenido a home </Text>
     <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Prueba')}>
         <Text style={styles.buttonText}>prueba</Text>
       </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Solicitud')}>
         <Text style={styles.buttonText}>Solicitud</Text>
       </TouchableOpacity>
   </ScrollView>
  </SafeAreaView>
  );
}

export default HomeCliente;