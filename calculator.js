let operators = ['+', '/', '-', '*', '%'];
let calculated = false;

function computeDisplay() {
    try {
    const expression = document.getElementById('expression-display').value;
    const result = eval(expression);
    document.getElementById('calculated-display').innerHTML = result;
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
    
    document.getElementById('expression-display').value += value;
}

function clearDisplay() {
    document.getElementById('expression-display').value = "";
    document.getElementById('calculated-display').innerHTML = "";
}

function deletOneValue(){
    const value = document.getElementById('expression-display').value;
    const deletedKey = value.slice(0, -1);
    document.getElementById('expression-display').value = deletedKey;

}