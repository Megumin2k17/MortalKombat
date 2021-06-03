//player1
const player1 = {
	name: 'Scorpion',
	hp: 100,
	img: '',
	weapon: ['dagger'],
	attack: function () {
		console.log(this.name + ` Fight`);
	}
};
//player2
const player2 = {
	name: 'Kitana',
	hp: 100,
	img: '',
	weapon: ['sword'],
	attack: function () {
		console.log(this.name + ` Fight`);
	}
};

function createPlayer(playerIdx, player) {

	let playerId = playerIdx;

	//create player
	const $player = document.createElement('div');
	$player.classList.add(player.name);
	
	//add element player to arena1
	const $arenas = document.querySelector('.arenas');
	$arenas.appendChild($player);

	//create div.progressbar и div.character
	const $progressbar = document.createElement('div');
	$progressbar.classList.add('progressbar');

	//add progressbar to player
	$player.appendChild($progressbar);

	//create div.life и div.name
	const $life = document.createElement('div');
	$life.innerText = player.hp;
	$life.classList.add('life');
	const $name = document.createElement('div');
	$name.innerText = player.name;
	$name.classList.add('name');

	//add elements life and name to progressbar
	$progressbar.appendChild($life);
	$progressbar.appendChild($name);

	//create character
	const $character = document.createElement('div');
	$character.classList.add('character');
	//add character
	$player.appendChild($character);
	//create img
	const $img = document.createElement('img');
	characterName = player.name.toLowerCase();
	console.warn(characterName);
	$img.src = `http://reactmarathon-api.herokuapp.com/assets/${characterName}.gif`;
	//add img
	$character.appendChild($img);
	

}

createPlayer('player1', player1);
createPlayer('player2', player2);
