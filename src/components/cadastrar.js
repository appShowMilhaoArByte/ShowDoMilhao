import axios from 'axios'

function cadastrar(email, login, senha) {

    return axios.post('https://api-showdomilhao.herokuapp.com/players', {
        nickname: login,
        email: email,
        password: senha,
    })
        .then(res => {
            return res.data
        })
}

export default cadastrar