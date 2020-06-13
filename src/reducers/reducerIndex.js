import { combineReducers } from 'redux'
import reducer from './reducer'
import reducerPergunta from './reducerPergunta'

export default combineReducers({
  reducer,
  reducerPergunta
})