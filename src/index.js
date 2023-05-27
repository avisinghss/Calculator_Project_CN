import "./styles.css";

// document.getElementById("app").innerHTML = ``;

// Get the input box element
const inputBox = document.getElementById("inputBox");

// Add event listener to handle button clicks
document.addEventListener("click", function (event) {
  const buttonValue = event.target.innerText;

  if (event.target.classList.contains("button")) {
    if (buttonValue === "AC") {
      // Clear the input box
      inputBox.value = "";
    } else if (buttonValue === "DEL") {
      // Remove the last character from the input box
      inputBox.value = inputBox.value.slice(0, -1);
    } else if (buttonValue === "=") {
      // Evaluate the expression in the input box
      try {
        const result = eval(inputBox.value);
        inputBox.value = result;
      } catch (error) {
        // Handle any errors that occur during evaluation
        inputBox.value = "Error";
      }
    } else {
      // Append the clicked button value to the input box
      inputBox.value += buttonValue;
    }
  }
});
