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

var myArray = [];
var myArray1 = [];
var myArray2 = [];
var myArray3 = [];

let myObject = {
    firstNum: myArray,
    secondOp: myArray1,
    thirdNum: myArray2,
    fourthNum: myArray3,
};

//populates display
function replyClick(element) {
    if (myArray3 >= 1) {
        clearValue();
        empty();
        document.getElementById("num1").value = num1.value + element.getAttribute("data-number");
    } else {
        document.getElementById("num1").value = num1.value + element.getAttribute("data-number");
    };
};

//clears display
function clearValue() {
    document.getElementById("num1").value = "";
};

//adds numbers in num1 to array
function addTo() {
    if (myArray.length >= 1) {
        return;
    }
    myArray.push(parseInt(...document.getElementById("num1").value.split(',')));
    console.log([...new Set(myArray)]);
};

//adds numbers after operator and 2nd number is pressed to arrays
function addEquals() {
    myArray2.push(parseInt(...document.getElementById("num1").value.split(',')));
    console.log([...new Set(myArray2)]);
};

plus.addEventListener("click", () => {
    if (myArray1.length >= 1) {
        myArray1.splice(0, 1);
    }
    const buttonValue = plus.value;
    myArray1.push(buttonValue);
    console.log(myArray1);
});

//splice replaces operator after one has already been pressed

minus.addEventListener("click", () => {
    if (myArray1.length >= 1) {
        myArray1.splice(0, 1);
    }
    const buttonValue = minus.value;
    myArray1.push(buttonValue);
    console.log(myArray1);
});

times.addEventListener("click", () => {
    if (myArray1.length >= 1) {
        myArray1.splice(0, 1);
    }
    const buttonValue = times.value;
    myArray1.push(buttonValue);
    console.log(myArray1);
});

divideBy.addEventListener("click", () => {
    if (myArray1.length >= 1) {
        myArray1.splice(0, 1);
    }
    const buttonValue = divideBy.value;
    myArray1.push(buttonValue);
    console.log(myArray1);
});

equals.addEventListener("click", () => {
    console.log(operate(), empty(), product());
});

function add () {
    return Number(myArray) + Number(myArray2);
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


//trying to figure out how to empty everything after operation and number is pushed
function clearResult() {
        myArray = [];
        myArray1 = [];
        myArray2 = [];
        myArray3 = [];
        document.getElementById("num1").value = 0;
};

function operate() {
    if (`${myObject.secondOp}` === "+") {
        return myArray3 = add();
    } else if (`${myObject.secondOp}` === "-") {
        return myArray3 = subtract();
    } else if (`${myObject.secondOp}` === "*") {
        return myArray3 = multiply();
    } else if (`${myObject.secondOp}` === "/") {
        return myArray3 = divide();
    };
};

function empty() {
    myArray.length = 0;
    myArray1.length = 0;
    myArray2.length = 0;
    myArray3.length = 0;
};

function product () {
    num1.value = myArray3;//.toFixed(2)
};
