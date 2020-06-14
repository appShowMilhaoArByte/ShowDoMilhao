import React, { useState } from 'react'
import { Text, View, Modal, TouchableOpacity, ToastAndroid } from 'react-native'
import { Button } from 'react-native-elements'
import ModalParar from './modalBotaoParar';

const Botoes = ({ onPressParou, onPresspular, pulo, indicePergunta, buttonPulo }) => {

    const [modalVisible, setModalVisible] = useState(false);
    const onPressParar = () => {
        if (indicePergunta === 0) {
            //  Alert.alert('Voce não pode para na primeira pergunta')
            ToastAndroid.show('Você não pode para na primeira pergunta', ToastAndroid.SHORT)
        } else {
            setModalVisible(true)
        }
    }

    const visible = () => {
        setModalVisible(!modalVisible)
    }

    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', paddingVertical: 20 }}>
            <Button title={`PULAR ${pulo}/3`}
                onPress={onPresspular}
                disabled={buttonPulo}
                type='outline'
                buttonStyle={styles.styleButton}
                titleStyle={styles.buttonText} />
            <Button title='PARAR'
                onPress={onPressParar}
                type='outline'
                buttonStyle={styles.styleButton}
                titleStyle={styles.buttonText} />
            <ModalParar
                indicePergunta={indicePergunta}
                modalVisible={modalVisible}
                setModalVisible={visible}
                onPressParou={onPressParou}
            />
        </View>
    )
}
const styles = {
    styleButton: {
        borderColor: '#ffdd55',
        height: 40,
        width: 180,
        backgroundColor: '#9a031e',
        borderWidth: 2,
        margin: 20,
        borderRadius: 11,
        justifyContent: 'center',
        alignItems: 'center',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
    },
    buttonText: {
        textAlign: "center",
        fontSize: 20,
        color: '#ffffff',
    }
}


export default Botoes