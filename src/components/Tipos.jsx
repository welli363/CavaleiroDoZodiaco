import { StyleSheet, Text, View } from 'react-native';

export default function Tipos (){
    return(
        <View>
            <Text style={{fontSize: 20, color: '#fff', marginTop: 20, fontWeight:'bold'}}>
                Tipos de deficiência Visual
            </Text>
            <Text>
                A deficiência visual pode ser dividida em dois tipos principais: baixa visão e cegueira. A baixa visão ocorre quando a pessoa ainda consegue enxergar, mas de forma limitada, mesmo utilizando óculos, lentes de contato ou outros recursos corretivos, o que pode dificultar atividades cotidianas como ler, reconhecer rostos ou se deslocar com segurança. Já a cegueira é a perda total ou quase total da visão, exigindo o uso de recursos adaptativos, como bengalas, braile, leitores de tela e outras tecnologias assistivas, para garantir a autonomia e a inclusão social. Ambos os tipos de deficiência visual impactam diretamente a vida diária, mas com suporte adequado é possível superar muitas das barreiras enfrentadas.
            </Text>
        </View>
    )
}