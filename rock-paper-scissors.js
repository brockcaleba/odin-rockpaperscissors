// Create a function where computer chooses between 1-3

function getComputerChoice() {
	return Math.floor(Math.random() * 3 + 1);
}

// console.log(getComputerChoice());

// Save choice as a variable

computerChoice = getComputerChoice();

// console.log(computerChoice);

// Number relates to either rock paper or scissors

if (computerChoice === 1) {
	computerSelection = 'rock';
} else if (computerChoice === 2) {
	computerSelection = 'paper';
} else if (computerChoice === 3) {
	computerSelection = 'scissors';
}

// console.log(computerChoice);
// console.log(computerSelection);

// Create a function for a round of r-p-s
function singleRound(playerSelection, computerSelection) {
	let outputString = `You chose ${playerSelection} and the computer chose ${computerSelection}.`;
	if (playerSelection === computerSelection) {
		return `${outputString} It's a draw!`;
	} else if (playerSelection === 'rock' && computerSelection === 'paper') {
		return `${outputString} Computer wins!`;
	} else if (
		playerSelection === 'paper' &&
		computerSelection === 'scissors'
	) {
		return `${outputString} Computer wins!`;
	} else if (playerSelection === 'scissors' && computerSelection === 'rock') {
		return `${outputString} Computer wins!`;
	} else if (playerSelection === '') {
		return 'You did not enter anything';
	} else {
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

function game() {
	playerChoice = prompt('Enter your choice');
	playerSelection = playerChoice.toLowerCase();
	console.log(singleRound(playerSelection, computerSelection));
}

game();
