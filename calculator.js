function computeDisplay() {
    try {
    const expression = document.getElementById('display').value;
    const result = eval(expression);
    document.getElementById('display').value = result;
    return result;
    } catch(error) {
        document.getElementById('display').value = "Error input"
        return "Error input";

    }
}

function appendToDisplay(value) {
    const resultValue = computeDisplay();

    if (resultValue !== undefined || resultValue !== null || resultValue !== "Error input") {
        document.getElementById('display').value = value;
    } else {
        document.getElementById('display').value += value;
    }
    
}

function clearDisplay() {
    document.getElementById('display').value = "";
}

function deletOneValue(){
    const value = document.getElementById('display').value;
    const deletedKey = value.slice(0, -1);
    document.getElementById('display').value = deletedKey;

}