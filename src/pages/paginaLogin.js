import 'react-native-gesture-handler'
import React, { useState } from 'react'
import { Alert, Text, View, StyleSheet, Image, TextInput, TouchableOpacity, StatusBar } from 'react-native'
import logo from '../images/logo.png'
import efetuarLogin from '../components/validaLogin'

const PaginaLogin = ({ navigation }) => {
    const [login, setLogin] = useState('')
    const [senha, setSenha] = useState('')

    
    const isLoginValid = () => login != '' && senha != '';

    const validacaologin = () => {
        if (!isLoginValid()) {
            return Alert.alert("Preencha os campos obrigatórios!")
        }        

        efetuarLogin()
            .then(resposta => {
                let loginApi = resposta.map(nickname => nickname.nickname);
                let senhaApi = resposta.map(password => password.password);
                
                if( loginApi.indexOf(login) >= 0 && senha === senhaApi[loginApi.indexOf(login)] ){
                        navigation.navigate('PaginaHome ')  
                } else {
                    return Alert.alert("Dados incorretos!")
                }

            })
            .catch(err => Alert.alert('Não respondendo. ', err.message))
        
    }
    
    return (
        <View style={styles.container}>
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

        </View>
    )
}

export default PaginaLogin

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#172178',
        flex: 1,
        alignItems: 'center'
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