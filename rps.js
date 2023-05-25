let computerwins = 0
let playerwins = 0
const choices = ['rock', 'paper', 'scissors'];
let display = document.getElementById("display");
let root = document.getElementById("root");
let b1 = document.createElement("button");
b1.textContent="Rock";
b1.id = 'rock';
b1.addEventListener("click", () => {playRound(b1.id)});
let b2 = document.createElement("button");
b2.textContent="Paper";
b2.id = 'paper';
b2.addEventListener("click", () => {playRound(b2.id)});
let b3 = document.createElement("button");
b3.textContent="Scissors";
b3.id = 'scissors';
b3.addEventListener("click", () => {playRound(b3.id)});
root.appendChild(b1);
root.appendChild(b2);
root.appendChild(b3);


let com = document.getElementById("computewin");
let hum = document.getElementById ("humanwin");



function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}


function compareSelection(computerSelectionArg, playerSelectionArg) {
  if (computerSelectionArg == 'paper' && playerSelectionArg == 'rock') {
    //computerwins = computerwins + 1
    computerwins++;
    com.textContent = computerwins;
    return ('You Lose! Paper beats Rock')
  }
  else if (computerSelectionArg == 'rock' && playerSelectionArg == 'scissors') {
    computerwins++;
    com.textContent = computerwins;
    return ('You Lose! Rock beats Scissors')
  }
  else if (computerSelectionArg == 'paper' && playerSelectionArg == 'scissors') {
    playerwins++;
    hum.textContent = playerwins;
    return ('You Win! Scissors beats Paper')
  }
  else if (computerSelectionArg == 'scissors' && playerSelectionArg == 'rock') {
    playerwins++;
    hum.textContent = playerwins;
    return ('You Win! Rock beats Scissors')
  }
  else if (computerSelectionArg == 'rock' && playerSelectionArg == 'paper') {
    playerwins++;
    hum.textContent = playerwins;
    return ('You Win! Paper beats Rock')
  }
  else if (computerSelectionArg == 'scissors' && playerSelectionArg == 'paper') {
    computerwins++;
    com.textContent = computerwins;
    return ('You Lose! Scissors beats Paper')
  }
  else if (computerSelectionArg && !choices.includes(playerSelectionArg)) {
    com.textContent = computerwins;
    return ('You just gifted the computer a win ! Congratz Loser!')
  }
  else {
    return ('Its a Draw!')
  }
}

function playRound(playerSelection) {
  const computerSelection = getComputerChoice();
  display.textContent = compareSelection (computerSelection,playerSelection);
}


function checkWinner() {
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
