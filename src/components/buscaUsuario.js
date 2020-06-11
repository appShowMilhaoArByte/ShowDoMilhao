import axios from 'axios'

function buscaUsuario() {

    return axios.get('https://api-showdomilhao.herokuapp.com/players')
        .then(res => {
            return res.data
        })
}

export default buscaUsuario