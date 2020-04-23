// Functions can be returned from other functions in JS

function createFunction() {
  // # 1 defines a function called createFunction and storing it in GLOBAL MEMORY
  function multiplyBy2(n) {
    return n * 2;
  }
  return multiplyBy2;
}

const generatedFunc = createFunction();
// # 2 defines a variable named generatedFunc assigned to the RETURNED value of the invoked function createFunction()
// Stored generatedFunc in GLOBAL MEMORY
const result = generatedFunc(3);
console.log("RESULT", result);

// Calling a function in the same function call as it was defined.
// Where you define your functions determines what data it has access to when you call it.

function outer() {
  let counter = 0;

  function incrementCounter() {
    counter++;
  }
  return incrementCounter;
}

const theNewNew = outer();

/* Challenge 1
 Create a function createFunction that creates and returns a function. 
 When that created function is called, it should print "hello". */

// CHALLENGE 1
function createFunction() {
  function sayHello() {
    console.log("Hello");
  }
  return sayHello;
}

// /*** Uncomment these to check your work! ***/
const function1 = createFunction();
function1(); // => should console.log('hello');

/* Challenge 2
Create a function createFunctionPrinter that accepts one input and returns a function. 
When that created function is called, it should print out the input that was used when the function was created. */

// CHALLENGE 2
function createFunctionPrinter(input) {
  function saySomething() {
    console.log(input);
  }
  return saySomething;
}

// /*** Uncomment these to check your work! ***/
const printSample = createFunctionPrinter("sample");
printSample(); // => should console.log('sample');
const printHello = createFunctionPrinter("hello");
printHello(); // => should console.log('hello');

/* Challenge 3
Examine the code for the outer function. 
Notice that we are returning a function and that function is using variables that are outside of its scope.
Now we are going to create a function addByX that returns a function that will add an input by x. */

// CHALLENGE 3
function outer() {
  let counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter() {
    counter++;
    console.log("counter", counter);
  }
  return incrementCounter;
}

const willCounter = outer();
const jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

// /*** Uncomment these to check your work! ***/
willCounter(); // 1
willCounter(); // 2
willCounter(); // 3

jasCounter(); // 1
willCounter(); // 4

function addByX(x) {
  function sum(y) {
    console.log(x + y);
  }
  return sum;
}

// /*** Uncomment these to check your work! ***/
const addByTwo = addByX(2);
addByTwo(1); // => should return 3
addByTwo(2); // => should return 4
addByTwo(3); // => should return 5

const addByThree = addByX(3);
addByThree(1); // => should return 4
addByThree(2); // => should return 5

const addByFour = addByX(4);
addByFour(4); // => should return 8
addByFour(5); // => should return 9

/* Challenge 4
Write a function once that accepts a callback as input and returns a function. 
When the returned function is called the first time, it should call the callback and return that output. 
If it is called any additional times, instead of calling the callback again it will 
simply return the output value from the first time it was called. */

// CHALLENGE 4
function once(func) {
  var counter = 0;
  var firstVal;

  function closure() {
    if (counter === 0) {
      counter++;
      firstVal = func.apply(null, arguments);
      return firstVal;
    } else return firstVal;
  }
  return closure;
}

var onceFunc = once(addByTwo);

// UNCOMMENT THESE TO TEST YOUR WORK!
console.log(onceFunc(4)); //should log 6
console.log(onceFunc(10)); //should log 6
console.log(onceFunc(9001)); //should log 6

var global = "global";
function foo() {
  var one = 1;
  function bar() {
    var two = 2;
    function argh() {}
  }
}
