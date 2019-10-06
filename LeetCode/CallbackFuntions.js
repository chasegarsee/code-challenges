
function add(a, b) {
    console.log(a + b)
}

function multiply(a, b) {
    console.log(a * b)
}

function subtract(a, b) {
    console.log(a - b)
}

function divide(a, b) {
    console.log(a / b)
}

function calculate(a, b, callback) {
    callback(a, b)
}

calculate(6, 7, multiply)
calculate(6, 7, subtract)
calculate(6, 7, add)
calculate(6, 7, divide)


function greeting(name) {
    console.log('Hello ' + name);
}

function processUserInput(cb) {
    var names = "Chase";
    cb(names);
}

processUserInput(greeting);



