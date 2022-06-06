// target to display a random color from this array in the simple section
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.querySelector(".btn");
const colorText = document.querySelector(".color-text");

function randomNumber() {
  let number = Math.floor(Math.random() * colors.length);

  colorText.textContent = `background color : ${colors[number]}`;
  document.body.style.backgroundColor = `${colors[number]}`;
}

btn.addEventListener("click", randomNumber);
