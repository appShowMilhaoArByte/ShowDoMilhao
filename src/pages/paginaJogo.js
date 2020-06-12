import React, { useState, useEffect } from 'react'
import { View, StatusBar } from 'react-native'
import Perguntas from '../components/monstraPerguntas'
import Alternativas from '../components/alternativas'
import Posicao from '../components/posicao'
import { geraDificiculdade } from '../components/geraIndicePerguntas'
import Botoes from '../components/botoesJogo'
import { connect } from "react-redux"
import action from "../actions/score"
import maxAction from "../actions/maxScore"

const perguntas = require('../db/questions.json')
const PaginaJogo = ({ navigation, dispatch, user }) => {
    const premio = [1000, 2000, 3000, 4000, 5000, 10000, 20000, 30000, 40000, 50000, 100000, 200000, 300000, 400000, 500000, 1000000]

    const [perguntasRespondidas, setPerguntasRespondidas] = useState({})
    const [indicePergunta, geraNovaPergunta] = useState(0)
    const [pulo, setPulo] = useState(0)
    const [buttonPulo, setButtonPulo] = useState(false)
    const errar = premio[indicePergunta] / 4

    const numero = geraDificiculdade(perguntasRespondidas, indicePergunta)
    const pergunta = perguntas[numero]
    const alternativa = pergunta.Answers
    const correta = pergunta.CorrectAnswer

    function testaMaxScore (score, maxScore) {
        if(score  > maxScore){
            dispatch(action(score))
        }
    }

    const notificaResposta = (acertou) => {
        if (indicePergunta === 14) {
            setButtonPulo(true)
        }
        if (indicePergunta > 14) {
            dispatch(action(premio[indicePergunta]))
            dispatch(maxAction(1000000))
            navigation.navigate('Parou', { data: { indicePremio: indicePergunta, resposta: acertou } })
        } else if (acertou) {
            geraNovaPergunta(indicePergunta + 1)
        } else {
            if (indicePergunta === 0) {
                dispatch(action(0))
            } else {
                dispatch(action(errar))
                testaMaxScore(errar, user.maxScore)
            }
            navigation.navigate('Parou', { data: { indicePremio: indicePergunta, resposta: acertou } })
        }
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'#172178'} />
            <Perguntas pergunta={pergunta} />
            <Alternativas alternativas={alternativa} correta={correta} notificaResposta={notificaResposta} />
            <Posicao indice={indicePergunta} notificaResposta={notificaResposta} />
            <Botoes buttonPulo={buttonPulo} setButtonPulo={setButtonPulo} setPulo={setPulo} pulo={pulo} navigation={navigation} indicePergunta={indicePergunta} />
        </View>
    )
}

const styles = {
    container: {
        backgroundColor: '#172178',
        flex: 1,
        padding: 10,
    }
}

const mapStoreToProps = store => {
    return {
        user: store.user
    }
}

export default connect(mapStoreToProps)(PaginaJogo)