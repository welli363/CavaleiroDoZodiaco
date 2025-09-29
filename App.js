import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Titulo from "./src/components/Titulo"
import Subtitulo from './src/components/Subtitulo';
import Texto from "./src/components/Texto"

export default function App() {
  return (
    <View style={styles.container}>
    <Titulo/>
    <Subtitulo/>
    <Texto/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#292929',
    alignItems: 'center',
    
  },
});