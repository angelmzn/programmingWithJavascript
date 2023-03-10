/* Lesson 3 */

/* FUNCTIONS */

// Step 1: Using function declaration, define a function named add that takes two arguments, number1 and number2

function add(number1, number2){

// Step 2: In the function, return the sum of the parameters number1 and number2
    return number1 + number2;
}
// Step 3: Step 3: Using function declaration, define another function named addNumbers that gets the values of two HTML form controls with IDs of addend1 and addend2. Pass them to the add function

function addNumbers() {
    let addend1 = parseInt(document.querySelector('#addend1').value);
    let addend2 = parseInt(document.querySelector('#addend1').value);
    let result = add(addend1, addend2)
    console.log(result)
    


// Step 4: Assign the return value to an HTML form element with an ID of sum
    document.querySelector('#sum').value = result;
}
// Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function
document.querySelector('#addNumbers').addEventListener("click", addNumbers);

// Step 6: Using function expressions, repeat Steps 1-5 with new functions named subtract and subtractNumbers and HTML form controls with IDs of minuend, subtrahend, difference and subtractNumbers
function subtract(number1, number2) {
    return number1 - number2;
}

function substractNumbers() {
    let minuend = parseInt(document.querySelector('#minuend').value);
    let subtrahend = parseInt(document.querySelector('#subtrahend').value);
    let difference = subtract(minuend, subtrahend);
    console.log(minuend + " + " + subtrahend);
    console.log(difference);
    document.querySelector('#difference').value = difference;
};

document.querySelector('#subtractNumbers').addEventListener("click", substractNumbers);
// Step 7: Using arrow functions, repeat Steps 1-5 with new functions named multiply and mulitplyNumbers and HTML form controls with IDs of factor1, factor2, product and multiplyNumbers

function multiply(number1, number2){
    return number1 * number2;
};

function multiplyNumbers(){
    let factor1 = parseInt(document.querySelector('#factor1').value);
    let factor2 = parseInt(document.querySelector('#factor2').value);
    let product = multiply(factor1, factor2);
    document.querySelector('#product').value = product;
}

document.querySelector('#multiplyNumbers').addEventListener("click", multiplyNumbers);

// Step 8: Using any of the three function declaration types, repeat Steps 1-5 with new functions named divide and divideNumbers and HTML form controls with IDs of dividend, divisor, quotient and divideNumbers
function divide(number1, number2) {
    return number1 / number2;
}

function divideNumbers(){
    let dividend = parseInt(document.querySelector('#dividend').value);
    let divisor = parseInt(document.querySelector('#divisor').value);
    let quotient = divide(dividend, divisor);
    document.querySelector('#quotient').value = quotient;
}

document.querySelector('#divideNumbers').addEventListener("click", divideNumbers);
// Step 9: Test all of the mathematical functionality of the task3.html page.

//Done, it all worked properly. 

/* BUILT-IN METHODS */

// Step 1: Declare and instantiate a variable of type Date to hold the current date
let date = new Date();
console.log(date);

// Step 2: Declare a variable to hold the current year

let year;
console.log(year);

// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2
 year = date.getFullYear();
// Step 4: Assign the current year variable to an HTML form element with an ID of year
let dateDiv = document.querySelector('#year')
dateDiv.innerHTML = year;

/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25

let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]

// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"

document.querySelector('#array').innerHTML = array;

// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the reult to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )
document.querySelector('#odds').innerHTML = array.filter((n) => n % 2 == 1);
// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"
document.querySelector('#evens').innerHTML = array.filter((n) => n % 2 == 0);
// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"

let sum = 0
const sumWithInitial = array.reduce((accumulator, currentValue)=> accumulator + currentValue,sum);
document.querySelector('#sumOfArray').innerHTML = sumWithInitial;
// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"

var multiplied = array.map(x => x * 2);
console.log(multiplied)
document.querySelector('#multiplied').innerHTML = multiplied;
// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"
let sum2 = 0;
const sumWithInitial2 = multiplied.reduce((accumulator, currentValue)=> accumulator + currentValue,sum2);
document.querySelector('#sumOfMultiplied').innerHTML = sumWithInitial2;