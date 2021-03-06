import 'react-native-gesture-handler'
import React, { useState } from 'react'
import { Text, Alert, View, StyleSheet, Image, TextInput, TouchableOpacity, StatusBar, ScrollView } from 'react-native'
import logo from '../images/logo.png'
import cadastrar from '../components/cadastrar'
import validacaoEmail from '../components/validacaoEmail'

const PaginaCadastro = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [login, setLogin] = useState('')
    const [senha, setSenha] = useState('')
    const [confirmaSenha, setConfirmaSenha] = useState('')

    const isFormValid = () => login != '' && email != '' && senha != '';

    const chamarCadastro = () => {
        if (senha !== confirmaSenha) {
            return Alert.alert("As senhas digitadas não coincidem!")
        }
        if (!isFormValid()) {
            return Alert.alert("Preencha os campos obrigatórios!")
        }else if(validacaoEmail(email.toLowerCase())){
            cadastrar(email.toLowerCase(), login, senha, confirmaSenha)
                .then(resposta => {
                    console.log(resposta)
                    navigation.navigate('PaginaLogin')
                })
                .catch(err => Alert.alert('Não foi possível cadastrar. ', err.message))
        }
    }


    return (
        <ScrollView style={styles.container}>
            <StatusBar backgroundColor={'#172178'} />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
                <Image style={styles.logo} source={logo} />
            </View>

            <View style={styles.caixaDeLogin}>
                <View style={{ flex: 1 }}>
                    <Text style={styles.textoCaixaDeLogin}>E-Mail:</Text>
                    <TextInput style={styles.entradaDeTexto}
                        placeholder='  Seu e-mail'
                        placeholderTextColor='gray'
                        value={email}
                        keyboardType={'email-address'}
                        onChangeText={email => { setEmail(email) }}
                    />
                    <Text style={styles.textoCaixaDeLogin}>Login:</Text>
                    <TextInput style={styles.entradaDeTexto}
                        placeholder='  Seu login'
                        placeholderTextColor='gray'
                        value={login}
                        onChangeText={login => { setLogin(login) }}
                        keyboardType={'default'}
                        />
                    <Text style={styles.textoCaixaDeLogin}>Senha:</Text>
                    <TextInput style={styles.entradaDeTexto}
                        placeholder='  Sua senha'
                        placeholderTextColor='gray'
                        secureTextEntry={true}
                        keyboardType={'default'}
                        value={senha}
                        onChangeText={senha => { setSenha(senha) }}
                        />
                    <Text style={styles.textoCaixaDeLogin}>Confirmar Senha:</Text>
                    <TextInput style={styles.entradaDeTexto}
                        placeholder='  Confirme sua senha'
                        placeholderTextColor='gray'
                        secureTextEntry={true}
                        keyboardType={'default'}
                        value={confirmaSenha}
                        onChangeText={confirmaSenha => { setConfirmaSenha(confirmaSenha) }}
                    />
                </View>
            </View>
            <View style={styles.containerButton}>
                <TouchableOpacity style={styles.button}
                    onPress={chamarCadastro}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default PaginaCadastro

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
        flex: 2,
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
        borderColor: '#172178',
        borderRadius: 12,
        marginVertical: 8,
        marginHorizontal: 2,
        backgroundColor: '#c4c4c4',
        paddingLeft: 7
    },
    textoCaixaDeLogin: {
        paddingHorizontal: 6,
        paddingTop: 6,
        fontSize: 16,
        fontWeight: 'bold'
    },
    containerButton: {
        flex: 1
    },
    button: {
        justifyContent: 'space-evenly',
        alignSelf: 'center',
        backgroundColor: '#9a031e',
        width: 150,
        height: 50,
        shadowColor: "#000",
        borderColor: '#ffdd55',
        borderWidth: 2,
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
        color: '#ffffff',
    }
})