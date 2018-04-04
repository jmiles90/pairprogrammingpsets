console.log("Easy");
 console.log("---------------------------------------1");


// Pair program with your partner to solve these problem sets!
// Drivers type in the code as directed by the Navigator.
// Navigators, try not to dictate the code verbatim, instead
// use conceptual/technical language to describe your solution.

// 1. Write a method that returns its argument converted to a string.

function returnString(argument) {
  //ENTER YOUR CODE HERE
}



//Uncomment below to test (leave this line commented)
console.log(returnString(1234)==='1234');
console.log(returnString(true)==='true');
console.log(returnString(0)==='0');
///
console.log("---------------------------------------2");
////////////////////////////////////////////////////////////////
// 2. Write a method that returns its argument rounded to the nearest integer.
function roundToNearest(argument){
    //ENTER YOUR CODE HERE
}


console.log(roundToNearest(4.5)===5);
console.log(roundToNearest(3.75)===4);
console.log(roundToNearest(9.9)===10);

console.log("---------------------------------------3");
//////////////////////////////////////////////////////////////
//3. Write a method that returns the remainder of its two arguments.
// You may use the modulo (AKA "%") operator. 
// The dividend is divided by the divisor. (dividend/divisor)

function returnRemainder(dividend,divisor){
//ENTER YOUR CODE HERE
}

//Uncomment below to test (leave this line commented)
console.log(returnRemainder(15,9)===6);
console.log(returnRemainder(10,8)===2);
console.log(returnRemainder(100,99)===1);

console.log("---------------------------------------4");


//4. Write a method that returns the sum of absolute values of its arguments.
function absoluteValueSum(argument1,argument2) {
    //ENTER YOUR CODE HERE
  
}


console.log(absoluteValueSum(-15,0)===15);
console.log(absoluteValueSum(20,-20)===40);
console.log(absoluteValueSum(-50,-1000)===1050);


console.log("---------------------------------------5");

// 5. Write a method that returns the negative value of its argument.
// If the argument is negative, the method simply returns the argument
// Input => Output
// -1 => -1
//  1 => -1
//  0 => 0)
// HINT: try using the Math.abs() function

function returnNegative(argument) {
   //ENTER YOUR CODE HERE
}



console.log(returnNegative(25)===-25);
console.log(returnNegative(0)===-0);
console.log(returnNegative(-5)===-5);

console.log("---------------------------------------");


console.log("MEDIUM");// MEDIUM

console.log("---------------------------------------6");

// 6. Write a method that returns the last digit of its argument.
// Assume the argument is an integer.
// HINT: What is the return value of 142 % 10? How about 2 % 10?


function returnLastInteger(argument){
    //ENTER YOUR CODE HERE
}

console.log(returnLastInteger(1234)===4);
console.log(returnLastInteger(500000001)===1);
console.log(returnLastInteger(999999999999)===9);

console.log("---------------------------------------7");


// 7. Write a method that returns a boolean indicating whether 
// the last digit of the method's argument is odd.
// Assume the argument is an integer.
// Bonus points if you use last_digit as a helper method.
function isLastNumberOdd(argument) {
    //ENTER YOUR CODE HERE
}

console.log(isLastNumberOdd(1234)===false);
console.log(isLastNumberOdd(123)===true);
console.log(isLastNumberOdd(99999)===true);

console.log("---------------------------------------8");
console.log("console.log() your result for this question");
// 8. Create a method that makes a triangle with "n" amount of rows.
// n will be the argument passed through the function.
// makeTriangle(5) => *
//                    **
//                    ***
//                    ****
//                    *****

function makeTriangle(n){
//Enter Code Here
}

makeTriangle(9); 
// should return 
//*
//**
//***
//****
//*****
//******
//*******
//********
//*********
console.log("---------------------------------------9");

// 9.Javascript by default does not return decimals when divising. Make a function that gives the same output you would expect when dividing with a calculator.

// The decimal remainder is the right side of the decimal point 
// (the "fractional part") of the quotient.
// (calculatorDivision(8,5) => because 8/5 => 1.6)

function calculatorDivision(dividend,divisor){
//Enter Code Here
}

console.log(calculatorDivision(8,5)===1.6);
console.log(calculatorDivision(9,6)===1.5);
console.log(calculatorDivision(100,40)===2.5);

console.log("---------------------------------------10");

// 10.Make a function that returns the argument with all lowercase letters.

function allLowerCase(argument){
//Enter Code Here
  
}


console.log(allLowerCase("BaNaNa")==="banana");
console.log(allLowerCase("heLOOO")==="helooo");
console.log(allLowerCase("Avatar")==="avatar");


console.log("---------------------------------------");

console.log("HARD");
console.log("---------------------------------------11");

// 11.Make a function that returns the argument with all its uppercase characters removed.
function removeUpperCase(argument) {
//Enter Code Here
}


console.log(removeUpperCase("Avatar")==="vatar");
console.log(removeUpperCase("BaNaNa")==="aaa");
console.log(removeUpperCase("heLOOO")==="he");


console.log("---------------------------------------12");


// 12. Write a method that returns the last n digits of its first argument,
//  where n is the second argument.
//  Assume both arguments are non-zero integers.
//  (Input)     =>      (Output)
//  nDigits(1234, 2) => 34
//  nDigits(54321, 4) => 4321
//  nDigits(9752, 1) => 2

// # HINT: What is the return value of 1234 % 100? How about 4 % 100?
function nDigits(argument1,argument2){
    //ENTER YOUR CODE HERE
}

console.log(nDigits(1234,2)===34);
console.log(nDigits(567235,4)===7235);
console.log(nDigits(999999999,9)===999999999);



console.log("---------------------------------------13");

//13. Write a method that returns the sum of digit passed into argument. 
// sumOfDigits(123) => 6;
// sumOfDigits(111) => 3;
// sumOfDigits(900) => 9;

function sumOfDigits(num) {
//Enter Code Here
}

console.log(sumOfDigits(1234)===10);
console.log(sumOfDigits(900)===9);
console.log(sumOfDigits(54321)===15); 



console.log("---------------------------------------14");

// 14.Write a method that returns the greatest common divisor of two numbers
function greatestDivisor(argument1,argument2){
  //Enter code here
}

console.log(greatestDivisor(12,18)===6);
console.log(greatestDivisor(24,48)===24);
console.log(greatestDivisor(100,250)===50);




console.log("---------------------------------------15");
//15. Return an array of integers from 1 to n, except for each multiple of 3 replace the integer with "fizz", for each multiple of 5 replace the integer with "buzz", and for each multiple of both 3 and 5, replace the integer with "fizzbuzz".
 
 
function fizzbuzz(n){
//Enter Code here
}

console.log(JSON.stringify(fizzbuzz(15))===JSON.stringify([1,2,'fizz',4,'buzz','fizz',7,8,'fizz','buzz',11,'fizz',13,14,'fizzbuzz']));
console.log(JSON.stringify(fizzbuzz(35))===JSON.stringify([1,2,'fizz',4,'buzz','fizz',7,8,
  'fizz','buzz',11,'fizz',13,14,'fizzbuzz',16,17,'fizz',19,'buzz','fizz',22,23,'fizz','buzz',26,'fizz',28,29,'fizzbuzz',31,32,'fizz',34,'buzz']));
  console.log(JSON.stringify(fizzbuzz(10))===JSON.stringify([1,2,"fizz",4,"buzz","fizz",7,8,"fizz","buzz"]));



////////////////////////////////////////////////
 
