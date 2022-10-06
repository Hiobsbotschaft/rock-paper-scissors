const choices = [ 'rock','paper','scissors'];

function getComputerChoice () { 

    return choices[Math.floor(Math.random()*choices.length)];
}

let computerSelection = getComputerChoice ();

let playerSelection =prompt("'Enter your Choice!'").toLowerCase();
    

function playRound (computerSelection,playerSelection) {

    if (computerSelection =='paper' && playerSelection =='rock') {
        return ('"You Lose! Paper beats Rock"')
    }
    else if (computerSelection =='rock' && playerSelection =='scissors') {
        return ('"You Lose! Rock beats Scissors"')
    }
    else if (computerSelection =='paper' && playerSelection =='scissors') {
        return ('"You Win! Scissors beats Paper"')
    }
    else if (computerSelection =='scissors' && playerSelection =='rock') {
        return ('"You Win! Rock beats Scissors"')
    }
    else if (computerSelection =='rock' && playerSelection =='paper') {
        return ('"You Win! Paper beats Rock"')
    }
    else if (computerSelection =='scissors' && playerSelection =='paper') {
        return ('"You Lose! Scissors beats Paper"')
    }
    else {
        return('"Its a Draw!"')
    }
}


console.log(playRound (computerSelection,playerSelection));