//src/navigation/LavadorStack.js
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeLav from '../screens/HomeLav';
import DetalleSolicitud from '../screens/DetalleSolicitud';

const Stack = createNativeStackNavigator();

export function LavadorStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeLav" component={HomeLav} />
      <Stack.Screen name="DetalleSolicitud" component={DetalleSolicitud} />
    </Stack.Navigator>
  );
}