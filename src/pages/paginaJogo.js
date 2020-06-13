import React, { useState, useEffect } from 'react'
import { View, StatusBar, Alert, ToastAndroid, BackHandler, Text } from 'react-native'
import Perguntas from '../components/monstraPerguntas'
import Alternativas from '../components/alternativas'
import Posicao from '../components/posicao'
import { geraDificiculdade } from '../components/geraIndicePerguntas'
import Botoes from '../components/botoesJogo'
import { connect } from "react-redux"
import action from "../actions/score"
import maxAction from "../actions/maxScore"
import nOfMatches from '../actions/nOfMatches'
import incrementa from '../actions/incrementa'

const perguntas = require('../db/questions.json')
const PaginaJogo = ({ navigation, dispatch, user, question }) => {
   
    // useEffect(() => {
    //     function botao() {
    //         BackHandler.addEventListener('hardwareBackPress', () => {
    //             ToastAndroid.show('Você não pode voltar, continue jogando', ToastAndroid.SHORT)
    //             return false
    //         })
    //     }
    //     return () => BackHandler.addEventListener('hardwareBackPress', () => { return false })
    // })

    // useEffect(() => {
    //     reiniciaJogo()
    //     return () => geraNovaPergunta(0)
    // }, [indicePergunta])

    // const reiniciaJogo = () => {
    //     geraNovaPergunta(0)
    // }
    const premio = [1000, 2000, 3000, 4000, 5000, 10000, 20000, 30000, 40000, 50000, 100000, 200000, 300000, 400000, 500000, 1000000]
    const [indicePergunta, geraNovaPergunta] = useState(0)
    const [perguntasRespondidas, setPerguntasRespondidas] = useState({})
    const [pulo, setPulo] = useState(0)
    const [buttonPulo, setButtonPulo] = useState(false)
    const parar = premio[question] / 2
    const errar = premio[question] / 4
    const numero = geraDificiculdade(perguntasRespondidas, question)
    const pergunta = perguntas[numero]
    const alternativa = pergunta.Answers
    const correta = pergunta.CorrectAnswer
    const [gambis, setGambis] = useState(0)

    function testaMaxScore(score, maxScore) {
        if (score >= maxScore) {
            dispatch(maxAction(score))
        }
    }

    const respostaDaPergunta = (acertou) => {
        if (question === 14) {
            setButtonPulo(true)
        }
        if (question > 14) {
            setGambis(1)
            dispatch(action(premio[question]))
            dispatch(maxAction(premio[question]))
            dispatch(nOfMatches(user.nOfMatches + 1))
            navigation.navigate('Parou', { data: { indicePremio: question, resposta: acertou } })
        } else if (acertou) {
            dispatch(incrementa(question + 1))
        } else if (!false && question === 0) {
            setGambis(1)
            dispatch(nOfMatches(user.nOfMatches + 1))
            dispatch(action(0))
            navigation.navigate('Parou', { data: { indicePremio: question, resposta: acertou } })
        } else {
            setGambis(1)
            dispatch(nOfMatches(user.nOfMatches + 1))
            dispatch(action(errar))
            testaMaxScore(errar, user.maxScore)
            navigation.navigate('Parou', { data: { indicePremio: question, resposta: acertou } })
        }
    }
    
    const pular = () => {
        if (pulo < 3) {
            setPulo(pulo + 1)
            if (pulo == 2) {
                setButtonPulo(true)
            }
        }
    }
    
    const parou = () => {
        setGambis(1)
        dispatch(action(parar))
        dispatch(nOfMatches(user.nOfMatches + 1))
        testaMaxScore(parar, user.maxScore)
        navigation.navigate('Parou', { data: { indicePremio: question, resposta: 'PAROU' } })
    }

    const contadorZerou = () => {
        dispatch(nOfMatches(user.nOfMatches + 1))
        dispatch(action(0))
        navigation.navigate('Parou', { data: { indicePremio: 0, resposta: 'TEMPO' } })
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'#172178'} />
            <Perguntas pergunta={pergunta} indicePergunta={question} contadorZerou={contadorZerou} gambis={gambis} />
            <Alternativas alternativas={alternativa} correta={correta} respostaDaPergunta={respostaDaPergunta} />
            <Posicao indice={question} />
            <Botoes pular={pular} pulo={pulo} parou={parou} indicePergunta={question} buttonPulo={buttonPulo} />
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
        user: store.reducer.user,
        question: store.reducerPergunta.question
    }
}

export default connect(mapStoreToProps)(PaginaJogo)