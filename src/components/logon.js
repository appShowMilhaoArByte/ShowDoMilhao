import axios from 'axios'

function logon(email, password) {

    return axios.post('https://api-showdomilhao.herokuapp.com/logon',{
        email: email,
        password: password
    })
        .then(res => {
            return res.data[0]
        })
}

export default logon