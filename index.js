let display = document.getElementById("display");

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

function calculateRoot(n) {
    try {
        display.value = Math.pow(parseFloat(display.value), 1 / n);
    } catch (error) {
        display.value = "Error";
    }
}

function calculateNthRoot() {
    let base = prompt("Enter base value:");
    let root = prompt("Enter root value:");
    if (base && root) {
        display.value = Math.pow(parseFloat(base), 1 / parseFloat(root));
    }
}
