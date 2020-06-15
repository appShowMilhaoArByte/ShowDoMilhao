export default function reducer (store = {user:{}}, action){
	switch (action.type){
		case 'Login':
			console.log('reducer: ',store,action.user);
			return {...store, user: action.user}
		case 'Score':
			return {...store, user: {...store.user, score: action.score}}
		case 'maxScore':
			return {...store, user: {...store.user, maxScore: action.maxScore}}
		case 'nOfMatches':
			return {...store, user: {...store.user, nOfMatches: action.nOfMatches}}
		case 'playerNames':
			return {...store, topNomes: action.playerNames}
		case 'playerMaxScore':
			return {...store, topPontos: action.playerMaxScore}
		default:
			return store
	}
} 

