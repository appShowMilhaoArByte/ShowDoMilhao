import axios from 'axios'

function efetuarLogin() {

    return axios.get('https://api-showdomilhao.herokuapp.com/players')
    .then(res => {
        return res.data
    })
}


export default efetuarLogin