// async function pesquisaNome(nome) {
//     console.log(nome)
//     return await axios.get(`https://show-do-milhao-app.herokuapp.com/players/${nickname}/`)
//     console.log(`nome: ${resposta.data[0].characters}`)

// }
import {createStore} from 'redux';
import {dadosTelaPerfil} from '../reducers/dadosTelaPerfil';

export let store = createStore (dadosTelaPerfil);