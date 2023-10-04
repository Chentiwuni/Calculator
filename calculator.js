function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = "";
}

function computeDisplay() {
    try {
    const expression = document.getElementById('display').value;
    const result = eval(expression);
    document.getElementById('display').value = result;
    } catch(error) {
        document.getElementById('display').value = "Error input";

    }
}

function deletOneValue(){
    const value = document.getElementById('display').value;
    const deletedKey = value.slice(0, -1);
    document.getElementById('display').value = deletedKey;

}