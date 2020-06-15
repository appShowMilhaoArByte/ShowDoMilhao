import 'react-native-gesture-handler'
import React, { useState } from 'react'
import { Alert, Text, View, StyleSheet, Image, TextInput, TouchableOpacity, StatusBar, ScrollView, ToastAndroid, ActivityIndicator } from 'react-native'
import logo from '../images/logo.png'
import { connect } from 'react-redux'
import action from '../actions/login'
import logon from '../components/logon'
import validacaoEmail from '../components/validacaoEmail'

const PaginaLogin = ({ navigation, dispatch }) => {
    const [login, setLogin] = useState('')
    const [senha, setSenha] = useState('')
    const [visible, setVisible] = useState(false)
    const isLoginValid = () => login != '' && senha != '';

    const Toast = () => {
        ToastAndroid.showWithGravity('Dados incorretos',
            ToastAndroid.LONG,
            ToastAndroid.CENTER,
        )
    }

    const validacaologin = () => {
        if (!isLoginValid()) {
            return Alert.alert("Preencha os campos obrigatórios!")
        } else if (validacaoEmail(login.toLowerCase())) {
            setVisible(true)
            logon(login.toLowerCase(), senha)
                .then(usuario => {
                    if (usuario === undefined) {
                        setVisible(false)
                        Toast()
                        // Alert.alert('Dados incorretos')
                    } else {
                        setTimeout(() => {
                            dispatch(action(usuario))
                            navigation.navigate('PaginaHome')
                            setVisible(false)
                        }, 1000);
                    }
                })
                .catch(err => Alert.alert('Não está respondendo. ', err.message))
        }
    }

    return (
        <View style={styles.containerActivity}>
            {visible ? <ActivityIndicator size='large' color='purple' /> :
                <ScrollView style={styles.container}>
                    <StatusBar backgroundColor={'#172178'} />
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
                        <Image style={styles.logo} source={logo} />
                    </View>
                    <View style={styles.caixaDeLogin}>
                        <Text style={styles.textoLogin}>Email:</Text>
                        <TextInput style={styles.entradaDeTexto}
                            placeholder='  Seu Email'
                            placeholderTextColor='gray'
                            value={login}
                            keyboardType={'email-address'}
                            onChangeText={login => { setLogin(login) }}
                        />
                        <Text style={styles.textoSenha}>Senha:</Text>
                        <TextInput style={styles.entradaDeTexto}
                            placeholder='  Sua senha'
                            placeholderTextColor='gray'
                            keyboardType={'default'}
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
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#172178',
        flex: 1,
    },
    containerActivity: {
        backgroundColor: '#172178',
        flex: 1,
        justifyContent: 'center',
    },
    logo: {
        width: 180,
        height: 100,
        margin: 30
    },
    caixaDeLogin: {
        width: '85%',
        flex: 1,
        marginBottom: 30,
    
        backgroundColor: 'gold',
        alignSelf: 'center',
        borderRadius: 15,
        borderColor: '#172178',
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
    textoLogin: {
        paddingHorizontal: 6,
        marginTop: 5,
        fontSize: 16,
        fontWeight: 'bold',
    },
    textoSenha: {
        paddingHorizontal: 6,
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

const mapStoreToProps = (store) => {
    return { user: store.reducer.user }
}

export default connect(mapStoreToProps)(PaginaLogin)