"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
 var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
 var randomColor = colors[Math.floor(Math.random() * colors.length)];
// function analyzeColor(color){
//     if(color=="red"){
//         console.log("Red is for strawberries")
//     } else if(color == "yellow"){
//         console.log("Yellow is for banana")
//     } else if (color == "green") {
//         console.log(" Green is for broccoli")
//     } else if (color == "Blue"){
//         console.log("Blue is for coconut")
//     } else if (color == randomColor){
//         console.log("rainbow!")
//     }else{
//     console.log("POOP.")
// }
//
//
// }
//analyzeColor("yellow")
//analyzeColor("green");
//
// /**
// //  * TODO:
// //  * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
// //  * You should see a different message every time you refresh the page
// //  */
//  analyzeColor(randomColor)
/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */

//console.log(randomColor)
//console.log("randomColor")
// var color1=randomColor
// switch(color1){
//     case "red":
//         console.log("Red is strawberries");
//         break;
//     case "green":
//         console.log("Green is broccoli");
//         break;
//     case "yellow":
//         console.log("Yellow is bananas");
//         break;
//     case "blue":
//         console.log("Blue is blueberries");
//         break;
//     case randomColor:
//         console.log("Rainbow!")
//         break;
//     default : console.log("POOP....")
// }
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
// function analyzeColor(){
//     let colorQ=prompt("What color do you like?")
//         if(colorQ=="red"){
//         alert("Red is for strawberries")
//     } else if(colorQ == "yellow"){
//         alert("Yellow is for banana")
//     } else if (colorQ == "green") {
//         alert(" Green is for broccoli")
//     } else if (colorQ == "Blue"){
//         alert("Blue is for coconut")
//     } else if (colorQ== randomColor){
//         alert("rainbow!")
//     }else{
//         alert("POOP.")
//     }
// }
// analyzeColor()

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
// function calculateTotal(luckyNo,preDC){
//      if(luckyNo ===1){
//         return preDC-(preDC*0.1);
//     } else if(luckyNo ===2){
//         return preDC-(preDC*0.25);
//     } else if(luckyNo ===3){
//         return preDC-(preDC*0.35);
//     } else if(luckyNo ===4) {
//          return preDC - (preDC * 0.5);
//      }else{
//             return "you get nothing"
//          }
//
//     }
//
// console.log(calculateTotal(1,100))
// console.log(calculateTotal(0,100))
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);
//var preDC = prompt("What is your bill?")
// function calculateTotal(luckyNo,preDC){
//     if(luckyNumber ===1){
//         return preDC-(preDC*0.1);
//     } else if(luckyNumber ===2){
//         return preDC-(preDC*0.25);
//     } else if(luckyNumber ===3){
//         return preDC-(preDC*0.35);
//     } else if(luckyNumber ===4) {
//         return preDC - (preDC * 0.5);
//     }else{
//         return "you get nothing"
//     }
//
// }
// console.log(calculateTotal(luckyNumber,preDC ))
/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
//
let playNumber= confirm("Do you want to play with number?") //true / false
console.log("hi")
if(playNumber){
  let inputNumber=  Number( prompt ("Please type in your number! ")) // if playNumber confirm is true activate prompt to input number
    if(isNaN(inputNumber)){ //if input from prompt is not number ;
        alert("Invalid input")
    }else {        // this will be if the prompt is number,

        oddEven(inputNumber) // first activate function called oddEven with the number from prompt ---> line 213
        alert(inputNumber + 100) // shows prompt input number + 100
        if (inputNumber > 0) {   // after +100 , it checks to see if the number is positive or negative integer .
            alert("This is Positive")
        } else if(inputNumber<0) {
            alert("This is negative")
        } else{
            alert("Error")
        }
    }
}else{
    alert("Invalid input")
}
function oddEven (inputNumber){  //when user put a number on prompt, first thing it does is this function
    if(inputNumber%2==0){           //to see if it is odd number or even number. do below , when function is done,
        alert("That is even number!")    // next it goes to activate code on ------->line 201

    }else if (inputNumber%2!==0){
        alert("That is odd number")
    }else{
        alert("You are supposed to put number!")
    }
}


