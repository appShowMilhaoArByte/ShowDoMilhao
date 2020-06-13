import React from 'react'
import { View, Text, StyleSheet } from "react-native";

function tempo(premio) {
    return (
        <View>
            <Text style={styles.texto}>{premio == 0 ? <Text> Tempo esgotado ! {'\n'} Voce perdeu tudo! </Text> :
                    <Text> Tempo esgotado ! {'\n'} Sua premiação foi: {'\n'} {premio} </Text>
            }</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    texto: {
        // flex: 1,
        textAlign: 'center',
        color: '#ffffff',
        fontSize: 25,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default tempo