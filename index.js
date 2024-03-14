// A1 get computer to randomly generate with even chances, Rock, Paper, or Scissors.
function getComputerChoice() {
    // A1 get computer to randomize number from 1-3
    let ranNumber = Math.floor(Math.random() * 3 + 1);
    // A2 make if statements so depending on number it assigns rock paper or scissors
    if (ranNumber === 1) {
        ranNumber = 'rock';
    } else if (ranNumber === 2) {
        ranNumber = 'paper';
    } else {
        ranNumber = 'scissors';
    }
    // A3 Return computers choice
    return ranNumber;
}

getComputerChoice();

// B1 play a single round of rock paper scissors, and return win, loss, or tie
function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice();

    // B2 asks user for prompt choice
    playerSelection = prompt('Choose rock, paper, or scissors.').toLowerCase();

    // B3 Make win or lose or tie conditions with if statments
    if (playerSelection === computerSelection) {
        console.log('It is a tie!');
        return '0';
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        console.log('You lose! Paper beats rock.');
        return 'computer';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        console.log('You lose! Rock beats scissors.');
        return 'computer';
    } else if (
        playerSelection === 'paper' &&
        computerSelection === 'scissors'
    ) {
        console.log('You lose! Scissors beat paper.');
        return 'computer';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        console.log('You win! Rock beats scissors.');
        return 'human';
    } else if (
        playerSelection === 'scissors' &&
        computerSelection === 'paper'
    ) {
        console.log('You win! Scissors beat paper.');
        return 'human';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        console.log('You win! Paper beats rock.');
        return 'human';
    } else {
        console.log(
            'Error. Please type in rock, paper, or scissors. Try again.'
        );
        return '0';
    }
}

// C1 Keep track of score so it's a best out of five and report winner or loser at end.
function playGame() {
    // C2 Loop game until someone reaches 3
    computerWinner = 0;

    humanWinner = 0;

    // TODO find a way to change the for loop to a while loop
    while (computerWinner != 3 || humanWinner != 3) {
        if (humanWinner == 3) {
            console.log(
                `Human has won with a score of ${humanWinner}! Against computer with a score of ${computerWinner}.`
            );
            break;
        } else if (computerWinner == 3) {
            console.log(
                `Computer has won with a score of ${computerWinner}! Against you with a score of ${humanWinner}.`
            );
            break;
        }

        results = playRound();

        if (results === 'computer') {
            computerWinner++;
        } else if (results === 'human') {
            humanWinner++;
        }
    }
}

playGame();

// 1 == Computer won
// 2 == Human won
// 0 == No one won
