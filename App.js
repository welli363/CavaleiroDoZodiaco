import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import Titulo from "./src/components/Titulo"
import Subtitulo from './src/components/Subtitulo';
import Texto from "./src/components/Texto"
import TextoCausas from "./src/components/TextoCausas"
import Tipos from "./src/components/Tipos"
import Imagem from './src/components/Imagem'
   

export default function App() {
  return (
    <ScrollView>
   <View style={styles.container}>
    <Titulo/>
    <Subtitulo/>
    <Texto/>
    <Imagem/>
    <TextoCausas/>
    <Tipos/>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#292929',
    alignItems: 'center',
    
  },
});