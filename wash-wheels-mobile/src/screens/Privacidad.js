import styles from "../styles/global";
import { View, Text, } from "../core/native";
import BackButton from "../components/BackButton";
export default function Privacidad() {

  return (
   <View style={styles.container}>
    <BackButton/>
     <Text style={styles.welcome}>Wash Wheels</Text>
     <Text> Privacidad </Text>
   </View>
    
  );
}