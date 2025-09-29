import { StyleSheet, Text, View } from 'react-native';

export default function TextoCausas (){
    return (
        <View>
            <Text style={{fontSize: 20, color: '#008000', marginTop: 20, marginBottom: 0.5, fontWeight:'bold', marginLeft: 20}}>
                Causas mais comuns
            </Text>
        <Text style={{fontSize: 20, color: "white", margin: 10}}>
            As causas mais comuns da deficiência visual podem ser congênitas ou adquiridas. Entre elas estão a catarata, o glaucoma, a degeneração macular relacionada à idade, a retinopatia diabética, descolamento de retina, doenças hereditárias como a retinose pigmentar e acidentes ou traumas oculares, que podem causar perda parcial ou total da visão.
        </Text>
        </View>

    )
}