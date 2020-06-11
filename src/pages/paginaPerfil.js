import React from 'react'
import { View, Image, StatusBar} from 'react-native'
import CampoPosicao from '../components/CampoPosicao';
import BotaoPararPular from '../components/botaoPularParar';

const PaginaPerfil = ({ navigation,dispatch }) => {
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
            <CampoPosicao title={'Ninja'} />
            <View style={styles.containerButton}>
            
                <CampoPosicao title={'Maior Pontuação --- > '} />
                <CampoPosicao title={'Pontuação Atual --- >'} />
                <CampoPosicao title={'Quantidade De Partidas Jogadas --- >'} />
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
        margin: 10,
        flex: 1,
        width: 350,
        height: 180,
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

const mapProps = ({store}) => {
    return {
        nome: store.nome,
        maiorPontuacao: store.maiorPontuacao,
        pontuacaoAtual: store.pontuacaoAtual,
        quantidadeDePartidas: store.quantidadeDePartidas
    }
};
export default connect(mapProps)(PaginaPerfil);
