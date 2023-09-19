var Choices = ["rock", "paper", "scissors"];
var playerScore, computerScore;

function getComputerChoice() {
    var randomIndex = Math.floor(Math.random() * Choices.length);
    var computerChoice = Choices[randomIndex];
    console.log("Computer chose: " + computerChoice);
    return computerChoice;
}

function playerChoice() {
    var selectChoice = prompt("Your Turn: " + Choices.join(', ')).toLowerCase();
    
    while (!Choices.includes(selectChoice)) {
        console.log(selectChoice + " is not allowed.");
        selectChoice = prompt("Your Turn: " + Choices.join(', ')).toLowerCase();
    }

    return selectChoice;
}

function playGame(){
  playerSelection = playerChoice();
  computerSelection = getComputerChoice();
  if (playerSelection == computerSelection){
    console.log("A Tie!");
  }
}