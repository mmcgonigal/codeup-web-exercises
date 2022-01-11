
//
// -- Outline
//
// 3:15pm - Context
// 3:20pm - Overview
// 3:30pm - Question Gathering
// 3:40pm - Specific Topics / Questions Review
// 4:00pm - <br>
//     4:10pm - Continue Review (Challenge Problems, if time)
//
//     -- Context
//
//     What is JavaScript?
//Dynamically typed language
//Interpreted

//     Why are we learning JavaScript?
//It is the MOST used language on the client-side (in browser)
//A Good intro to programming.


//     How is JavaScript used in web development?
//Change the user experience based on various things in the browser anf behind the scenes.

//     What have we covered so far in JavaScript?
// Basics in JS Language and of programming

//     What are we going to cover in JavaScript?
// DOM, BOM, DOM Events


//
//     -- Overview
//
//     Lessons...
//
//     1. Intro to JS
//     2. JS with HTML
//     3. Functions
//     4. Conditionals
//     5. Intro to Unit Testing
//     6. Loops
//     7. Arrays
//     8. Objects
//     (9.) Putting it All Together
//
//     Core Concepts...
//
//     1. Intro to JS
//     Primative Data Types
//     Operators (arithmetic, concatenation, boolean, comparison)
//     Variables
//     Data Type
//
//     2. JS with HTML
//     Inline vs. External JS
//     Console Logging
//     Strict Mode
//     User Interaction (alert, confirm, prompt functions)
//
//     3. Functions
//     Calling functions
//     Function input and output
//     Arguments vs. Parameters
//     Parts of a Function (signature, body, return statement)
//     Anonymous Functions
//     Function Declaration vs. Function Expression
//     Function Scope (local vs. global variables)
//     IIFE (immediately invoked function expression)
//
//     4. Conditionals
//     If/If Else/Else
//     Ternary Operator
//     Switch Statement
//
//     5. Intro to Unit Testing
//     Jasmine
//     TDD
//
//     6. Loops
//     While Loop
//     Do-While Loop
//     For Loop
//     Break and
//
//     7. Arrays
//     Declaring an Array
//     Accessing the Length of an Array
//     Accessing Array Elements
//     Array Iteration (looping through an array)
//     ForEach Loop
//     Mutating Arrays (push, pop, shift, unshift)
//     Searching Arrays
//     Sorting/Reversing Arrays
//     Slicing an Array
//     Splitting Strings into Arrays and Joining Array Elements to Create Strings
//
//     8. Objects
//     Declaring Objects
//     Creating and Accessing Properties/Methods
//     Nesting Arrays and Objects
//     This Keyword
//
//     9. Combining it All Together
//     Writing Functions that use Conditional Logic Loops and Arrays and Objects
//
//
//     -- Questions / Topics for Review
//
//     Fill out the review doc: https://docs.google.com/document/d/1H0idkNn9yxwz1PAYKZgmOgsjm1ujUdRMgcG2h_AbGqQ/edit?usp=sharing
//
//     If you have extra time, start tackling the review questions
//
//
//     -- Review Exercises
//
//     Complete as time permits
//
//
//
//
    // ========== Conditional Logic and Functions

// Write a function that takes in a number and returns triple the value of the passed number. Assume only number inputs.
function tripleValue(input){
    return input*3;
}
console.log(tripleValue(4));

// Modify the above function to work with numeric strings as well.

function isNumber(input){
    return Number(input)=== parseInt(input);
}
//Number converts the type whereas parseInt parses the value of input.


console.log (isNumber('4'))

function stillNumber(input){
    if(isNumber(input)){
        return parseInt(input)*3;
    }
};
console.log(stillNumber('6'))
console.log(stillNumber(5))




// Modify the above function to return a string output of 'not a number' if the input is not a number or numeric string.

function notANumber(input){
    if(!isNumber(input) || isNaN(input)){
        return console.log (`${input} is not a number!`)
    }
}
notANumber("apple");
notANumber('4');
notANumber(20);
notANumber(true)
notANumber(NaN);

// Write a function that takes in a number and string and returns the string 'matches length' if the passed number is the length of the passed string and returns 'no length match' otherwise.

function stringNumber(input){
    let arr=input.split("")
    return arr.length;
};
console.log(stringNumber('apple'))

function matchLength(input1,input2){
    if(input1 === stringNumber(input2)){
        return 'match length'
    }else{
          return 'no matching length'
        }
    };
console.log(matchLength(5,'apple'))
console.log(matchLength(10,'hello'))



// (CHALLENGE) Write a function that takes in a day of the week as a string and returns the number that matches the day of the week. 'Sunday' should return 1 and 'Saturday' should return 7.




// ========== + Loops

// Write a function that takes in a string input and logs each character of the string separately

// Write a function that takes in a string and logs it 133 times

// Write a function that takes in a string input and logs the first character, then the first two characts, etc., until the full string is logged.

// Example Input: 'Codeup'
//
// Example Output:
//
//     "C"
// "Co"
// "Cod"
// "Code"
// "Codeu"
// "Codeup"

// (CHALLENGE) Write a function that takes in two string inputs and for each letter in the first string, logs how many times that given letter appears in the second string. It should be case insensitive. If a letter appears more than once in the first string, the output should simply log the same message as many times as it appears in the first string.

// Example Inputs: "Codeup", "Coding Challenges"
//
// Example Output:
//
//     'C' appears in 'Coding Challenges' 2 time(s)
// 'o' appears in 'Coding Challenges' 1 time(s)
// 'd' appears in 'Coding Challenges' 1 time(s)
// 'e' appears in 'Coding Challenges' 2 time(s)
// 'u' appears in 'Coding Challenges' 0 time(s)
// 'p' appears in 'Coding Challenges' 0 time(s)


// ========== + Arrays

// Write a function that takes in two inputs and returns an array with those two inputs

// Write a function that takes in and array and another input and returns true if the value of the second input is an element in the first input array

// Write a function that takes in an array of numbers and returns the lowest number. Assume only number element values and an array of at least two numbers.

// Write a function that takes in an array of numbers and returns the product of the lowest and highest number. Assume only number element values and an array of at least two numbers.

// Write a function that takes in an array of numbers and returns the sum of the lowest two numbers. Assume only number element values and an array of at least two numbers.

// Write a function that takes in an array of strings and returns the first two words as a string concatenated together with a dash. Assume at least three string elements in the passed array.
//
// Example Input: ['cat', 'dog', 'fish']
// Example Output: 'cat-dog'

// (CHALLENGE) Write a function that takes in an array of strings and returns the array of strings sorted from shortest to longest string


// ========== + Objects

// Write a function that takes in an object and returns the object with an added property called 'extra' and a value of 'extra value'

// Assume for the next questions, this can be used as the array of user objects:

/*
  var users [
    {
      name: 'Justin',
      occupation: 'Web Developer',
      averageAnnualPizzasOrdered: 22
    },
    {
      name: 'Cathy',
      occupation: 'Web Developer',
      averageAnnualPizzasOrdered: 15
    },
    {
      name: 'Fred',
      occupation: 'Data Engineer',
      averageAnnualPizzasOrdered: 35
    },
    {
      name: 'Mary',
      occupation: 'DBA',
      averageAnnualPizzasOrdered: 10
    }
  ]
*/

// Write a function that takes in an array of user objects and returns the user object of the user with the longest name

// Write a function that takes in an array of user objects and returns the 'Web Developer' with highest averageAnnualPizzasOrdered value

// Write a function that takes in an array of user objects and returns the same array of user objects without the 'averageAnnualPizzasOrdered' properties

// (CHALLENGE) Write a function that takes in an array of user objects, increases the value of averageAnnualPizzasOrdered by 5 for each user and returns the average annual pizzas ordered across all users, after this adjustment.





