import 'react-native-gesture-handler'
import React from 'react'
import { View, Image, StatusBar, ScrollView, Alert, Text, ActivityIndicator } from 'react-native'
import Botao from '../components/Botao'
import atualizaRanking from '../components/getRanking'
import { TouchableOpacity } from 'react-native-gesture-handler'
import axios from 'axios'



class PaginaRanking extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            listaDeNomes: [],
            listaDePontos: [],
            posicao: 0,
            indiceNomes: 0,
            indicePontos: 0,
            visible: false
        }

    }
    componentDidMount() {
        this.setState({ visible: true })
        axios.get(`https://api-showdomilhao.herokuapp.com/ranking`)
            .then(player => {
                const nome = []
                const pontos = []

                player.data.map(player => {
                    nome.push(player.nickname)
                    pontos.push(player.maxScore)
                })

                this.setState({ listaDeNomes: nome, listaDePontos: pontos, visible: false })


            })
            .catch(err => {
                return Alert.alert('Não está respondendo. ', err.message)
            })
    }

    Card = ({ posicao, indiceNomes, indicePontos }) => {
        return (
            <TouchableOpacity style={styles.styleCard}>
                <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                    <View style={{ flex: 1 }}>
                        <Text style={{ color: 'white', fontWeight: 'bold' }}>  {posicao}º</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={{ color: 'white', fontWeight: 'bold' }}>{this.state.listaDeNomes[indiceNomes]}</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={{ color: 'white', fontWeight: 'bold' }}>          R${this.state.listaDePontos[indicePontos]}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    render() {
        console.log(this.state.listaDeNomes);
        return (
            <View style={[styles.container, {alignContent:"center", justifyContent:'center', flex:1}]}>

                {this.state.visible ? <ActivityIndicator size={"large"} color={'purple'}/> :
                    <View style={styles.container}>
                        <StatusBar backgroundColor={'#172178'} />
                        <View style={{ flex: 1 }}>
                            <Image
                                source={require('../images/logo.png')}
                                style={styles.logo}
                            />
                        </View>
                        <View style={styles.containerScroll}>
                            <ScrollView style={styles.containerCards}>
                                <this.Card posicao={1} indiceNomes={0} indicePontos={0} />
                                <this.Card posicao={2} indiceNomes={1} indicePontos={1} />
                                <this.Card posicao={3} indiceNomes={2} indicePontos={2} />
                                <this.Card posicao={4} indiceNomes={3} indicePontos={3} />
                                <this.Card posicao={5} indiceNomes={4} indicePontos={4} />
                            </ScrollView>
                        </View>
                        <View style={styles.containerButtons}>
                            <View style={{ flex: 1 }}>
                                <TouchableOpacity style={styles.button}
                                    onPress={() => { this.props.navigation.navigate('PaginaHome') }}
                                >
                                    <Text style={styles.buttonText}>Menu</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flex: 1 }}>
                                <TouchableOpacity style={styles.button}
                                    onPress={() => { this.props.navigation.navigate('PaginaJogo') }}
                                >
                                    <Text style={styles.buttonText}>Jogar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                }
            </View>

        )

    }

}


const styles = {
    container: {
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#172178',
    },
    containerScroll: {
        flex: 2.5,
    },
    logo: {
        width: 180,
        height: 100,
        margin: 30
    },
    containerCards: {
        height: 250,
        width: 400,
        backgroundColor: '#9a031e',
        borderColor: '#ffdd55',
        borderWidth: 2,
        margin: 20,
        borderRadius: 15,


    },
    containerButtons: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    text: {
        borderColor: '#EBCD06',
        height: 35,
        width: 200,
        backgroundColor: '#172178',
        borderWidth: 2,
        margin: 20,
        borderRadius: 11,
    },
    styleCard: {
        borderColor: '#ffdd55',
        height: 40,
        width: 350,
        backgroundColor: '#9a031e',
        borderWidth: 2,
        margin: 20,
        borderRadius: 11,
        justifyContent: 'center',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
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
}

export default (PaginaRanking)