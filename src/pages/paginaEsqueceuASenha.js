import React, { useState } from 'react'
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, StatusBar, ScrollView, Alert } from 'react-native'
import logo from '../images/logo.png'
import axios from 'axios'
import validacaoEmail from '../components/validacaoEmail'
const PaginaLogin = ({ navigation }) => {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [confirmaSenha, setConfirmaSenha] = useState('')
    const isFormValid = () => email != '' && senha != '';
    const recuperaSenha = () => {
        if (senha !== confirmaSenha) {
            return Alert.alert("As senhas digitadas não coincidem!")
        }
        if (!isFormValid()) {
            return Alert.alert("Preencha os campos obrigatórios!")
        }else if(validacaoEmail(email.toLowerCase())){
            axios.get('https://api-showdomilhao.herokuapp.com/players/')
                .then(resultado => {
                    const usuarios = resultado.data
                    const usuarioLocalizado = usuarios.find(item => item.email === email.toLowerCase())
                    if (usuarioLocalizado === undefined) {
                        Alert.alert('Email não encontrado')
                    } else {
                        axios.put('https://api-showdomilhao.herokuapp.com/updateSenha', { email: usuarioLocalizado.email, password: senha })
                        Alert.alert('Senha Alterada')
                        navigation.navigate('PaginaLogin')
                    }
                })
                .catch(e => console.log('error', e))
        }
    }

    return (
        <ScrollView style={styles.container}>
            <StatusBar backgroundColor={'#172178'} />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
                <Image style={styles.logo} source={logo} />
            </View>
            <View style={styles.caixaDeLogin}>
                <Text style={styles.textoCaixaDeLogin}>E-Mail:</Text>
                <TextInput style={styles.entradaDeTexto}
                    placeholder='  Seu e-mail'
                    placeholderTextColor='gray'
                    value={email}
                    keyboardType={'email-address'}
                    onChangeText={text => setEmail(text)}
                />
                <Text style={styles.textoCaixaDeLogin}>Nova senha:</Text>
                <TextInput style={styles.entradaDeTexto}
                    placeholder='  Nova senha'
                    placeholderTextColor='gray'
                    secureTextEntry={true}
                    value={senha}
                    keyboardType={'default'}
                    onChangeText={senha => { setSenha(senha) }}
                />
                <Text style={styles.textoCaixaDeLogin}>Confirmar senha:</Text>
                <TextInput style={styles.entradaDeTexto}
                    placeholder='  Confirmar senha'
                    placeholderTextColor='gray'
                    secureTextEntry={true}
                    keyboardType={'default'}
                    value={confirmaSenha}
                    onChangeText={confirmaSenha => { setConfirmaSenha(confirmaSenha) }}
                />
            </View>
            <View style={styles.containerButton}>
                <TouchableOpacity style={styles.button}
                    onPress={() => { recuperaSenha() }}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default PaginaLogin

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#172178',
        flex: 1,
    },
    logo: {
        width: 180,
        height: 100,
        margin: 30
    },
    caixaDeLogin: {
        width: '85%',
        flex: 1.5,
        backgroundColor: 'gold',
        alignSelf: 'center',
        borderRadius: 15,
        borderColor: '#ffdd55',
        borderWidth: 1,
        paddingHorizontal: 10,
    },
    entradaDeTexto: {
        width: '98%',
        height: 30,
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 5,
        marginVertical: 8,
        marginHorizontal: 2,
        backgroundColor: '#c4c4c4',
        paddingLeft: 7
    },
    textoCaixaDeLogin: {
        paddingHorizontal: 6,
        paddingTop: 12,
        fontSize: 16,
        fontWeight: 'bold'
    },
    botaoCadastrar: {
        textAlign: 'center',
        color: 'gold',
        fontSize: 20,

    },
    containerButton: {
        flex: 1
    },
    button: {
        justifyContent: 'space-evenly',
        alignSelf: 'center',
        backgroundColor: '#b71b1b',
        width: 150,
        height: 50,
        shadowColor: "#000",
        borderColor: 'gold',
        borderWidth: 1,
        marginVertical: 60,
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
        borderRadius: 10
    },
    buttonText: {
        textAlign: "center",
        fontSize: 18,
        color: '#EBCD06',
    }
})