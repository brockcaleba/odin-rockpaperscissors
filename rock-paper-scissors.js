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

let computerScore = 0;
let playerScore = 0;

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

function game() {
	getComputerChoice();
	getComputerSelection();
	start();
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
