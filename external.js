var Choices = ["rock", "paper", "scissors"];
var playerScore, computerScore;


//function for computer choice
function getComputerChoice() {
    var randomIndex = Math.floor(Math.random() * Choices.length);
    var computerChoice = Choices[randomIndex];
    console.log("Computer chose: " + computerChoice);
    return computerChoice;
}

//function for player choice
function playerChoice() {
    var selectChoice = prompt("Your Turn: " + Choices.join(', ')).toLowerCase();
    
    while (!Choices.includes(selectChoice)) {
        console.log(selectChoice + " is not allowed.");
        selectChoice = prompt("Your Turn: " + Choices.join(', ')).toLowerCase();
    }

    return selectChoice;
}

//function to play games
function playGame() {
  playerSelection = playerChoice();
  computerSelection = getComputerChoice();
  if (playerSelection === computerSelection) {
    console.log("A Tie!");
  }
  if ((computerSelection === "rock" && playerSelection === "scissors") || (computerSelection === "scissors" && playerSelection === "paper") || (computerSelection === "paper" && playerSelection === "rock")) {
    computerScore++;
   console.log(`You lose! ${computerSelection} beats ${playerSelection}.`);
  }
  else{
    playerScore++;
    console.log(`You Win! ${playerSelection} beats ${computerSelection}.`)
  }

}
playGame();
