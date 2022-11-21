// Use default parameter where ever you can

/*
1. 🎖Write a function named calculateDogAge that:
  * [ ] Takes 1 argument: your puppy's age.
  * [ ] Calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
  * [ ] Return the result dog age in dog year.
  * [ ] Add an additional argument to the function that takes the conversion rate of human to dog years.
*/

function calculateDogAge(puppyAge=0,humanYear=0) {
  // Your code goes here
   if(puppyAge){
    return puppyAge;
   }
   else if (humanYear){
    return humanYear * 7;
   }
}
calculateDogAge(1)
/*
2. 🎖Write a function named calculateMoviesToWatch that:
  * [ ] takes 2 arguments: age, number of movies you watch every week. (take 4 weeks per month)
  * [ ] calculates the number of movies for rest of the life (based on a constant max age).
  * [ ] Return the total number of movie you will watch.
*/

function calculateMoviesToWatch(age,number) {
  // Your code goes here
  const maxAge = 65;
  return ((maxAge - age) * number * 4 * 12 );
}
calculateMoviesToWatch(26,2)
/*
3. 🎖Create a function called celsiusToFahrenheit:
  * [ ] Accepts celsius temperature as argument.
  * [ ] Convert it to fahrenheit and return "NN°F is NN°C"
*/

function celsiusToFahrenheit(celsiuss) {
  // Your code goes here
 let fahrenheit = celsiuss * (9 / 5) + 32;
 return (`${fahrenheit}^F is ${celsiuss}^C`)
}
celsiusToFahrenheit(32);
/*
4. 🎖Create a function called fahrenheitToCelsius:
  * [ ] Accepts fahrenheit temperature as argument.
  * [ ] Convert it to celsius and return "NN°F is NN°C"
*/

function fahrenheitToCelsius(faharenheits) {
  // Your code goes here
  let celsius = (faharenheits - 32) * 5 / 9;
  return (`${faharenheits} ^F is ${celsius}^C`) 
}
fahrenheitToCelsius(32)
/*
5. 🎖 Write a function pow(n, x) that returns x in power n.

  * [ ] The function accepts two parameter x and n.
  * [ ] Return x times n
  * [ ] If the value of n is below 0 return "The number below 1 is not allowed"
*/

function pow(n,x) {
  // Your code goes here
  if(n < 0 ){
    return `The number below 1 is not allowed`
  }
  else{
    return n ** x;
  }
}
pow(5,2)
// Test
pow(3, 2); // 9
pow(3, 3); // 27
pow(1, 100); // 1
pow(-31, 2); // "The number below 1 is not allowed"

/*
6. 🎖Write a program that accepts two parameter a number n and a string with possible values of `sum` or `product`
and return sum or product of 1,…,n. If user enters any other value than `sum` or `product` alert `Not a valid Input`.
*/

function sumOrProductOfN(n,operator) {
  // Your code goes here
  switch (operator){
    case "sum":
    let resultSum = 0;
    for (let i = 0 ; i <= n; i++ ){
      resultSum += i; 
    }
    return resultSum;
   case "product":
    let resultProduct = 1;
    for (let j = 1 ; j <= n; j++ ){
      resultProduct *= j; 
    }
    return resultProduct;
  
    default: alert(`Not a valid Input`)
  }
  // if(operator === 'sum'){
  //   let resultSum = 0;
  //   for (let i = 1 ; i <= n; i++ ){
  //     resultSum += i; 
  //   }
  //   return resultSum;
  // }
  // else if(operator === 'product'){
  //   let resultProduct = 1;
  //   for (let j = 1 ; j <= n; j++ ){
  //     resultProduct *= j; 
  //   }
  //   return resultProduct;
  // }
  // else {
  //   alert(`Not a valid Input`)
  // }
}

sumOrProductOfN(4, 'sum'); // 10
sumOrProductOfN(4, 'product'); // 24
sumOrProductOfN(4, 'hello'); // alert "Not a valid Input"

/*
6. 🎖Write a program that accepts a number n using argument and return the sum of the numbers 1 to n
*/

function sumOfN(n) {
  // Your code goes here
  
      let resultSum = 0;
      for (let i = 0 ; i <= n; i++ ){
        resultSum += i; 
      }
      return resultSum;
    
}
sumOfN(5);
/*
7. 🎖Modify the previous program such that only multiples of 5 or 7 are considered in the sum, e.g. n = 20 (5,7,10,14,15,20) 71
*/

// Your code goes here
function sumOfMul(n){
 
    // let resultSum = 0;
    //   for (let i = 0 ; i <= n; i++ ){
    //     resultSum += rem; 
    //   }
    //   for(let j = 0; j <= n; j++){
    //     resultSum += remTwo;
    //   }
    //   return resultSum;
  }
  sumOfMul(20)
/*
8. 🎖Write a function `min` that takes two arguments and returns their minimum.
*/

function min(numA,numB) {
  // Your code goes here
  if(numA > numB){
    return numA;
  }
  else{
    return numB;
  }
}

min(0, 10);
min(0, -10);

/*
9. 🎖Write a JavaScript function which accepts an argument and returns the type of the value.
*/

function typeCheck(str) {
  // Your code goes here
 return typeof(str);
}
typeCheck(" ");
