// Create a function where computer chooses between 1-3

function getComputerChoice() {
	return Math.floor(Math.random() * 3 + 1);
}

// console.log(getComputerChoice());

// Save choice as a variable

computerChoice = getComputerChoice();

// console.log(computerChoice);

// Number relates to either rock paper or scissors

// if (computerChoice === 1) {
// 	computerSelection = 'Rock';
// } else if (computerChoice === 2) {
// 	computerSelection = 'Paper';
// } else if (computerChoice === 3) {
// 	computerSelection = 'Scissors';
// }

// console.log(computerChoice);
// console.log(computerSelection);

// Create a function for a round of r-p-s
function singleRound(playerSelection, computerSelection) {
	if (playerSelection === computerSelection) {
		return "It's a draw!";
	} else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
		return 'Computer wins!';
	} else if (
		playerSelection === 'Paper' &&
		computerSelection === 'Scissors'
	) {
		return 'Computer wins!';
	} else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
		return 'Computer wins!';
	} else if (playerSelection === '') {
		return 'You did not enter anything';
	} else {
		return 'You win!';
	}
}

// const playerSelection = 'Scissors';
// const computerSelection = 'Rock';
// console.log(singleRound(playerSelection, computerSelection));

// Get users choice
playerChoice = prompt('Enter your choice');

// Change users choice to lowercase
playerSelection = playerChoice.toLowerCase();

// console.log(playerChoice);
// console.log(playerSelection);
