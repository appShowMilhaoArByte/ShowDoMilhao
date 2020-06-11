import React from 'react'
import { View, Image, StatusBar } from 'react-native'
import CampoPosicao from '../components/CampoPosicao';
import BotaoPararPular from '../components/botaoPularParar';
import { connect } from 'react-redux'

const PaginaPerfil = ({ navigation, user}) => {

    // const [maxScore] = useState('')
    // const [score] = useState('')

    // atualizaMaxScore(maxScore)
    //     .then(usuario => {
    //         dispatch(action(usuario))
    //         navigation.navigate('PaginaHome')
    //     })
    //     .catch(err => Alert.alert('Não está respondendo. ', err.message))

    // atualizaScore(score)
    //     .then(usuario => {
    //         dispatch(action(usuario))
    //         navigation.navigate('PaginaHome')
    //     })
    //     .catch(err => Alert.alert('Não está respondendo. ', err.message))
    return (
        <View style={styles.container} >
            <StatusBar backgroundColor={'#172178'} />
            <Image
                source={require('../images/logo.png')}
                style={styles.logo}
            />
            <Image
                source={require('../images/ninja.png')}
                style={styles.iconInput}
            />
            <CampoPosicao title={user.nickname}/>
            <View style={styles.containerButton}>

                <CampoPosicao title={`Maior Pontuação --- > ${user.maxScore}`}  />
                <CampoPosicao title={`Pontuação Atual --- > ${user.score}`}  />
                <CampoPosicao title={`Partidas Jogadas --- > ${user.nOfMatches}`} />
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', paddingVertical: 20 }}>
                    <BotaoPararPular title={'Jogar'} onPress={() => { navigation.navigate('PaginaJogo') }} />
                    <BotaoPararPular title={'Home'} onPress={() => { navigation.navigate('PaginaHome') }} />

                </View>
            </View>

        </View>
    )
}
const styles = {
    container: {
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#172178',
    },
    logo: {
        width: 280,
        height: 100,
        margin: 20,
    },

    textInput: {
        height: 100,
        width: 350,
        backgroundColor: '#9a031e',
        borderColor: '#f6aa1c',
        borderWidth: 2,
        margin: 20,
        borderRadius: 15,
    },
    iconInput: {
        height: 105,
        width: 105,
        borderColor: '#ffdd55',
        borderWidth: 2,
        margin: 20,
        borderRadius: 50
    },

}

const mapProps = ( store ) => {
    return {
        user: store.user,
    }
};
export default connect(mapProps)(PaginaPerfil);
