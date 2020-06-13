export default function reducerPergunta (store = {question:0}, action){
	switch (action.type){
		case 'Incrementa':
			return {...store, question: action.question}
		default:
			return store
	}
} 

