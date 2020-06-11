export default function reducer (store = {user: {score: 0} }, action){
	switch (action.type){
		case 'Score':
			return {...store, user:{score: action.score}}
		default:
			return store
	}
}