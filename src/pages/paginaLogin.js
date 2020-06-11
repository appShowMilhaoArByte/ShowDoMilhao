import 'react-native-gesture-handler'
import React, { useState } from 'react'
import { Alert, Text, View, StyleSheet, Image, TextInput, TouchableOpacity, StatusBar, ScrollView } from 'react-native'
import logo from '../images/logo.png'
import { connect } from 'react-redux'
import action from '../actions/login'
import logon from '../components/logon'

const PaginaLogin = ({ navigation, dispatch }) => {
    const [login, setLogin] = useState('')
    const [senha, setSenha] = useState('')

    
    const isLoginValid = () => login != '' && senha != '';

    const validacaologin = () => {
        if (!isLoginValid()) {
            return Alert.alert("Preencha os campos obrigatórios!")
        }

        logon(login, senha)
        .then(usuario => {
            dispatch(action(usuario))
            navigation.navigate('PaginaHome')
            })
            .catch(err => Alert.alert('Não está respondendo. ', err.message))
    }
    
    return (
        <ScrollView style={styles.container}>
            <StatusBar backgroundColor={'#172178'}/>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
                <Image style={styles.logo} source={logo} />
            </View>
            <View style={styles.caixaDeLogin}>
                <Text style={styles.textoLogin}>Login:</Text>
                <TextInput style={styles.entradaDeTexto}
                   placeholder='  Seu login'
                   placeholderTextColor='gray'
                   value={login}
                   onChangeText={login => { setLogin(login) }}
                />
                <Text style={styles.textoSenha}>Senha:</Text>
                <TextInput style={styles.entradaDeTexto}
                   placeholder='  Sua senha'
                   placeholderTextColor='gray'
                   secureTextEntry={true}
                   value={senha}
                   onChangeText={senha => { setSenha(senha) }}
                />
            </View>
            <View>
                <TouchableOpacity
                 onPress={() => { navigation.navigate('PaginaCadastro') }}>
                    <Text style={styles.botaoCadastrar}>Cadastrar-se</Text>
                </TouchableOpacity>
                <TouchableOpacity
                 onPress={() => { navigation.navigate('PaginaEsqueceuASenha') }}>
                    <Text style={styles.botaoCadastrar}>Esqueceu a Senha?</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.containerButton}>
                <TouchableOpacity style={styles.button}
                    onPress={validacaologin}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>
            </View>

        </ScrollView>
    )
}

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
        flex: 1,
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
        backgroundColor: '#c4c4c4'
    },
    textoLogin: {
        paddingHorizontal: 6,
        marginTop: 20,
        fontSize: 16,
        fontWeight: 'bold',
    },
    textoSenha: {
        paddingHorizontal: 6,
        fontSize: 18,
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

const mapStoreToProps = (store) => {
    return {user: store.user}
}

export default connect(mapStoreToProps)(PaginaLogin)