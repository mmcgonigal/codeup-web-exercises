"use strict";
//Prompt the user for an odd number between 1 and 50.
//Use a loop and a break statement to continue prompting the user if they enter invalid input.
//Use a loop and the continue statement to output all the odd numbers between 1 and 50,
// except for the number the user entered.

let NotOddNumber=prompt("please input odd number between 1 and 50");
let correctOddNumber = NotOddNumber%2
while(!NotOddNumber){
    alert("That is not odd number!")
    prompt("Please tyr again")
}

alert("Good job!")