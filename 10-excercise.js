// parameter is a variable a ssigned during function call
// a greeting function
function greet(name) {
   console.log("Hello, " + name + "!"); //name serves as the parameter 
}
greet("deno");

 //sum of two numbers
 function sum(a, b) {
    return a + b;//retuns the sum of a and b
 }
 console.log(sum(3, 5));// 8

 //odd and even checker
function checkEvenOdd(number) {
    if (number % 2 === 0 ) {//=== strict equality thus it returns true if all same type and value
        return "even";
    }
    else{
        return "odd";
    }
}
console.log(checkEvenOdd(12));
console.log(checkEvenOdd(3));
// area of rectangle
function rectangleArea(length, width) {
 return length*width;
}
let length=14;
let width=10;
console.log(  rectangleArea(length, width));

//celcius to farenheit checker
function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

let tempC = 25;
console.log(`${tempC}°C is ${celsiusToFahrenheit(tempC)}°F`);// use of template literals
 
//use of fizz buzz function
function fizzBuzzNumber(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    return "FizzBuzz";
  } else if (number % 3 === 0) {
    return "Fizz";
  } else if (number % 5 === 0) {
    return "Buzz";
  } else {
    return number;
  }
}

// Example usage
console.log(fizzBuzzNumber(3));   // Fizz
console.log(fizzBuzzNumber(5));   // Buzz
console.log(fizzBuzzNumber(15));  // FizzBuzz
console.log(fizzBuzzNumber(7));   // 7

sum(3,4);

function sum(a,b) {
 return a + b;
}
//call back functions
function addThenMultiply(a, b, multiplyFunctionToCall){
  const addition = a + b;

  return multiplyFunctionToCall(addition);
}
console.log(
  addThenMultiply(3, 4, function (num){
    return num* 7
  })
);

let items = ["baking soda", "coke", "fizz"];// array of the items
 
let itemPrices = [4000, 2000, 1000];// array of the item prices
// assume the highest and lowest are [0]
 let highest = itemPrices[0];
 let lowest = itemPrices[0];
 // loop through the remaining
  for (let i = 1; i < itemPrices.length; i++) {
    if (itemPrices[i] > highest) {
        highest = itemPrices[i];
    }
    if (itemPrices[i] < lowest) {
        lowest = itemPrices[i];
    }
}

// Display results
console.log("Highest price: $" + highest);
console.log("Lowest price: $" + lowest);
