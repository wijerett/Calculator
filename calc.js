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

//populates display and after operate, clears display when new number is clicked

function replyClick(element){
    const clickedValue = element.getAttribute("data-number");
    const num1Field = document.getElementById("num1");
    if (operateRan) {
        clearValue();
        myArray2.length = 0;
        num1Field.value = clickedValue;
        operateRan = false;
    } else {
        num1Field.value = (num1Field.value || "") + clickedValue;
    }
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

//adds numbers after operator and 2nd number is passed to arrays
function addEquals() {
    myArray2.push(parseInt(...document.getElementById("num1").value.split(',')));
    console.log([...new Set(myArray2)]);
};

//splice replaces operator after one has already been pressed

plus.addEventListener("click", () => {
    operatorClick("+");
    if (myArray1.length >= 1) {
        myArray1.splice(0, 1);
    }
    const buttonValue = plus.value;
    myArray1.push(buttonValue);
    console.log(myArray1);
});

minus.addEventListener("click", () => {
    operatorClick("-");
    if (myArray1.length >= 1) {
        myArray1.splice(0, 1);
    }
    const buttonValue = minus.value;
    myArray1.push(buttonValue);
    console.log(myArray1);
});

times.addEventListener("click", () => {
    operatorClick("*");
    if (myArray1.length >= 1) {
        myArray1.splice(0, 1);
    }
    const buttonValue = times.value;
    myArray1.push(buttonValue);
    console.log(myArray1);
});

divideBy.addEventListener("click", () => {
    operatorClick("/");
    if (myArray1.length >= 1) {
        myArray1.splice(0, 1);
    }
    const buttonValue = divideBy.value;
    myArray1.push(buttonValue);
    console.log(myArray1);
});

equals.addEventListener("click", () => {
    console.log(operate(), product());
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

function operatorClick(operatorValue) {
    if (operateRan) {
        myArray = [...myArray3];
        myArray2.length = 0;
        myArray3.length = 0;
        operateRan = false;
    };
    myArray1.splice(0, 1, operatorValue);
};

let operateRan = false;

function operate() {
    operateRan = true;
    const num1 = document.getElementById("num1");
    if (myObject.secondOp[0] === "+") {
        myArray3 = [add()];
    } else if (myObject.secondOp[0] === "-") {
        myArray3 = [subtract()];
    } else if (myObject.secondOp[0] === "*") {
        myArray3 = [multiply()];
    } else if (myObject.secondOp[0] === "/") {
        if (myObject.thirdNum[0] === 0) {
            empty();
            clearValue();
            num1.value = "NoNoNo";
            myArray3 = [];
            return "NoNoNo";
        }
        myArray3 = [divide()];
    };
    num1.value = myArray3[0];
    myArray = [...myArray3];
    return myArray3[0];
};

function empty() {
    myArray.length = 0;
    myArray1.length = 0;
    myArray2.length = 0;
    myArray3.length = 0;
};

//defines what happens when a string is entered vs a number entered
function product () {
    const num1 = document.getElementById("num1");

    if (myArray3.length > 0 && typeof myArray3[0] === "number") {
        num1.value = myArray3[0].toFixed(2);
    } else if (typeof myArray3[0] === "string") {
        num1.value = myArray3[0] || "NoNoNo";
    };
};