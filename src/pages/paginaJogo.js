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

    //         BackHandler.addEventListener('hardwareBackPress', () => {
    //             // ToastAndroid.show('Você não pode voltar, continue jogando', ToastAndroid.SHORT)
    //             return true
    //         })

    //     return () => BackHandler.addEventListener('hardwareBackPress', () => { return false })
    // },[])

    // useEffect(() => {
    //     reiniciaJogo()
    //     return () => reiniciaJogo()
    // }, [])

    // const reiniciaJogo = () => {
    //     console.log('reiniciaJogo: ');
    //      setPerguntasRespondidas({})
    //      setPulo(0)
    // }

    const premio = [1000, 2000, 3000, 4000, 5000, 10000, 20000, 30000, 40000, 50000, 100000, 200000, 300000, 400000, 500000, 1000000]
    const parar = premio[question] / 2
    const errar = premio[question] / 4

    const [perguntasRespondidas, setPerguntasRespondidas] = useState({})
    const [pulo, setPulo] = useState(0)
    const [buttonPulo, setButtonPulo] = useState(false)
    const [paraContador, setParaContador] = useState(0)

    const numero = geraDificiculdade(perguntasRespondidas, question)
    const pergunta = perguntas[numero]
    const alternativa = pergunta.Answers
    const correta = pergunta.CorrectAnswer

    function testaMaxScore(score, maxScore) {
        if (score >= maxScore) {
            dispatch(maxAction(score))
        }
    }

    const respostaDaPergunta = (resposta) => {
        if (question === 14) {
            setButtonPulo(true)
        }
        if (question > 14) {
            setParaContador(1)
            dispatch(action(premio[question]))
            dispatch(maxAction(premio[question]))
            dispatch(nOfMatches(user.nOfMatches + 1))
            navigation.navigate('PaginaFimdeDeJogo', { data: { indicePremio: question, resposta: resposta } })
        } else if (resposta) {
            dispatch(incrementa(question + 1))
        } else if (!false && question === 0) {
            setParaContador(1)
            dispatch(nOfMatches(user.nOfMatches + 1))
            dispatch(action(0))
            navigation.navigate('PaginaFimdeDeJogo', { data: { indicePremio: question, resposta: resposta } })
        } else {
            setParaContador(1)
            dispatch(nOfMatches(user.nOfMatches + 1))
            dispatch(action(errar))
            testaMaxScore(errar, user.maxScore)
            navigation.navigate('PaginaFimdeDeJogo', { data: { indicePremio: question, resposta: resposta } })
        }
    }

    const onPresspular = () => {
        if (pulo < 3) {
            setPulo(pulo + 1)
            if (pulo == 2) {
                setButtonPulo(true)
            }
        }
    }

    const onPressParou = () => {
        setParaContador(1)
        dispatch(action(parar))
        dispatch(nOfMatches(user.nOfMatches + 1))
        testaMaxScore(parar, user.maxScore)
        navigation.navigate('PaginaFimdeDeJogo', { data: { indicePremio: question, resposta: 'PAROU' } })
    }

    const contadorZerou = () => {
        dispatch(nOfMatches(user.nOfMatches + 1))
        dispatch(action(0))
        navigation.navigate('PaginaFimdeDeJogo', { data: { indicePremio: 0, resposta: 'TEMPO' } })
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'#172178'} />
            <Perguntas pergunta={pergunta} indicePergunta={question} contadorZerou={contadorZerou} paraContador={paraContador} />
            <Alternativas alternativas={alternativa} correta={correta} respostaDaPergunta={respostaDaPergunta} />
            <Posicao indice={question} />
            <Botoes onPresspular={onPresspular} pulo={pulo} onPressParou={onPressParou} indicePergunta={question} buttonPulo={buttonPulo} />
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