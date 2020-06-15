
export default function action(playerName){
	return ({
		type: 'PlayerNames',
		playerName: playerName
	})
}