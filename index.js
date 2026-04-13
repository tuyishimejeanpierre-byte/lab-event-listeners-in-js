// Handle Button Clicks

// Function to change the background color when a button is clicked
function changeBackgroundColor() {
  // Implement the function to change background color
  document.body.style.backgroundColor = "#add8e6";
  
}

// Function to reset the background color when the body is double-clicked
function resetBackgroundColor() {
  // Implement the function to reset background color
 document.body.style.backgroundColor = "";

}

// Capture Keyboard Input

// Function to display the key pressed by the user
function displayKeyPress(event) {
  // Implement the function to display key pressed
  const p = document.getElementById("keyPressDisplay");
  if (p){
  p.textContent = `Key pressed: ${event.key}`;
 
}}

// Process Text Input

// Function to display user input in real-time
function displayUserInput() {
  // Implement the function to display user input
   const input = document.getElementById("textInput");
  const p = document.getElementById("textInputDisplay");
  if (input && p){

  p.textContent = `You typed: ${input.value}`;
 
}}

// Attach Event Listeners
function setupEventListeners() {
// Attach event listener to change background color when the button is clicked
  document
    .getElementById('changeColorButton')
    ?.addEventListener('click', changeBackgroundColor)
    document.addEventListener("keydown", displayKeyPress)

const resetBtn = document.getElementById('resetColorButton');

if (resetBtn) {
  resetBtn.addEventListener('dblclick', resetBackgroundColor);
}
  // Attach event listener to reset background color when the body is double-clicked
  document
    .getElementById('textInput')
    ?.addEventListener('input', displayUserInput);

  // Attach event listener to display key pressed when a key is pressed down
  // document.addEventListener('keydown', displayKeyPress)

  // Attach event listener to display user input in real-time as they type
  // document.getElementById('textInput').addEventListener('input', displayUserInput)
}

// Initialize event listeners when the DOM is loaded
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', setupEventListeners)
}

module.exports = {
  changeBackgroundColor,
  resetBackgroundColor,
  displayKeyPress,
  displayUserInput,
  setupEventListeners,
}