// Takes two numbers and operator and performs calculation
function operate (a, b, sym) {
    switch (sym) {
        case "+":
            return add(a, b);
            break;
        case "-":
            return sub(a, b);
            break;
        case "*":
            return times(a, b);
            break;
        case "/":
            return divides(a, b);
            break;
    }
}

// Adds a to b
function add (a, b) {
    return a + b;
}

// Subtracts a from b
function sub (a, b) {
    return a - b;
}

// Multiplies a times b
function times (a, b) {
    return a * b;
}

// Divides a by b 
function divides (a, b) {
    return a / b;
}

let opOne = 0;
let opTwo = 0;
let currentOp = " ";


const displayWindow = document.querySelector(".display");
const displayContent = document.createElement('p');
const numButtons = document.querySelectorAll(".num");
const clearButton = document.querySelector(".clear");
const opButtons = document.querySelectorAll(".operator");
const equalButton = document.querySelector(".equals");


// Gets numbers from number buttons
numButtons.forEach(button => {
    button.addEventListener("click", getNum);
});

function displayValue(val) {
    displayWindow.textContent = displayWindow.textContent + val;
}

function getNum (e) {
    displayValue(e.target.value);
}

// Clears value
clearButton.addEventListener("click", clearNum);

function clearNum () {
    displayWindow.textContent = " ";
}


opButtons.forEach(button => {
    button.addEventListener("click", doSomething);
});

function doSomething (e) {
    setNum(displayWindow.textContent);
    getOperation(e);
    displayWindow.textContent = " ";
}

function getOperation (e) {
    return currentOp = e.target.value;
};

function setNum (val) {
    return opOne = Number(val)
}



equalButton.addEventListener("click", doOperation);

function doOperation () {
    opTwo = Number(displayWindow.textContent);
    let result = operate(opOne, opTwo, currentOp);
    displayWindow.textContent = " ";
    return displayValue(result);
}