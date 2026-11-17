
// Select the button and ordered list
const generateBtn = document.getElementById("generateBtn");
const numberList = document.getElementById("numberList");

// Create generateNumbers function
function generateNumbers() {

    // Clear existing list items
    numberList.textContent = "";

    // Use a for loop to generate numbers from 1 to 5
    for (let i = 1; i <= 5; i++) {

        // Create a new list item
        const listItem = document.createElement("li");

        // Set the text of the list item
        listItem.textContent = "The number is " + i;

        // Add the list item to the ordered list
        numberList.appendChild(listItem);
    }
}

// Add click event listener
generateBtn.addEventListener("click", generateNumbers);
