var navbarlink = document.getElementById("navbarlink");
function showmenu() {
  navbarlink.style.right = "0";
}
function hidemenu() {
  navbarlink.style.right = "-200px";
}

// Variables 
const Choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

// DOM 
const playerChoiceImg = document.getElementById("playerRock");
const computerChoiceImg = document.getElementById("computerRock");
const playerScoreSpan = document.getElementById("playerScore");
const computerScoreSpan = document.getElementById("computerScore");
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const resetButton = document.getElementById("reset");
const resultMessage = document.getElementById("resultMessage");

// Function to get a random computer choice
function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * Choices.length);
  return Choices[randomIndex];
}

// Function to play a round of the game
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    playerScore++;
    return `You win! ${playerSelection} beats ${computerSelection}.`;
  } else {
    computerScore++;
    return `You lose! ${computerSelection} beats ${playerSelection}.`;
  }
}

// Function to update the player and computer choices
function updateChoices(playerSelection, computerSelection) {
  // Remove the previous highlighted choices (if any)
  const highlightedButtons = document.querySelectorAll('.highlighted');
  highlightedButtons.forEach(button => button.classList.remove('highlighted'));

  // Highlight the player's choice button
  const playerChoiceButton = document.getElementById(playerSelection);
  playerChoiceButton.classList.add('highlighted');

  // Highlight the computer's choice button
  const computerChoiceButton = document.getElementById(`computer${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}`);
  computerChoiceButton.classList.add('highlighted');
}

// Function to update the scores on the page
function updateScores() {
  playerScoreSpan.textContent = playerScore;
  computerScoreSpan.textContent = computerScore;
}

// Event listener for player's choice buttons
rockButton.addEventListener("click", () => {
  handlePlayerChoice("rock");
});

paperButton.addEventListener("click", () => {
  handlePlayerChoice("paper");
});

scissorsButton.addEventListener("click", () => {
  handlePlayerChoice("scissors");
});

// Event listener for reset button
resetButton.addEventListener("click", () => {
  playerScore = 0;
  computerScore = 0;
  updateScores();
  playerChoiceImg.src = "Images/rock.jpg";
  computerChoiceImg.src = "Images/rock.jpg";
  resultMessage.textContent = ''; // Clear result message
});

// Handle player choice
function handlePlayerChoice(playerSelection) {
  const computerSelection = getComputerChoice();
  const result = playRound(playerSelection, computerSelection);
  updateChoices(playerSelection, computerSelection);
  updateScores();
  resultMessage.textContent = result;
}
