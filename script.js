let display = document.getElementById("display");
// Add value to display
function appendValue(value) {
    display.value += value;
}
// Clear display
function clearDisplay() {
    display.value = "";
}
// Delete last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}
// Calculate result
function calculate() {
    let expression = display.value;
    if (expression === "") {
        return;
    }
    try {
        // Prevent division by zero
        if (/\/0(?!\.)/.test(expression)) {
            display.value = "Cannot divide by 0";
            return;
        }
        let result = eval(expression);
        if (!isFinite(result)) {
            display.value = "Invalid";
        } else {
            display.value = result;
        }
    } catch (error) {
        display.value = "Invalid Input";
    }
}
