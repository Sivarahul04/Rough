// Get the input field
let input = document.getElementById("Number");

// Display value in the input
function display(value) {
    input.value += value;
}

// Clear the entire input
function clear() {
    input.value = "";
}

// Delete the last character
function del() {
    input.value = input.value.slice(0, -1);
}

// Evaluate the expression
function evaluateInput() {
    try {
        input.value = eval(input.value);
    } catch (e) {
        input.value = "Error";
    }
}
