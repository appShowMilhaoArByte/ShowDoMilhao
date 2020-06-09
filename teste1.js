import React from 'react';
import { SafeAreaView, View, Text, ImageBackground, Image, ScrollView, Alert } from 'react-native';
import image from '../img/background_milhao.jpg'
import logo from '../img/icone_milhao.png'
import Styles from '../styles/Styles'
import Botao from '../components/Botao'
import CaixaDeSenha from '../components/CaixaDeSenha';
import CaixaDeTexto from '../components/CaixaDeTexto';
import axios from 'axios';
class Registrar extends React.Component {
    constructor() {
        super();
        this.state = {
            nickname: '',
            email: '',
            password: '',
            pass_confirmation: ''
        }
    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={Styles.container}>
                    <ImageBackground source={image} style={Styles.background}>
                        <ScrollView>
                            <View style={{ alignItems: "center", justifyContent: "center", height: 180 }}>
                                <Image source={logo} style={Styles.logo} />
                            </View>
                            <View style={{ alignItems: "center", justifyContent: "flex-end", flex: 3 }}>
                                <Text style={{ fontSize: 40, color: 'white', marginBottom: 20 }}>Crie sua conta</Text>
                                <CaixaDeTexto placeholder='Nickname' onChangeText={nickname => this.setState({ nickname: this.state.nickname = nickname })} />
                                <CaixaDeTexto placeholder='E-mail' marginTop={20} onChangeText={email => this.setState({ email: this.state.email = email })} />
                                <CaixaDeSenha placeholder='Senha' marginTop={20} onChangeText={password => this.setState({ password: this.state.password = password })} />
                                <CaixaDeSenha placeholder='Confirma senha' marginTop={20} onChangeText={pass_confirmation => this.setState({ pass_confirmation: this.state.pass_confirmation = pass_confirmation })}/>
                            </View>
                            <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
                                <Botao width={190} height={55} text='Registre-se'
                                    onPress={() => {
                                        if (this.state.nickname != '' && this.state.email != '' && this.state.password != '' && this.state.pass_confirmation != '') {
                                            axios.post('https://show-do-milhao-app.herokuapp.com/players', {
                                                nickname: this.state.nickname,
                                                email: this.state.email,
                                                password: this.state.password,
                                            })
                                                .then(function (response) {
                                                    console.log(response);
                                                })
                                                .catch(function (error) {
                                                    console.log(error);
                                                })
                                            this.props.navigation.navigate('SeRegistro')
                                        }else{
                                            Alert.alert("Erro!", 'Você não preencheu todas os campos');
                                        }
                                    }} />
                            </View>
                        </ScrollView>
                    </ImageBackground>
                </View>
            </SafeAreaView>
        )
    }
}
export default Registrar;