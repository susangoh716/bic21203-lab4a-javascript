
// Select the paragraph and button
const message = document.getElementById("message");
const changeBtn = document.getElementById("changeBtn");

// Create a function to change the message
function changeMessage() {
    message.textContent = "Hello there!";
}

// Add click event listener to the button
changeBtn.addEventListener("click", changeMessage);
