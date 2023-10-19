let calculated = false;
document.getElementById('expression-display').value = "0";
function computeDisplay() {
    try {
    let expression = document.getElementById('expression-display').value;
    expression = expression.replace('x', '*').replace('÷', '/');
    document.getElementById('calculated-display').innerHTML = eval(expression);
    calculated = true;
    } catch(error) {
        document.getElementById('calculated-display').innerHTML = "Error input"
        calculated = true;
    }
}

function appendToDisplay(value) {
    if (calculated) {
        if (!isNaN(value || value == '.')) {
        clearDisplay();
        }
        calculated = false;
    } 
    const expressionDisplay = document.getElementById('expression-display');
    if (expressionDisplay.value === '0' && value !== '.') {
        document.getElementById('expression-display').value = "";
    }
    value = value.replace('*', 'x').replace('/', '÷');
    document.getElementById('expression-display').value += value;
}

function clearDisplay() {
    document.getElementById('expression-display').value = "0";
    document.getElementById('calculated-display').innerHTML = "";
}

function deletOneValue(){
    const value = document.getElementById('expression-display').value;
    const deletedKey = value.slice(0, -1);
    document.getElementById('expression-display').value = deletedKey;

}