
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Imagem (){
    return(
        <View style={styles.container}>
            <Imagem  source={require('../assets/defvisu.jpg')} 
                style={styles.imagem}
            >
            </Imagem>
        </View>
    )
}
