import action from '../actions/maxScore'

function testaMaxScore({dispatch, score, maxScore}){
    if(score  > maxScore){
        dispatch(action(score))
    }
}

export default testaMaxScore