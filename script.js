"use strict";

//Define variables
let score = 20;
let highScore = 0;

//Generate random numbers between 1 to 20
const randomGenerator = function () {
  return Math.trunc(Math.random() * 20) + 1;
};

//Call RandomGenerator function
let secretNumber = randomGenerator();

let displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

//Decrease score value
let decreaseScore = function () {
  document.querySelector(".score").textContent = --score;
  console.log(document.querySelector(".score").textContent);
};

//Display secret number or display ?
let displaySecretNumber = function (secretNumber) {
  document.querySelector(".number").textContent = secretNumber;
};

//Check click
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  //No number entered
  if (!guess) {
    displayMessage("⛔️ No Number!");
  } else if (guess === secretNumber) {
    //Correct number entered
    displayMessage("🎉 Correct Number!");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".guess").style.width = "30rem";
    displaySecretNumber(secretNumber);
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
      decreaseScore();
    } else {
      displayMessage("😢 You lost, click 'Again!' to try again!");
      decreaseScore();
    }
  }
});

//Again click
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  document.querySelector(".score").textContent = score;
  secretNumber = randomGenerator();
  displayMessage("🤔 Start Guessing!");
  displaySecretNumber("?");
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
