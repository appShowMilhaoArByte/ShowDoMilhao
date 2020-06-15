
export default function action(playerMaxScore){
	return ({
		type: 'playerMaxScore',
		playerMaxScore: playerMaxScore
	})
}