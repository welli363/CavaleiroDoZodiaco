
import { StyleSheet, Text, View, Image } from 'react-native';
import imagem from '../../assets/defvisu.jpg'

export default function Imagem (){
    return(
        <View style={styles.container}>
            <Image  source={imagem} style={styles.imagem} />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{

    },
    imagem: {

    }
})
