var computerChoice;
let computerScore = 0;
let playerScore = 0;
let playerChoice = '';
let playerSelection = '';
let highestScore = 5;

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
		return 'The game is over, refresh to play again';
	} else if (playerSelection === computerSelection) {
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

function scoreBoard() {
	if (computerScore === 0 && playerScore === 0) {
		return 'Make your choice to start the game';
	} else if (computerScore === highestScore) {
		return `Computer: ${computerScore} | Player: ${playerScore} -- The computer wins!`;
	} else if (playerScore === highestScore) {
		return `Computer: ${computerScore} | Player: ${playerScore} -- You win!`;
	} else if (computerScore > playerScore) {
		return `Computer: ${computerScore} | Player: ${playerScore} -- The computer is winning!`;
	} else if (playerScore > computerScore) {
		return `Computer: ${computerScore} | Player: ${playerScore} -- You are winning!`;
	} else if (playerScore === computerScore) {
		return `Computer: ${computerScore} | Player: ${playerScore} -- It's a tie`;
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
