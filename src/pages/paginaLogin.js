import 'react-native-gesture-handler'
import React from 'react'
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, StatusBar } from 'react-native'
import logo from '../images/logo.png'

const PaginaLogin = ({ navigation }) => {
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
                />
                <Text style={styles.textoSenha}>Senha:</Text>
                <TextInput style={styles.entradaDeTexto}
                    placeholder='  Sua senha'
                    placeholderTextColor='gray'
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
                    onPress={() => { navigation.navigate('PaginaHome') }}>
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
        backgroundColor: '#ffdd55',
        alignSelf: 'center',
        borderRadius: 30,
        borderColor: '#ffdd55',
        borderWidth: 1,
        paddingHorizontal: 10,
    },
    entradaDeTexto: {
        width: '98%',
        height: 30,
        borderWidth: 2,
        borderColor: '#172178',
        borderRadius: 10,
        marginVertical: 8,
        marginHorizontal: 2,
        backgroundColor: '#c4c4c4'
    },
    textoLogin: {
        paddingHorizontal: 6,
        marginTop: 20,
        fontSize: 20,
        fontWeight: 'bold',
    },
    textoSenha: {
        paddingHorizontal: 6,
        fontSize: 20,
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