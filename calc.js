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

//populates display
function replyClick(element) {
    document.getElementById("num1").value = num1.value + element.getAttribute("data-number");
};



//clears display
function clearValue() {
    document.getElementById("num1").value = "";
};

var myArray = [];
var myArray1 = [];
var myArray2 = [];


function addTo() {
    myArray.push(parseInt(...document.getElementById("num1").value.split(',')));
    console.log([...new Set(myArray)]);
}
function addEquals() {
    myArray2.push(parseInt(...document.getElementById("num1").value.split(',')));
    console.log([...new Set(myArray2)]);
}

plus.addEventListener("click", () => {
    const buttonValue = plus.value;
    myArray1.push(buttonValue);
    console.log(myArray1);
});
minus.addEventListener("click", () => {
    const buttonValue = minus.value;
    myArray1.push(buttonValue);
    console.log(myArray1);
});
times.addEventListener("click", () => {
    const buttonValue = times.value;
    myArray1.push(buttonValue);
    console.log(myArray1);
});
divideBy.addEventListener("click", () => {
    const buttonValue = divideBy.value;
    myArray1.push(buttonValue);
    console.log(myArray1);
});

equals.addEventListener("click", () => {
    console.log(operate(), empty());
    
});

let myObject = {
    firstNum: myArray,
    secondOp: myArray1,
    thirdNum: myArray2,
};

function add () {
    return Number(myObject.firstNum) + Number(myObject.thirdNum);
};
function subtract () {
    return Number(myArray) - Number(myArray2);
};
function multiply () {
    return Number(myArray) * Number(myArray2);
};
function divide () {
    return Number(myArray) / Number(myArray2);
};

function empty() {
    myArray.length = 0;
    myArray1.length = 0;
    myArray2.length = 0;
};

function operate() {
    if (`${myObject.secondOp}` === "+") {
        return add();
    } else if (`${myObject.secondOp}` === "-") {
        return subtract();
    } else if (`${myObject.secondOp}` === "*") {
        return multiply();
    } else if (`${myObject.secondOp}` === "/") {
        return divide();
    };
    console.log(operate());
};





