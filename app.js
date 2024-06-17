//Select DOM elements
const redInput = document.getElementById("red-input");
const greenInput = document.getElementById("green-input");
const blueInput = document.getElementById("blue-input");

const redColorText = document.getElementById("red-text");
const greenColorText = document.getElementById("green-text");
const blueColorText = document.getElementById("blue-text");

//Set initial RGB values
let redColor = redInput.value;
let greenColor = greenInput.value;
let blueColor = blueInput.value;

//Display RGB values on screen
redColorText.innerText = redColor;
greenColorText.innerText = greenColor;
blueColorText.innerText = blueColor;

function UpdateColor(red, green, blue) {
  const rgbColor = `rgb(${red}, ${green}, ${blue})`;
  document.body.style.backgroundColor = rgbColor;
}

//Update Red Color
redInput.addEventListener('change', (e) => {
  redColor = e.target.value;
  redColorText.textContent = redColor;
  UpdateColor(redColor, greenColor, blueColor);
})

//Update Green Color
greenInput.addEventListener('change', (e) => {
  greenColor = e.target.value;
  greenColorText.textContent = greenColor;
  UpdateColor(redColor, greenColor, blueColor);
})

//Update Blue Color
blueInput.addEventListener('change', (e) => {
  blueColor = e.target.value;
  blueColorText.textContent = blueColor;
  UpdateColor(redColor, greenColor, blueColor);
})