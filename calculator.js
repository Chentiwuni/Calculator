
function computeDisplay() {
    try {
    const expression = document.getElementById('expression-display').value;
    const result = eval(expression);
    document.getElementById('calculated-display').value = result;
    } catch(error) {
        document.getElementById('calculated-display').value = "Error input"

    }
}

function appendToDisplay(value) {
        document.getElementById('expression-display').value += value;
}

function clearDisplay() {
    document.getElementById('expression-display').value = "";
    document.getElementById('calculated-display').value = "";
}

function deletOneValue(){
    const value = document.getElementById('expression-display').value;
    const deletedKey = value.slice(0, -1);
    document.getElementById('display').value = deletedKey;

}