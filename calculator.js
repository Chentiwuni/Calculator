let calculated = false; //check if function computeDisplay() has a value
document.getElementById('expression-display').value = "0"; //set expression-display initial to 0





//function to do the calculations on expression-display
function computeDisplay() {
    try {
    const expression = document.getElementById('expression-display').value; //fetch expression
    const maxDisplayLength = 12;
    const maxDecimalPlace = 10;
    let calculatedDisplay = document.getElementById('calculated-display'); //displays output results


    //used replace() to replace '×' and '÷' with '*' and '/' and a regular expression with 'g'(global) to find matches in all occurrances
    const expressionReplaced = expression.replace(/×/g, '*').replace(/÷/g, '/');
    const result = math.evaluate(expressionReplaced);
    

    let formatedResult = result.toString(); //set result to string to use the string length method


    //check if result is an integer, if true, truncate else round off result to 10 decimal places
    if (Number.isInteger(result)) {

    if (formatedResult.length > maxDisplayLength) {
        formatedResult = formatedResult.substr(0, maxDisplayLength) + '...';

    }
    
} else {
    
    formatedResult = parseFloat(result.toFixed(maxDecimalPlace));
}

    calculatedDisplay.innerHTML = formatedResult;
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
        if (!isNaN(value) || value == '.') { //set to clear display if value is a number or '.'
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
    if (expressionDisplay.value === '0' && !isNaN(value) ) {
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