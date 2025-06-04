
const equals = document.getElementById("equals");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const times = document.getElementById("times");
const divideBy = document.getElementById("divide-by");
const decimal = document.getElementById("decimal");
const one = document.getElementById("1");
const two = document.getElementById("2");
const three = document.getElementById("3");
const four = document.getElementById("4");
const five = document.getElementById("5");
const six = document.getElementById("6");
const seven = document.getElementById("7");
const eight = document.getElementById("8");
const nine = document.getElementById("9");
const zero = document.getElementById("0");

const num1 = document.getElementById("num1");

var number1 = parseInt(num1.value);
var operator = num1.value;
var number2 = parseInt(num1.value);


const myArray = [number1, operator, number2];

function addTo() {
    myArray.push(...document.getElementById("num1").value.split(','));
    console.log([...new Set(myArray)]);
}



function add () {
    `${number1} + ${number2}`;
};
function subtract () {
    `${number1} - ${number2}`;
};
function multiply () {
    `${number1} * ${number2}`;
};
function divide () {
    `${number1} / ${number2}`;
};



function operate() {
    
    if (operator === "+") {
        return add();
    } else if (operator === "-") {
        return subtract();
    } else if (operator === "*") {
        return multiply();
    } else if (operator === "/") {
        return divide();
    };

};

function replyClick(element) {
    document.getElementById("num1").value = num1.value + element.getAttribute("data-number");
}


function clearValue() {
    document.getElementById("num1").value = "";
}










