import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Titulo from "./src/components/Titulo"
import Subtitulo from './src/components/Subtitulo';
import Texto from "./src/components/Texto"
import TextoCausas from "./src/components/TextoCausas"

export default function App() {
  return (
    <View style={styles.container}>
    <Titulo/>
    <Subtitulo/>
    <Texto/>
    <TextoCausas/>
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