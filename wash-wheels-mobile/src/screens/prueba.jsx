import styles from "../styles/global";
import { View, Text, TouchableOpacity } from "../core/native";
import { useNavigation } from "@react-navigation/native";

export default function Prueba (){
  const navigation = useNavigation();
  const sisisi = () => navigation.navigate("Sisisi");

  return (
   <View style={styles.container}>
     <Text style={styles.welcome}>Wash Wheels</Text>
     <TouchableOpacity style={styles.button} onPress={sisisi}>
             <Text style={styles.buttonText}> ir a sisisi</Text>
           </TouchableOpacity>
     <Text> Bienve </Text>
   </View>
    
  );}
