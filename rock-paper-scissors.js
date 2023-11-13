// Create a function where computer chooses between 1-3

function getComputerChoice() {
	return Math.floor(Math.random() * 3 + 1);
}

// console.log(getComputerChoice());

// Save choice as a variable

computerChoice = getComputerChoice();

// console.log(computerChoice);

// Number relates to either rock paper or scissors

function getComputerSelection(computerChoice) {
	if (computerChoice === 1) {
		computerSelection = 'rock';
	} else if (computerChoice === 2) {
		computerSelection = 'paper';
	} else if (computerChoice === 3) {
		computerSelection = 'scissors';
	}
}

// console.log(computerChoice);
// console.log(computerSelection);

// Create a function for a round of r-p-s
function singleRound(playerSelection, computerChoice) {
	getComputerSelection(computerChoice);
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

// const playerSelection = 'Scissors';
// const computerSelection = 'Rock';
// console.log(singleRound(playerSelection, computerSelection));

// Get users choice
// playerChoice = prompt('Enter your choice');

// Change users choice to lowercase
// playerSelection = playerChoice.toLowerCase();

// console.log(playerChoice);
// console.log(playerSelection);

// Create a score keeper
let computerScore = 0;
let playerScore = 0;

function round() {
	getComputerChoice();
	getComputerSelection(computerChoice);
	playerChoice = prompt('Enter your choice');
	playerSelection = playerChoice.toLowerCase();
	if (
		playerSelection != 'rock' &&
		playerSelection != 'paper' &&
		playerSelection != 'scissors'
	) {
		console.log('That is not an option');
	} else {
		console.log(singleRound(playerSelection, computerChoice));
	}
	console.log(`Computer Score: ${computerScore}`);
	console.log(`Player Score: ${playerScore}`);
}

// Create function that plays 5 games in a row
function game() {
	for (let i = 0; i < 5; i++) {
		round();
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
