import React from 'react'
import { Text, View, } from 'react-native'
import Contador from './contador'


const Perguntas = ({pergunta, indicePergunta, contadorZerou}) => {
    const nomePergunta = pergunta.Name
    return (
        <View style={styles.pergunta}>
            <Text style={styles.perguntaTexto}>
                {
                    nomePergunta
                }
            </Text>
            <Contador indicePergunta={indicePergunta} contadorZerou={contadorZerou}/>
        </View>
    )
}
const styles = {
    pergunta: {
        flexDirection: 'row',
        // justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderWidth: 2,
        backgroundColor: '#9a031e',
        flex: 1,
        borderRadius: 20,
        borderColor: "#ffdd55",
        
        
    },
    perguntaTexto: {
        flex: 8,
        fontSize: 18,
        color: '#ffffff',
        alignSelf: 'center',
        fontWeight: 'bold',
        textAlign: 'center',

    },
}

export default Perguntas