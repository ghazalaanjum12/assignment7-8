/*
    Author: Ghazala Anjum C0905815
    Version: 1.0
    Date: 05-04-2024
*/
// Initialize variables
var player1Score = 0; // Score of Player 1
var player2Score = 0; // Score of Player 2
var targetScore = 50; // Target score to win the game
var diceImages = [ // Array containing paths to dice images
  "dice1.png", // Die 1
  "dice2.png", // Die 2
  "dice3.png", // Die 3
  "dice4.png", // Die 4
  "dice5.png", // Die 5
  "dice6.png"  // Die 6
];
var currentPlayer = "Player 1"; // Variable to keep track of the current player

// Function to roll the dice
function rollDice() {
  // Generate random numbers for dice rolls
  var dice1 = Math.floor(Math.random() * 6) + 1;
  var dice2 = Math.floor(Math.random() * 6) + 1;

  // Update dice images with the rolled numbers
  document.getElementById("dice1Image").src = diceImages[dice1 - 1];
  document.getElementById("dice2Image").src = diceImages[dice2 - 1];

  // Update player scores based on the difference between the rolled numbers
  if (currentPlayer === "Player 1") {
    player1Score += Math.abs(dice1 - dice2);
  } else {
    player2Score += Math.abs(dice1 - dice2);
  }

  // Update score display on the webpage
  document.getElementById("player1Score").innerText = player1Score;
  document.getElementById("player2Score").innerText = player2Score;

  // Check if there's a winner after each roll
  checkWinner();
  
  // Switch to the next player's turn
  togglePlayer();
}

// Function to toggle between players
function togglePlayer() {
  currentPlayer = currentPlayer === "Player 1" ? "Player 2" : "Player 1";
  // Update the displayed turn information on the webpage
  document.getElementById("turn").innerText = "Next Turn: " + currentPlayer;
}

// Function to check for a winner
function checkWinner() {
  // Check if either player has reached the target score
  if (player1Score >= targetScore) {
    // Display the winner of the game
    document.getElementById("winner").innerText = "Player 1 Wins!";
  } else if (player2Score >= targetScore) {
    // Display the winner of the game
    document.getElementById("winner").innerText = "Player 2 Wins!";
  }
}
