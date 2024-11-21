const display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value; 
}

function toggleSign() {
    if (display.value) {
        display.value = String(parseFloat(display.value) * -1); 
    }
}

function clearDisplay() {
    display.value = ''; 
}

function calculate() {
    try {
        display.value = eval(display.value); 
    } catch (error) {
        display.value = 'Error'; 
    }
}
