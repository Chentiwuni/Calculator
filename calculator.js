let calculated = false; //check if function computeDisplay() has a value
document.getElementById('expression-display').value = "0"; //set expression-display initial to 0

//function to do the calculations on expression-display
function computeDisplay() {
    try {
    let expression = document.getElementById('expression-display').value; //fetch expression
    const expressionReplaced = expression.replace(/×/g, '*').replace(/÷/g, '/');
    const result = math.evaluate(expressionReplaced);
    document.getElementById('calculated-display').innerHTML = result;
    calculated = true; //set computeToDisplay() to having value
    } catch(error) {
        document.getElementById('calculated-display').innerHTML = "Error input"
        calculated = true; //set computeToDisplay() to having value
    }
}

//function to append values to the expression-display screen
function appendToDisplay(value) {
    //if computeToDisplay has a value, in this case true
    if (calculated) {
        if (!isNaN(value || value == '.')) { //set to clear display if value is a number or .
        clearDisplay();
        }
        calculated = false; //set the clearing to exercute only for the initial input

        //check if value is an operator, if true, append to the calculated value for further computation
        if (value === '÷' || value === '×' || value === '+' || value === '-' || value === '%') {
            const output = document.getElementById('calculated-display').innerHTML;
            document.getElementById('expression-display').value = output;
            document.getElementById('calculated-display').innerHTML = "";
        }
    } 
    const expressionDisplay = document.getElementById('expression-display');

    //check if expression-display is '0', if true append '.' to that instead of clear
    if (expressionDisplay.value === '0' && value !== '.') {
        document.getElementById('expression-display').value = "";
    }

    document.getElementById('expression-display').value += value;
}

//function to clear 'expression-display' and set it to '0' and only clear 'calculatd-display'
function clearDisplay() {
    document.getElementById('expression-display').value = "0";
    document.getElementById('calculated-display').innerHTML = "";
}

//function to delete the later input from 'expression-display'
function deletOneValue(){
    const value = document.getElementById('expression-display').value;
    const deletedKey = value.slice(0, -1);
    document.getElementById('expression-display').value = deletedKey;

}