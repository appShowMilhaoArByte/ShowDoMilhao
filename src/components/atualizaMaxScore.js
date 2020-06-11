import axios from 'axios'

function atualizaMaxScore(pontos) {

    return axios.put('https://api-showdomilhao.herokuapp.com/maxScore', {
        maxScore: pontos
    })
        .then(res => {
            return res.data
        })
}

export default atualizaMaxScore