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
