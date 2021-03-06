////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return var move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return var move || getInput();
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    if (playerMove === computerMove) {
        winner = 'tie';
    }
    else if (playerMove === 'rock' && computerMove === 'scissors') {
        winner = 'player';
    }
    else if (playerMove === 'scissors' && computerMove === 'paper') {
        winner = 'player';
    }
    else if (playerMove === 'paper' && computerMove === 'rock'){
        winner = 'player';
    }    
    else {
        winner = 'computer';
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    while (playerWins < 5 && computerWins < 5) {
        colsole.log('The score is currently' + playerWins + 'for you, and' + computerWins + 'for the computer')
    }
        if (winner == 'player') {
            playerWins += 1;
            console.log('You chose' + playerMove + 'while the computer chose' + computerMove + "You win! Let's play again.");
        }
        else if (winner == 'computer') {
            computerWins += 1;
            console.log('you chose' + playerMove + 'while the computer chose' + computerMove "I'm sorry, the computer has won. Try again!");
        }
        else ('player' == 'winner') {
            console.log('you and the computer both chose' + playerMove + "It's a tie! Try again!");
        }
    return [playerWins, computerWins];
}

