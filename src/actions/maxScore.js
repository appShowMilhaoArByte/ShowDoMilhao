export default function action(score){
	return ({
		type: 'maxScore',
		maxScore: score
	})
} 