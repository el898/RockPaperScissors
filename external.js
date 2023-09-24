var Choices = ["rock", "paper", "scissors"];
var playerScore, computerScore;


//This function gets computers choice
function getComputerChoice() {
    var randomIndex = Math.floor(Math.random() * Choices.length); //Allows the computer to choose a random string from choices array
    var computerChoice = Choices[randomIndex];
    console.log("Computer chose: " + computerChoice);
    return computerChoice;
}

//function for player choice
function playerChoice() {
    var selectChoice = prompt("Your Turn: " + Choices.join(', ')).toLowerCase(); //makes the players input case insensitive
    
    while (!Choices.includes(selectChoice)) {
        console.log(selectChoice + " is not allowed.");
        selectChoice = prompt("Your Turn: " + Choices.join(', ')).toLowerCase();
    } // while loop to prompt the player after a wrong choice

    return selectChoice;
}

//function to play games
function playGame() {
  playerSelection = playerChoice();
  computerSelection = getComputerChoice();
  //if statement checks the choices and prints result
  if (playerSelection === computerSelection) {
    console.log("A Tie!");
  }
  if ((computerSelection === "rock" && playerSelection === "scissors") || (computerSelection === "scissors" && playerSelection === "paper")
   || (computerSelection === "paper" && playerSelection === "rock")) {
    computerScore++;
   console.log(`You lose! ${computerSelection} beats ${playerSelection}.`);
  }
  else{
    playerScore++;
    console.log(`You Win! ${playerSelection} beats ${computerSelection}.`)
  }

}
playGame();
