let computerwins = 0
let playerwins = 0
const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function getPlayersChoice() {
  const choice= prompt('Enter your Choice!').toLowerCase();
  if (!choices.includes(choice)) {
   computerwins++; 
   console.log('You suck !')
  }
  
  return choice;
}

function compareSelection(computerSelectionArg, playerSelectionArg) {
  if (computerSelectionArg == 'paper' && playerSelectionArg == 'rock') {
    //computerwins = computerwins + 1
    computerwins++;
    return ('You Lose! Paper beats Rock')
  }
  else if (computerSelectionArg == 'rock' && playerSelectionArg == 'scissors') {
    computerwins++;
    return ('You Lose! Rock beats Scissors')
  }
  else if (computerSelectionArg == 'paper' && playerSelectionArg == 'scissors') {
    playerwins++;
    return ('You Win! Scissors beats Paper')
  }
  else if (computerSelectionArg == 'scissors' && playerSelectionArg == 'rock') {
    playerwins++;
    return ('You Win! Rock beats Scissors')
  }
  else if (computerSelectionArg == 'rock' && playerSelectionArg == 'paper') {
    playerwins++;
    return ('You Win! Paper beats Rock')
  }
  else if (computerSelectionArg == 'scissors' && playerSelectionArg == 'paper') {
    computerwins++;
    return ('You Lose! Scissors beats Paper')
  }
  else if (computerSelectionArg && !choices.includes(playerSelectionArg)) {
    return ('You just gifted the computer a win ! Congratz Loser!')
  }
  else {
    return ('Its a Draw!')
  }
}

function playRound() {
  const computerSelection = getComputerChoice();
  const playerSelection = getPlayersChoice();
  console.log(compareSelection (computerSelection,playerSelection));
}


function checkWinner () {
  if (playerwins > computerwins) {
    return ('You Win! Yaaaay')
  }
  else if (playerwins < computerwins){
    return ('BOOOO You lose ! LOSER ')
  }
  else {
    return ('Oh well....a draw !')
  }
}

function playGame (){
  for (let i=0;i<5;i++) {
  playRound();
  }
  console.log(checkWinner());
}

playGame();