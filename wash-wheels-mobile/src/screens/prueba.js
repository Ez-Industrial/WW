import styles from "../styles/global";
import { View, Text, TouchableOpacity } from "../core/native";
import { useNavigation } from "@react-navigation/native";
import BackButton from "../components/BackButton";


export default function Prueba (){
  const navigation = useNavigation();

  return (
   <View style={styles.container}>
     <Text style={styles.welcome}>Wash Wheels</Text>
     <Text style={styles.textBase}>Pagina de Prueba de Cosas</Text>
     <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Inicio")}>
      <Text style={styles.buttonText}>Ir a Inicio</Text>
     </TouchableOpacity>
     <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Sisisi")}>
      <Text style={styles.buttonText}>Ir a Sisisi</Text>
     </TouchableOpacity>
     <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Home")}>
      <Text style={styles.buttonText}>Ir a Home</Text>
     </TouchableOpacity>
     <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Home Lav")}>
      <Text style={styles.buttonText}>Ir a Home Lavadores</Text>
     </TouchableOpacity>
     <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Login")}>
      <Text style={styles.buttonText}>Ir a Iniciar Sesion</Text>
     </TouchableOpacity>
     <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Test")}>
      <Text style={styles.buttonText}>Ir a TestScreen</Text>
     </TouchableOpacity>
     <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Scroll")}>
      <Text style={styles.buttonText}>Ir a ScreenScroll</Text>
     </TouchableOpacity>
    <Text style={styles.subtitle}>Subtitle</Text>
    <Text style={styles.muted}>Muted</Text>
    <Text style={styles.linkText}>link Text</Text>
     
   </View>
    
  );}
