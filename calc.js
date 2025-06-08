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
}
//clears display
function clearValue() {
    document.getElementById("num1").value = "";
}

let myArray = [];
let myArray1 = [];
let myArray2 = [];

function addTo() {
    myArray.push(...document.getElementById("num1").value.split(','));
    console.log([...new Set(myArray)]);
}
function addEquals() {
    myArray2.push(...document.getElementById("num1").value.split(','));
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
})

function add () {
    `${myArray} + ${myArray2}`;
};
function subtract () {
    `${myArray} - ${myArray2}`;
};
function multiply () {
    `${myArray} * ${myArray2}`;
};
function divide () {
    `${myArray} / ${myArray2}`;
};

function operate() {
    if (myArray1 === "+") {
        return add();
    } else if (myArray1 === "-") {
        return subtract();
    } else if (myArray1 === "*") {
        return multiply();
    } else if (myArray1 === "/") {
        return divide();
    }
    console.log(add(), subtract(), multiply(), divide());
    //reset arrays to 0
};





