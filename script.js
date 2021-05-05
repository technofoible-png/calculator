// Takes two numbers and operator and performs calculation
function operate (a, b, sym) {
    switch (sym) {
        case "+":
            add(a, b);
            break;
        case "-":
            sub(a, b);
            break;
        case "*":
            times(a, b);
            break;
        case "/":
            divides(a, b);
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

let displayValue = 0;

const displayWindow = document.querySelector(".display");
const displayContent = document.createElement('p');

displayContent.classList.add("displayContent");
displayContent.innerText = displayValue;

displayWindow.appendChild(displayContent);