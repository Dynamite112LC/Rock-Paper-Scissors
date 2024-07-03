console.log(Math.floor(Math.random() * 3));

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

getHumanChoice();
