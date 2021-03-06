
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

// Write a function that takes in a number and returns triple the value of the passed number. Assume only number inputs.???
// function tripleValue(input){
//     return input*3;
// }
// console.log(tripleValue(4));
function tripleValue(input){
    return input*3;
}

// Modify the above function to work with numeric strings as well.???
function isNumber(input){
    return Number(input) === parseInt(input);
}

// function isNumber(input){
//     return Number(input)=== parseInt(input);
// }

//Number converts the type whereas parseInt parses the value of input.???
function stillNumber(input){
    if(isNumber(inout)){
        return parseInt(input)*3;
    }
}

// console.log (isNumber('4'))
//
// function stillNumber(input){
//     if(isNumber(input)){
//         return parseInt(input)*3;
//     }
// };
// console.log(stillNumber('6'))
// console.log(stillNumber(5))
//



// Modify the above function to return a string output of 'not a number' if the input is not a number or numeric string.???

function notANumber(input){
    if(!isNumber(input) || isNaN(input)){
        return `${input} is not a number.`
    }
}

// function notANumber(input){
//     if(!isNumber(input) || isNaN(input)){
//         return console.log (`${input} is not a number!`)
//     }
// }
// notANumber("apple");
// notANumber('4');
// notANumber(20);
// notANumber(true)
// notANumber(NaN);

// Write a function that takes in a number and string and returns the string 'matches length' if the passed number is the length of the passed string and returns 'no length match' otherwise.???

// function stringNumber(input){
//     let arr=input.split("")
//     return arr.length;
// };
// console.log(stringNumber('apple'));
// console.log(stringNumber('coconut'));

// function matchLength(input1,input2){
//     if(input1 === stringNumber(input2)){
//         return 'match length'
//     }else{
//           return 'no matching length'
//         }
//     };
// console.log(matchLength(5,'apple'))
// console.log(matchLength(10,'hello'))



// (CHALLENGE) Write a function that takes in a day of the week as a string and returns the number that matches the day of the week. 'Sunday' should return 1 and 'Saturday' should return 7.???
//
// function dayToNumber(days){
//     let day = {Sunday:1, Monday:2, Tuesday:3, Wednesday:4, Thursday:5, Friday:6, Saturday:7 };
//     console.log (days[day]);
// }
// dayToNumber('Wednesday')


// ========== + Loops

// Write a function that takes in a string input and logs each character of the string separately???
// function logString(input){
//     let arr= input.split('');
//
//     for(let i = 0;  i<=arr.length; i++ ){
//         console.log (arr[i])
//     }
// };
// logString('apple');
// logString('banana');

// Write a function that takes in a string and logs it 133 times???

//takes string as input
//logs133 times,

//
// function logOneThreeThreeTimes (input){
//     for(let i = 0; i <= 133; i ++){
//         console.log(input)
//     }
// }
// logOneThreeThreeTimes('banana')


// Write a function that takes in a string input and logs the first character, then the first two characts, etc., until the full string is logged.???

// Example Input: 'Codeup'
// Example Output:
//
//     "C"
// "Co"
// "Cod"
// "Code"
// "Codeu"
// "Codeup"

//input goes in
//for loop,
// i = c
//i+= i
// let i = 0;
// do{console.log(i); i++}while(i < 10)
//
// var i = 10;
//
// while (i < 10) {
//     console.log('while loop iteration #' + i);
//     i++;
// }
//
//  let input= 'Codeup'
//
//     for (let i = 0; i <= input.length; i++){
//            let character = input.charAt(i)  //character  = input.charAT (0) ; nada --> go to z loop
//             //console.log(character)     // next loop : charAt(1) : c
//
//             let characterAdded = ''     // next loop : charAt(2) : o
//             for(let z = 0 ; z<=i; z++){       // z=0 z<0 -->x
//             characterAdded += input.charAt(z)    //characterAdded  = charAt(0)
//             // console.log(characterAdded)
//                                                 //  console.log(characterAdded.concat(character));
//             }
//         console.log(characterAdded);// 0 c o
//     }                             // character added = charAT (1) //c//0 c 0 d

//1. take string as input
//2.create variable to put result
//3. everytime loops. add string to result.

// function takeString(input){
//     let result = '';
//     for(let i = 0; i <input.length; i++){
//         result+=input[i];
//         console.log(result);
//     }
// }
// takeString('???????????????.')

//1. takes string as input
//2.create variable to put result.
//3. everytime loops . add string to result.

// function log_Str(input){
//     let result = '';
//     for(let i= 0; i < input.length; i++){
//         result += input[i];
//         console.log(result);
//     }
// }
// log_Str('codeup')

// function log_str(input){
//     let arr = input.split("");
//     console.log(arr)
//     for(let i = 0 ; i < arr.length; i++){
//        let addStr = arr[i];   // i= 0 ->[c]  /  i =1 ->[o]
//         for(let z = 0; z < i; z++){   //
//             addStr += addStr + arr[i] // [c] + arr[1]   arr[1]+
//         }
//     }return addStr;
// }
// console.log(log_str("codeup"))


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

// Write a function that takes in two inputs and returns an array with those two inputs???
// //1.takes two input to function.
// //2.change input to return arr
// function inputToArr (input1, input2){
//     let newArr =[];
//     newArr.push(input1,input2)
//     console.log(newArr)
// }
// inputToArr("apple","banana")

// function printAll(...args){
//     for(let i = 0; i < args.length; i++){
//         console.log(args[i])
//     }
// }
// printAll("banana","apple","watermelon");

// Write a function that takes in an array and another input and returns true if the value of the second input is an element in the first input array ???

function compare(arr, input){
    for( let i = 0 ; i < arr.length; i ++){
        if(input === arr[i]){
            return true;
        }
    }
}
console.log(compare([1,2,3,4,5,6],4))

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


//Make a program that filters through this array: ["Ryan", "Kieran", "Jason", "Mary", "Jo", "Jake"] and returns a new array that contains only those whose name have only 4 letters in them.???
//1.go thru array
//2. find name with 4 letters
//3. put it in new array,

//
// let names = ["Ryan", "Kieran", "Jason", "Mary", "Jo", "Jake"]
//
// function filterName() {
//     let fourLetter = [];
//     for (let i = 0; i < names.length; i++) { //while for loop is going thru all the names ,
//         if (names[i].length === 4) {
//             fourLetter.push(names[i]);
//         }
//         // fourLetter += filterName(names[i]);
//     }
//     console.log(fourLetter);
// }
// console.log(filterName(names));

// write a function that accepts a string and checks whether each character in the string is upperCase or lowerCase and returns "letter  [insert letter] is uppercase/lowercase", accordingly.  Bonus: return "is not a character" if it's not a letter???
//
// input example: "bJI*ENsd4fRAIR5VIrsRFA-ijgRar"
// output example:
//     b is lowercase
// J is uppercase
// I is uppercase
// * is not a letter
// ...


//1. take string as input
//2. function each character
//3. for looping ,  if upper case , else if lower case , else , not a letter.
//charAt(), toUpperCase() ,toLowerCase(),
// loop thru can help.

// let result = '';
// let stringToFilter = 'aslkfjsdifil12SDFE13'
//
// function checkUpperLowerCase(){
//
//    for( let i =0; i < stringToFilter.length ; i++){
//         result = stringToFilter.charAt(i)
//
//        if(result.charAt(i) === result.toUpperCase()) {
//            console.log('letter ' + result + ' is uppercase');
//        }else if(result === result.toLowerCase()) {
//            console.log('letter ' + result + ' is lowercase');
//        }else{
//            console.log(result + ' is not a letter.');
//        }
//        }
//    }
// checkUpperLowerCase(stringToFilter);

//PROBLEM:  write a function that accepts a string of numbers and returns the sum of those numbers
//INPUT 1: "42958372" --- EXPECTED OUTPUT 1: 40
//INPUT 2: "917485"      --- EXPECTED OUTPUT 2: 34 (edited)

//1. function, accepts string of numbers,
//2. break string in to numbers,split('')
//3. put it in new array, Number() , , forEach add all index.

// function addAllInput(input){
//     let arr = input.split('');
//     let newArr = [];
//     for(i = 0; i <= arr.length; i++){
//         arr = Number(arr[i]);
//         newArr.push(arr);
//     }
//     let sum = newArr.reduce(function(x,y){
//     return x+y;
//     },0);
// }





// Write a function that returns an object displaying any number/letter that appears consecutively in a string of numbers. The object should display how many times that letter/number appears consecutively
// INPUT: ???42992338111134???
// EXPECTED OUTPUT: {9: 2, 3: 2, 1: 4}
// ---
//     INPUT: ???BQAAIPPPPFFA???
// EXPECTED OUTPUT: {a: 2, p: 4, F: 2}


//Write a function that removes any duplicates from an array.
//input = [2,3,5,8,3,1,2,6,3,2,7,8,2,4,7]
// expected output: [2,3,5,8,1,6,7,4]
//
// let pickOutDuplicates = input.reduce((previousValue,currentValue)=>{
//     let newArry=[]
//     previousValue !== currentValue ? newArry.push() : false;
// })
// console.log(pickOutDuplicates)



// write a function that collects vowel from input and count it . ???
//take input as argument,
//split the input into array, .split()
//go thru for loop.
// if the [i] is vowel, push it to new array ,
//count array length

 function count_vowel(input){
     let collectLetter = [];
     for(let i = 0; i < input.length; i++){
         let letter= input.charAt(i)
         if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u' )
             collectLetter.push(letter);
     }
     return collectLetter.length
 }
 console.log(count_vowel('helicopter'));

//
//
function countLetter(input) {
    let count = [];
    let word = input.split('')

    for (let i = 0; i < word.length; i++) {
        let letter = word[i];
        //console.log(word)
        if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u' ){
            count.push(letter)
            }
    }
    return count.length
}

console.log(countLetter('banana'));

// write a function that counts the number of duplicate characters.
//     example input: "adsjfdsfsfjsdjfhacabcsbajda"
// expected output: { a: 5, b: 2, c: 2, d: 4, f: 4, j: 4, s: 5 }



