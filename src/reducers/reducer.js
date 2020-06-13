export default function reducer (store = {user:{}}, action){
	switch (action.type){
		case 'Login':
			console.log('reducer: ',store,action.user);
			return {...store, user: action.user}
		case 'Score':
			return {...store, user: {...store.user, score: action.score}}
		case 'maxScore':
			return {...store, user: {...store.user, maxScore: action.maxScore}}
		default:
			return store
	}
} 