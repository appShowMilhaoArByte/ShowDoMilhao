import axios from 'axios'

function mostrarDadosperfil() {
    return axios.get(`https://api-showdomilhao.herokuapp.com/players/1`)
        .then(resposta => {           
            console.log(`nome: ${resposta.data.nickname}`)
            console.log(`maior pontuação: ${resposta.data.maxScore}`)

        })
        .catch(() => console.log('chegou'))
}
export default mostrarDadosperfil;

mostrarDadosperfil()
