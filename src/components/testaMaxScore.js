import 'react-native-gesture-handler'
import connect from 'react-redux'
import action from '../actions/maxScore'

function testaMaxScore({dispatch}){
    if(score > maxScore){
        dispatch(action(score))
    }
}

const mapStoreToProps = store => {
    return {
        score: store.user.score,
        maxScore: store.user.maxScore
    }
}

export default connect(mapStoreToProps)(testaMaxScore)