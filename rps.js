let playerScore = parseInt(0);
let computerScore = parseInt(0);
let win = "You win";
let lose = "You lose";
let tie = "It is a tie";

function computerPlay() {
  let random = Math.floor(Math.random()* 3);
  switch (random) {
    case 0:
        return 'rock';
    case 1:
        return 'paper';
    case 2:
        return 'scissors';
} 
  }

function playRound(playerSelection, computerSelection) {
  if (playerSelection.toLowerCase() === "rock") {
      if (computerSelection === "paper") {
          computerScore++;
          return alert(lose);
      } else if (computerSelection === "rock") {
          return alert(tie);
      } else {
          playerScore++;
          return alert(win);
      }
  }
  if (playerSelection.toLowerCase() === "scissors") {
      if (computerSelection === "paper") {
          playerScore++;
          return alert(win);
      } else if (computerSelection === "rock") {
          computerScore++;
          return alert(lose);
      } else {
          return alert(tie);
      }
  }
  if (playerSelection.toLowerCase() === "paper") {
      if (computerSelection === "paper") {
          return alert(tie);
      } else if (computerSelection === "rock") {
          playerScore++;
          return alert(win);
      } else {
          computerScore++;
          return alert(lose);
      }
  }
}
let i = 0;
const game = () => {
  let playerSelection;
  do {
    playerSelection = prompt("Welcome to Rock-Paper-Scissors. Do you choose Rock, Paper, or Scissors?");
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === "rock" || playerSelection === "paper"|| playerSelection === "scissors"){
        break; 
    }   else {
        playerSelection = prompt("Welcome to Rock-Paper-Scissors. Do you choose Rock, Paper, or Scissors?");
     }
  } while (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") 
  const computerSelection = computerPlay()
  console.log("Round " + [i+1],playRound(playerSelection, computerSelection));
  console.log("your score = " + playerScore);
  console.log("Computer's score = " + computerScore);
  i++;
  if (i !== 5) {
      game();
  } else {
      alert("GAME OVER! Player's score : "+playerScore+" VS Computer's score : "+computerScore+"");
  } 
}
game();