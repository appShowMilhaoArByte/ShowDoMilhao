export default function reducer (store = {user:{}}, action){
	switch (action.type){
		case 'Login':
			return {...store, user: action.user}
		default:
			return store
	}
} 