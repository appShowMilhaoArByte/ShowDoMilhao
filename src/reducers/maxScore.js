export default function reducer (store = {user: {maxScore: 0} }, action){
	switch (action.type){
		case 'maxScore':
			return {...store, user:{maxScore: action.score}}
		default:
			return store
	}
}