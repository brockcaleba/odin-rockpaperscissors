// Create a function where computer chooses between 1-3

function getComputerChoice() {
	return Math.floor(Math.random() * 3 + 1);
}

// console.log(getComputerChoice());

// Save choice as a variable

computerChoice = getComputerChoice();

console.log(computerChoice);

// Number relates to either rock paper or scissors

if (computerChoice === 1) {
	computerPlay = 'Rock';
} else if (computerChoice === 2) {
	computerPlay = 'Paper';
} else if (computerChoice === 3) {
	computerPlay = 'Scissors';
}

console.log(computerChoice);
console.log(computerPlay);
