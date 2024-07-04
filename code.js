// Code to play simple Rock, Paper, Scissors game in console.

function getHumanChoice() {
  human = prompt("Enter Rock, Paper or Scissors: ");
  return human;
}

function getComputerChoice() {
  choice = Math.floor(Math.random() * 3);

  if (choice == 0) {
    return "Rock";
  }
  if (choice == 1) {
    return "Paper";
  }
  if (choice == 2) {
    return "Scissors";
  }
}

function playGame() {
  humanScore = computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if (humanChoice == "rock" && computerChoice == "scissors") {
      console.log("You win! Rock beats Scissors!");
      humanScore++;
    }
    if (humanChoice == "rock" && computerChoice == "paper") {
      console.log("You lose! Paper beats Rock!");
      computerScore++;
    }
    if (humanChoice == "paper" && computerChoice == "scissors") {
      console.log("You lose! Scissors beats Paper!");
      computerScore++;
    }
    if (humanChoice == "paper" && computerChoice == "rock") {
      console.log("You win! Paper beats Rock!");
      humanScore++;
    }
    if (humanChoice == "scissors" && computerChoice == "rock") {
      console.log("You lose! Rock beats Scissors!");
      computerScore++;
    }
    if (humanChoice == "scissors" && computerChoice == "paper") {
      console.log("You win! Scissors beats Paper!");
      humanScore++;
    }
    if (humanChoice == computerChoice) {
      console.log("It's a draw!");
    }
  }

  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
  }

  console.log("Computer: " + computerScore + " Human: " + humanScore);
}

playGame();
