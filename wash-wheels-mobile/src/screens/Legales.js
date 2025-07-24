import styles from "../styles/global";
import { View, Text, } from "../core/native";
import BackButton from "../components/BackButton";
export default function Legales() {

  return (
   <View style={styles.container}>
    <BackButton/>
     <Text style={styles.welcome}>Wash Wheels</Text>
     <Text> Legales </Text>
   </View>
    
  );
}