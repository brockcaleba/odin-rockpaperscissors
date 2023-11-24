var computerChoice;
let computerScore = 0;
let playerScore = 0;
let playerChoice = '';
let playerSelection = '';
let highestScore = 5;
let gameOverMessage = 'The game is over, refresh to play again';

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
	if (playerScore === highestScore || computerScore === highestScore) {
		buttons.append(restartButton);
		return `${gameOverMessage}`;
	} else if (playerSelection === computerSelection) {
		return `${outputString}`;
	} else if (playerSelection === 'rock' && computerSelection === 'paper') {
		computerScore++;
		return `${outputString}`;
	} else if (
		playerSelection === 'paper' &&
		computerSelection === 'scissors'
	) {
		computerScore++;
		return `${outputString}`;
	} else if (playerSelection === 'scissors' && computerSelection === 'rock') {
		computerScore++;
		return `${outputString}`;
	} else if (playerSelection === '') {
		return;
	} else {
		playerScore++;
		return `${outputString}`;
	}
}

function scoreBoard() {
	if (computerScore === 0 && playerScore === 0) {
		return 'Make your choice to score a point';
	} else if (computerScore === highestScore) {
		return `Computer: ${computerScore} | Player: ${playerScore} -- The computer wins!`;
	} else if (playerScore === highestScore) {
		return `Computer: ${computerScore} | Player: ${playerScore} -- You win!`;
	} else if (computerScore > playerScore) {
		return `Computer: ${computerScore} | Player: ${playerScore}`;
	} else if (playerScore > computerScore) {
		return `Computer: ${computerScore} | Player: ${playerScore}`;
	} else if (playerScore === computerScore) {
		return `Computer: ${computerScore} | Player: ${playerScore}`;
	}
}

const rockButton = document.querySelector('#rockButton');
rockButton.addEventListener('click', () => {
	playerSelection = 'rock';
	round.textContent = singleRound();
	score.textContent = scoreBoard();
});

const paperButton = document.querySelector('#paperButton');
paperButton.addEventListener('click', () => {
	playerSelection = 'paper';
	round.textContent = singleRound();
	score.textContent = scoreBoard();
});

const scissorsButton = document.querySelector('#scissorsButton');
scissorsButton.addEventListener('click', () => {
	playerSelection = 'scissors';
	round.textContent = singleRound();
	score.textContent = scoreBoard();
});

const container = document.querySelector('#results');

const round = document.createElement('div');
round.classList.add('round');
round.textContent = singleRound();

const score = document.createElement('div');
score.classList.add('score');
score.textContent = scoreBoard();

container.append(round);
container.append(score);

const buttons = document.querySelector('#buttons');
const restartButton = document.createElement('button');
restartButton.textContent = `Restart?`;

restartButton.addEventListener('click', () => {
	location.reload();
});
