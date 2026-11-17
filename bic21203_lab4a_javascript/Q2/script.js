
// Select HTML elements
const userInput = document.getElementById("userInput");
const checkBtn = document.getElementById("checkBtn");
const result = document.getElementById("result");

// Create checkInput function
function checkInput() {

    // Get the input value
    const inputValue = userInput.value.trim();

    // Check whether input is empty
    if (inputValue === "") {
        result.textContent = "Please enter a valid number!";
    }

    // Convert input into a number
    else if (!Number.isFinite(Number(inputValue))) {
        result.textContent = "Please enter a valid number!";
    }

    // Check whether number is lower than 10
    else if (Number(inputValue) < 10) {
        result.textContent = "The number is lower than 10";
    }

    // Check whether number is higher than 10
    else if (Number(inputValue) > 10) {
        result.textContent = "The number is higher than 10";
    }

    // If none of the above conditions are true
    else {
        result.textContent = "The number is equal to 10";
    }
}

// Add click event listener
checkBtn.addEventListener("click", checkInput);
