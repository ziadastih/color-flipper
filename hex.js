// target display random hex color on click from this array
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.querySelector(".btn");
const colorText = document.querySelector(".color-text");
// random number

function randomNumber() {
  return Math.floor(Math.random() * hex.length);
}
function randomHex() {
  let hexValue = "#";
  for (let i = 0; i < 6; i++) {
    hexValue += hex[randomNumber()];
  }
  colorText.textContent = ` background color :${hexValue}`;
  document.body.style.backgroundColor = `${hexValue}`;
}

btn.addEventListener("click", randomHex);
