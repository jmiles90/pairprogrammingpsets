console.log('Section 1');
console.log('---------------------------------------1');

// Pair program with your partner to solve these problem sets!
// Drivers type in the code as directed by the Navigator.
// Navigators, try not to dictate the code verbatim, instead
// use conceptual/technical language to describe your solution.

// 1. Write a function that returns its argument plus two.

function addTwo(argument) {
    //ENTER YOUR CODE HERE
}

// console.log(addTwo(2)===4);
// console.log(addTwo(-2)===0);
// console.log(addTwo(1.5)===3.5);
///

console.log('---------------------------------------2');
////////////////////////////////////////////////////////////////
// 2. Write a function that returns a boolean stating if the argument is greater than 10.
function isGreaterThanTen(argument) {
    ///ENTER YOUR CODE HERE
}

// console.log(isGreaterThanTen(101) === 5);
// console.log(isGreaterThanTen(4) === 3);
// console.log(isGreaterThanTen(10) === 10);

console.log('---------------------------------------3');
//////////////////////////////////////////////////////////////
//3. Write a method that returns the greater of the two arguments.
// Assume that both arguments are integers.
function whichIsGreater(argument1, argument2) {
    ///ENTER YOUR CODE
}

// console.log(whichIsGreater(15, 9) === 15);
// console.log(whichIsGreater(10, 8) === 10);
// console.log(whichIsGreater(99, 100) === 100);

console.log('---------------------------------------4');

//4. Write a method that returns the negative value of the argument.
// Assume that the argument will be a positive number.
function returnNegative(argument) {


}
// console.log(returnNegative(15) === -15);
// console.log(returnNegative(1) === -1);
// console.log(returnNegative(55)) === -55);

console.log('---------------------------------------5');

// 5. Write a function that returns the remainder of it's arguments.

function returnNegative(argument1, argument2) {
    //ENTER YOUR CODE HERE
}

console.log(returnNegative(25, 5) === 0);
console.log(returnNegative(8, 3) === 2);
console.log(returnNegative(33, 5) === 3);

console.log('---------------------------------------');

console.log('Section 2'); // MEDIUM

console.log('---------------------------------------6');

// Write a function exponentiate that accepts a number and a power to raise that number to. 
// For the present, assume the power argument will always be a positive integer value.


function exponentiate(num1, num2) {
    //Enter Code Here
}

// console.log(exponentiate(2, 3) === 8);
// console.log(exponentiate(3, 5) === 243);
// console.log(exponentiate(4, 9) === 262144);

console.log('---------------------------------------7');

// 7. The function should sum the first two numbers passed in, and then round them down to the nearest integer. 
// The rounded sum should then be multiplied by the third argument, rounded up and returned.

function sumMultiplyAndRound(num1, num2, num3) {
    //Enter Code Here
}

// console.log(sumMultiplyAndRound(2, 3.5, 6.2) === 31)
// console.log(sumMultiplyAndRound(2.6, 4, 7.1) === 43)
// console.log(sumMultiplyAndRound(1.5, 3.9, 5.2) === 26)

console.log('---------------------------------------8');

// 8. Create a function to fill the empty array with numbers from 0 to 10.

function fillMe() {
    //Enter Code Here
}

// console.log(JSON.stringify(fillMe()) === JSON.stringify([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

console.log('---------------------------------------9');

// 9.Make a function that returns to the second decimal place after dividing.

function twoDecimalPlaces(dividend, divisor) {
    //Enter Your Code Here

}
// console.log(twoDecimalPlaces(8, 7).toString() === 1.14.toString());
// console.log(twoDecimalPlaces(11, 12).toString() === 0.92.toString());
// console.log(twoDecimalPlaces(1123412341234, 22).toString() === 51064197328.82.toString());

console.log('---------------------------------------10');

// 10. Create the function isPrime(num) which will take the num parameter being passed 
// and return true if the parameter is a prime number, otherwise return false.

// Note: A prime number is any number that can only be evenly divided by 1 or itself

function isPrime(num) {
    //Enter Code Here
}

// console.log(isPrime(17) === true);
// console.log(isPrime(108) === false);
// console.log(isPrime(1117) === true);

console.log('---------------------------------------');

console.log('HARD');
console.log('---------------------------------------11');

// 11.Create a function which strips out any zeros from a number, and returns the 'stripped' number.
// If the input is zero, the function should return NaN.
function removeZeros(num) {
    //Enter Code Here
}

// console.log(removeZeros(6006606.203) === 6666.23);
// console.log(removeZeros(400307102.005) === 43712.5);
// console.log(removeZeros(0) === NaN);

console.log('---------------------------------------12');

// 12. Write a method that returns the last n digits of its first argument,
//  where n is the second argument.
//  Assume both arguments are non-zero integers.
//  (Input)     =>      (Output)
//  nDigits(1234, 2) => 34
//  nDigits(54321, 4) => 4321
//  nDigits(9752, 1) => 2

// # HINT: What is the return value of 1234 % 100? How about 4 % 100?
function nDigits(argument1, argument2) {
    //ENTER YOUR CODE HERE
}

// console.log(nDigits(1234, 2) === 34);
// console.log(nDigits(567235, 4) === 7235);
// console.log(nDigits(999999999, 9) === 999999999);

console.log('---------------------------------------13');

//13. Write a method that returns the sum of digit passed into argument.
// sumOfDigits(123) => 6;
// sumOfDigits(111) => 3;
// sumOfDigits(900) => 9;

function sumOfDigits(num) {
    //Enter Code Here
}

// console.log(sumOfDigits(1234) === 10);
// console.log(sumOfDigits(900) === 9);
// console.log(sumOfDigits(54321) === 15);

console.log('---------------------------------------14');

// 14.Write a method that returns the greatest common divisor of two numbers
function greatestDivisor(argument1, argument2) {
    //Enter code here
}

// console.log(greatestDivisor(12, 18) === 6);
// console.log(greatestDivisor(24, 48) === 24);
// console.log(greatestDivisor(100, 250) === 50);

console.log('---------------------------------------15');
//15. Return an array of integers from 1 to n, except for each multiple of 3 replace the integer with "fizz", for each multiple of 5 replace the integer with "buzz", and for each multiple of both 3 and 5, replace the integer with "fizzbuzz".

function fizzbuzz(n) {
    //Enter Code here
}

// console.log(
// 	JSON.stringify(fizzbuzz(15)) ===
// 		JSON.stringify([
// 			1,
// 			2,
// 			'fizz',
// 			4,
// 			'buzz',
// 			'fizz',
// 			7,
// 			8,
// 			'fizz',
// 			'buzz',
// 			11,
// 			'fizz',
// 			13,
// 			14,
// 			'fizzbuzz',
// 		])
// );
// console.log(
// 	JSON.stringify(fizzbuzz(35)) ===
// 		JSON.stringify([
// 			1,
// 			2,
// 			'fizz',
// 			4,
// 			'buzz',
// 			'fizz',
// 			7,
// 			8,
// 			'fizz',
// 			'buzz',
// 			11,
// 			'fizz',
// 			13,
// 			14,
// 			'fizzbuzz',
// 			16,
// 			17,
// 			'fizz',
// 			19,
// 			'buzz',
// 			'fizz',
// 			22,
// 			23,
// 			'fizz',
// 			'buzz',
// 			26,
// 			'fizz',
// 			28,
// 			29,
// 			'fizzbuzz',
// 			31,
// 			32,
// 			'fizz',
// 			34,
// 			'buzz',
// 		])
// );
// console.log(
// 	JSON.stringify(fizzbuzz(10)) ===
// 		JSON.stringify([1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz'])
// );

////////////////////////////////////////////////