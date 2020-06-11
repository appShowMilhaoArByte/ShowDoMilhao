import axios from 'axios'

function atualizaScore(pontos) {

    return axios.put('https://api-showdomilhao.herokuapp.com/score', {
        score: pontos
    })
        .then(res => {
            return res.data
        })
}

export default atualizaScore