import React, { useState } from 'react'
import { Text, View, TouchableOpacity, Modal } from 'react-native'

const ModalParar = ({ indicePergunta, setModalVisible, modalVisible, onPressParou }) => {
    const premio = [1000, 2000, 3000, 4000, 5000, 10000, 20000, 30000, 40000, 50000, 100000, 200000, 300000, 400000, 500000, 1000000]
    const parar = premio[indicePergunta] / 2
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.textModal}>Quer mesmo parar o jogo ?</Text>
                    <Text style={styles.textModal}>Voce vai ficar com: R${premio[indicePergunta] == 1000 ? 0 : parar} </Text>
                    <View style={{ flexDirection: "row" }}>
                        <TouchableOpacity
                            style={styles.openButton}
                            onPress={() => { setModalVisible() }}>
                            <Text style={styles.textModalButton}>Cancelar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.openButton, { ...styles.openButton, marginLeft: 10 }]}
                            onPress={() => { setModalVisible(), onPressParou() }}>
                            <Text style={styles.textModalButton}>Confirmar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default ModalParar;

const styles = {
    openButton: {
        backgroundColor: "#172178",
        borderRadius: 20,
        padding: 15,
        elevation: 15,
        marginTop: 10
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "#ffffff",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    textModal: {
        fontSize: 22,
        color: '#9a031e'
    },
    textModalButton: {
        fontSize: 15,
        color: '#ffdd55',
        fontWeight: "bold"
    }
}