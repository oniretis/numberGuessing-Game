let min = 0,
  max = 10,
  winningNum = 2;
guessesLeft = 3;

//UI
const game = document.querySelector("#game"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessBtn = document.querySelector("#guess-btn"),
  guessInput = document.querySelector("#guess-input"),
  message = document.querySelector(".message");

minNum.textContent = min;
maxNum.textContent = max;

//events
guessBtn.addEventListener("click", function () {
  let guess = parseInt(guessInput.value);
  //validation
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`You have to pick from ${min} to ${max}`, `red`);
  }
  //Winning Logic
  if (guess === winningNum) {
    setMessage(`${winningNum} is correct ! You won`, `green`);
  }
});
function setMessage(msg, color) {
  message.textContent = msg;
  message.style.color = color;
  guessInput.style.borderColor = color;
}
