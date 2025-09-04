import * as ImagePicker from 'expo-image-picker';
import { Button, View } from 'react-native';

export default function Prueba() {
  const pickImage = async () => {
    console.log('📌 pickImage ejecutado');
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    console.log('📌 Permiso:', status);
    if (status !== 'granted') return;

    console.log('📌 Abriendo galería...');
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: [ImagePicker.MediaType.Images],
      allowsEditing: true,
      quality: 0.7,
    });
    console.log('📌 Resultado picker:', result);
  };

  return (
    <View style={{ marginTop: 50 }}>
      <Button title="Test Picker" onPress={pickImage} />
    </View>
  );
}
