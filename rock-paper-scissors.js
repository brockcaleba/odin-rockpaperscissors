// Create a function where computer chooses between 1-3
var computerChoice;

function getComputerChoice() {
	computerChoice = Math.floor(Math.random() * 3 + 1);
}

// Number relates to either rock paper or scissors

function getComputerSelection() {
	if (computerChoice === 1) {
		computerSelection = 'rock';
	} else if (computerChoice === 2) {
		computerSelection = 'paper';
	} else if (computerChoice === 3) {
		computerSelection = 'scissors';
	}
}

// Create a function for a round of r-p-s
function singleRound() {
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
		return 'You did not enter anything';
	} else {
		playerScore++;
		return `${outputString} You win!`;
	}
}

// Create a score keeper
let computerScore = 0;
let playerScore = 0;

// Chooses if input is valid or not then goes through the round
function start() {
	playerChoice = prompt('Enter your choice');
	playerSelection = playerChoice.toLowerCase();
	if (
		playerSelection != 'rock' &&
		playerSelection != 'paper' &&
		playerSelection != 'scissors'
	) {
		console.log('That is not an option');
	} else {
		console.log(singleRound());
	}
	console.log(`Computer Score: ${computerScore}`);
	console.log(`Player Score: ${playerScore}`);
}

// Create function that plays 5 games in a row
function game() {
	for (let i = 0; i < 5; i++) {
		getComputerChoice();
		getComputerSelection();
		start();
	}
	if (computerScore > playerScore) {
		console.log(
			`Computer: ${computerScore} | Player: ${playerScore} -- The computer wins`
		);
	} else if (playerScore > computerScore) {
		console.log(
			`Computer: ${computerScore} | Player: ${playerScore} -- The player wins`
		);
	} else if (playerScore === computerScore) {
		console.log(
			`Computer: ${computerScore} | Player: ${playerScore} -- It's a tie`
		);
	}
}

game();
