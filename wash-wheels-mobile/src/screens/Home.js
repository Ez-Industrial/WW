//Home.js
import styles from "../styles/global";
import { View, Text, } from "../core/native";
function Home() {

  return (
   <View style={styles.container}>
     <Text style={styles.welcome}>Wash Wheels</Text>
     <Text> Bienvenido a home </Text>
   </View>
    
  );
}

export default Home;