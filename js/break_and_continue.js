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



console.log("Number to skip is")




//
// var userNumber = 0;
//
// do{
//     userNumber = Number(prompt("Gimme an odd number"))
//     if(userNumber < 1 || userNumber >50) {
//         alert("Number is out of bound")
//     } else if(isNaN(userNumber)) {
//         alert("That is not a number")
//     } else if(userNumber % 2 === 0 ){
//         alert ("Number is not odd")
//     }else {
//         alert (" YAY you entered a valid number,")
//         break;
//     }
// }while(true)
//
// console.log(" Number to skip is " + userNumber)
// for ( var i =1 ; i <= 50; i+=2) {
//     if( i === userNumber) {
//         console.log("Yikes :  skipping number: "+ userNumber)
//         continue;
//     }
//     console.log("Here is an odd number: " + i)
// }
//
//
//
//
//
//
//
//
//
//
//
// //===========do while =====
//
// var allCone = math.floor(math.random() * 50) + 50;
// do {
//     var conesToPurchase = Math.floor(Math.random() * 5) + 1;
//
//     if (conesToPurchase <= allCones) {
//         console.log(conesToPurchase + "cones sold......")
//         allCone -= conesToPurchase
//     }else{
//         console.log("cannot sell you" + conesToPurchase + "cones I only have" + allCone +"...." )
//     }
//     console.log(allCone)
// }while(allCone > 0)
// console.log ("all cones are gone.")