// -ook at the example below and do the same for other problems.

/*
Write a function named convertToString that accepts a number and converts the number into a string (hint: use String()) and return the converted value.

Do the following for the given problem:
*/

// - Write a Function Decleration
function convertToString(n) {
  return String(n);
}

// - Write a Function Expression
let convertToString = function (n) {
  return String(n);
};

// - Write an Arrow Function without curly brackets (if possible)
let convertToString = (n) => String(n);

// - Write an Arrow Function with curly brackets
let convertToString = (n) => {
  return String(n);
};

// - Execute the function
convertToString(21);

// - Execute the function and store the return value in a variable.
let returnValue = convertToString(23);

// - What is the typeof returnValue
// typeof returnValue is "string"

/* 1. Add one to the given value

Write a function named `addOne` that accepts a number, adds one to the given value and`return` it(hint: use return keyword).

Do the following with above problem.
*/

// - Write a Function Declaration
function addOne(num){
  return 1 + num;
}
// - Write a Function Expression
let add = function addOne(num){
  return 1+num;
}
// - Write an Arrow Function without curly brackets(if possible)
let addOne = num => 1+num;
// - Write an Arrow Function with curly brackets
let addOne = (num) => {
  return 1+num;
}
// - Execute the function
 num(1);
// - Execute the function and store the return value in a variable.
let value = num(1);
// - What is the typeof returnValue
// typeof Value is "string"
/* 2. Subtract one

Write a function named `substractOne` that accepts a number, substracts one from the given value and return it. (hint: use return keyword)

Do the following with above problem.
*/

// - Write a Function Declaration
function substractOne(numSub){
  return numSub - 1
}
// - Write a Function Expression
let substract= function substractOne(numSub) {
  return numSub - 1
}
// - Write an Arrow Function without curly brackets(if possible)
let substractOne = numSub => numSub - 1;
// - Write an Arrow Function with curly brackets
let substractOne = (numSub) => {
  return numSub - 1;
}
// - Execute the function
substractOne (5);
// - Execute the function and store the return value in a variable.
let valueNumSub = substractOne(5);
// - What is the typeof returnValue
//typeof Value is "string"
/* 3. Add two numbers

Write a function named `sum` that accepts two numbers and returns the sum of them.

Do the following with above problem.
*/

// - Write a Function Declaration
function sum(numA,numB){
  return numA + numB;
}
// - Write a Function Expression
let sumTwo= function sum (numA,numB){
  return numA + numB;
}
// - Write an Arrow Function without curly brackets(if possible)
 let sum = (numA , numB) => numA - numB;
// - Write an Arrow Function with curly brackets
let sum =  (numA,numB) => {
  return numA - numB;
}
// - Execute the function
sum(12,25);
// - Execute the function and store the return value in a variable
let sumValue = sum(12,25);
// - What is the typeof returnValue
// type of sumValue is string
/* 4. Square of the given value

Write a function named `square` that accepts a number and returns the square of the number.

Do the following with above problem.
*/

// - Write a Function Declaration
function square(numsq){
  return numsq * numsq;
}
// - Write a Function Expression
let sqr = function square (numsq){
  return numsq * numsq;
}
// - Write an Arrow Function without curly brackets(if possible)
let square = (numsq) => numsq * numsq;
// - Write an Arrow Function with curly brackets
let square = (numsq) =>{
  numsq * numsq;
}
// - Execute the function
square(12);
// - Execute the function and store the return value in a variable
let valueSquare = square(12);
// - What is the typeof returnValue
// type of valueSquare is string
/* 5. Find isGreater

Write a function named isGreater that accepts two numbers`x` and`y` and returns`true` if x is greater than y or return `false`.

Do the following with above problem.
*/

// - Write a Function Declaration
function isGreater(x,y){
  if(x>y){
    return true;
  }
  else{
    return false;
  }
}
// - Write a Function Expression
let  greater= function isGreater(x,y){
  if(x>y){
    return true;
  }
  else{
    return false;
  }
}
// - Write an Arrow Function without curly brackets(if possible)
let isGreater = (x,y) => x > y ? true :false;
// - Write an Arrow Function with curly brackets
let isGreater = (x,y) =>{
  if(x>y){
    return true;
  }
  else{
    return false;
  }
}
// - Execute the function
isGreater();
// - Execute the function and store the return value in a variable
let valueIsGreater = isGreater();
// - What is the typeof returnValue
// type of valueIsGreater is string
/* 6.

Write a function named `oddOrEven` that accepts a`number` and returns

  - `Number is odd` for odd number
  - `Number is even` for even number.

Do the following with above problem.
*/

// - Write a Function Declaration
function oddOrEven(number){
  if( number % 2 ===0){
    return `Number is odd`;
  }
  else{
    return `Number is even`;
  }
}
// - Write an anonymous Function Expression
let oddOrEven = function (number){
  if( number % 2 ===0){
    return `Number is odd`;
  }
  else{
    return `Number is even`;
  }
}
// - Write an named Function Expression
let oddEven = function oddOrEven(number){
  if( number % 2 ===0){
    return `Number is odd`;
  }
  else{
    return `Number is even`;
  }
}
// - Write an Arrow Function without curly brackets (hint: use ternary operator)
let oddOrEven = (number) => number % 2 === 0 ? alert(`Number ${number} is Even`):alert(`Number ${number} is Odd`)
// - Write an Arrow Function with curly brackets
let oddOrEven = (number) => {
  if( number % 2 ===0){
    return `Number is odd`;
  }
  else{
    return `Number is even`;
  }
}
// - Execute the function
oddOrEven(17);
// - Execute the function and store the return value in a variable
let valueOddEven = oddOrEven(18);
// - What is the typeof returnValue
//typeof is string 
