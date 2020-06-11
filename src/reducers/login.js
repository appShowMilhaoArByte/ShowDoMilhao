export function reducer (store, action){
	switch (action.type){
		case 'Login':
			return {...store, user: action.user}
		default:
			return store
	}
}