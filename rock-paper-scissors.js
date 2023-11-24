var computerChoice;

function getComputerChoice() {
	computerChoice = Math.floor(Math.random() * 3 + 1);
}

function getComputerSelection() {
	if (computerChoice === 1) {
		computerSelection = 'rock';
	} else if (computerChoice === 2) {
		computerSelection = 'paper';
	} else if (computerChoice === 3) {
		computerSelection = 'scissors';
	}
}

function singleRound() {
	getComputerChoice();
	getComputerSelection();
	let outputString = `You chose ${playerSelection} and the computer chose ${computerSelection}.`;
	if (playerSelection === computerSelection) {
		return `${outputString} It's a draw!`;
	} else if (playerSelection === 'rock' && computerSelection === 'paper') {
		computerScore++;
		return `${outputString} Computer wins!`;
	} else if (
		playerSelection === 'paper' &&
		computerSelection === 'scissors'
	) {
		computerScore++;
		return `${outputString} Computer wins!`;
	} else if (playerSelection === 'scissors' && computerSelection === 'rock') {
		computerScore++;
		return `${outputString} Computer wins!`;
	} else if (playerSelection === '') {
		return;
	} else {
		playerScore++;
		return `${outputString} You win!`;
	}
}

let computerScore = 0;
let playerScore = 0;
let playerChoice = '';
let playerSelection = '';

// function start() {
// 	playerChoice = prompt('Enter your choice');
// 	playerSelection = playerChoice.toLowerCase();
// 	if (
// 		playerSelection != 'rock' &&
// 		playerSelection != 'paper' &&
// 		playerSelection != 'scissors'
// 	) {
// 		console.log('That is not an option');
// 	} else {
// 		console.log(singleRound());
// 	}
// 	console.log(`Computer Score: ${computerScore}`);
// 	console.log(`Player Score: ${playerScore}`);
// }

function scoreBoard() {
	// getComputerChoice();
	// getComputerSelection();
	// start();
	if (computerScore > playerScore) {
		return `Computer: ${computerScore} | Player: ${playerScore} -- The computer wins`;
	} else if (playerScore > computerScore) {
		return `Computer: ${computerScore} | Player: ${playerScore} -- The player wins`;
	} else if (playerScore === computerScore) {
		return `Computer: ${computerScore} | Player: ${playerScore} -- It's a tie`;
	}
}

const rockButton = document.querySelector('#rockButton');
rockButton.addEventListener('click', () => {
	// console.log('Rock Button was clicked');
	playerSelection = 'rock';
	round.textContent = singleRound();
	score.textContent = scoreBoard();
});

const paperButton = document.querySelector('#paperButton');
paperButton.addEventListener('click', () => {
	// console.log('Paper Button was clicked');
	playerSelection = 'paper';
	round.textContent = singleRound();
	score.textContent = scoreBoard();
});

const scissorsButton = document.querySelector('#scissorsButton');
scissorsButton.addEventListener('click', () => {
	// console.log('Scissors Button was clicked');
	playerSelection = 'scissors';
	// console.log(singleRound());
	// console.log(scoreBoard());
	round.textContent = singleRound();
	score.textContent = scoreBoard();
});

const container = document.querySelector('#results');
// console.log(container);
const round = document.createElement('div');
round.classList.add('round');
round.textContent = singleRound();
const score = document.createElement('div');
score.classList.add('score');
score.textContent = scoreBoard();
// console.log(results);
container.append(round);
container.append(score);
// // const outputResults = document.createElement('div');
// results.setAttruibute('id', 'newResult');
// results.innerText('Test');
// results.textContent('TestTwo');
