var player1Score = 0;
var player2Score = 0;
var targetScore = 50;
var diceImages = [
  "dice1.png", // Die 1
  "dice2.png", // Die 2
  "dice3.png", // Die 3
  "dice4.png", // Die 4
  "dice5.png", // Die 5
  "dice6.png"  // Die 6
];
var currentPlayer = "Player 1";

function rollDice() {
  var dice1 = Math.floor(Math.random() * 6) + 1;
  var dice2 = Math.floor(Math.random() * 6) + 1;
  document.getElementById("dice1Image").src = diceImages[dice1 - 1];
  document.getElementById("dice2Image").src = diceImages[dice2 - 1];

  if (currentPlayer === "Player 1") {
    player1Score += Math.abs(dice1 - dice2);
  } else {
    player2Score += Math.abs(dice1 - dice2);
  }

  document.getElementById("player1Score").innerText = player1Score;
  document.getElementById("player2Score").innerText = player2Score;

  checkWinner();
  togglePlayer();
}

function togglePlayer() {
  currentPlayer = currentPlayer === "Player 1" ? "Player 2" : "Player 1";
  document.getElementById("turn").innerText = "Next Turn: " + currentPlayer;
}

function checkWinner() {
  if (player1Score >= targetScore) {
    document.getElementById("winner").innerText = "Player 1 Wins!";
  } else if (player2Score >= targetScore) {
    document.getElementById("winner").innerText = "Player 2 Wins!";
  }
}
