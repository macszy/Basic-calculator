let display = document.getElementById('display');
let clearButton = document.getElementById('clear');
let deleteButton = document.getElementById('delete');
let equalsButton = document.getElementById('equals');
let percentageButton = document.getElementById('percentage');
let numberButtons = document.querySelectorAll('#zero, #one, #two, #three, #four, #five, #six, #seven, #eight, #nine, #tens, #decimal, #percentage');
let operatorButtons = document.querySelectorAll('#plus, #minus, #multiply, #divide');

let currentNumber = '';
let previousNumber = '';
let currentOperator = '';

numberButtons.forEach(button => {
    button.addEventListener('click', () =>{
        currentNumber += button.textContent;
        display.value = currentNumber;    
    });
});

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (currentNumber !== '') {
            previousNumber = currentNumber;
            currentNumber = '';
            currentOperator = button.textContent; 
        }
    });
});

equalsButton.addEventListener('click', () => {
    if (currentNumber !== '' && previousNumber!== '') {
        let result;
        switch (currentOperator) {
            case '+': result = parseFloat(previousNumber) + parseFloat(currentNumber);
                break;
            case '-': result = parseFloat(previousNumber) - parseFloat(currentNumber);
                break;
            case '*': result = parseFloat(previousNumber) * parseFloat(currentNumber);
                break;
            case '/': result = parseFloat(previousNumber) / parseFloat(currentNumber);
                break;
             case '%': result = (parseFloat (previousNumber) / 100) * parseFloat(currentNumber);
                break;
            default: result = 0;
        }
        display.value = result;
        currentNumber = result.toString();
        previousNumber = '';
        currentOperator = '';
    }
});

percentageButton.addEventListener('click', () => {
    if (previousNumber !== '' && currentNumber !== '') {
        let result = (parseFloat (previousNumber) / 100) * parseFloat(currentNumber);
        display.value = result;
        currentNumber = result.toString();
        previousNumber = '';
    }
});

clearButton.addEventListener('click', () => {
    display.value = '';
    currentNumber  = '';
    previousNumber = '';
    currentOperator = '';
});

deleteButton.addEventListener('click', () => {
    currentNumber = currentNumber.slice(0, -1);
    display.value = currentNumber;
});
