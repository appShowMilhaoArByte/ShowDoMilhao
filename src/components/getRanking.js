import axios from 'axios'
import { Alert } from 'react-native'

export default function getRanking() {
    return axios.get(`https://api-showdomilhao.herokuapp.com/ranking`)
        .then(player => {
            const dados = {
                nome: [],
                pontos: []
            }

            player.data.map(player => {
                dados.nome.push(player.nickname)
                console.log('player.nickname: ', player.nickname);
                dados.pontos.push(player.maxScore)
            })

            return dados
        })
        .catch(err => {
            return Alert.alert('Não está respondendo. ', err.message)
        })
}