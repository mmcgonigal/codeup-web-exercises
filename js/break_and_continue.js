"use strict";
//Prompt the user for an odd number between 1 and 50.
//Use a loop and a break statement to continue prompting the user if they enter invalid input.
//Use a loop and the continue statement to output all the odd numbers between 1 and 50,
// except for the number the user entered.

//prompt("put a number between 1- 50 and odd  number "
// " what if it is string ", "what if it is out of range", " what if it is not odd number "
// I have to think about all the option of user input.
let userInput=0
do {
    userInput = prompt("Please type odd number between 1 and 50!")
    if(userInput < 0 || userInput > 50){
        alert("That number is not in range")
    } else if(isNaN(userInput)){  //******** remember !!!!!!!! isNaN is a function to determine whether NaN or not !!!!!!!!! ***********
        alert("That is not a number")
    }else if( userInput % 2 === 0) {
        alert("That is not odd number")
    } else {
        alert("You finally input odd number")
        break;
    }
}
while(true);

//Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.

//use for loop

for(let i = 1; i < 50; i+=2) {
    let skipNumber = 27
    if (i === skipNumber){
        console.log("Yikes ! skipping Nuber : " + skipNumber)
        continue;
    }
    console.log("Here is ODD NUMBER : " + i)
}

// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5

do {
    var clientRequest = Math.floor(Math.random() * 5) + 1;
    if (allCones >= clientRequest) {
        console.log(`I just sold ${clientRequest} cones .`)
        allCones -= clientRequest;
    }else if ( allCones < clientRequest ){
        console.log(clientRequest);
        console.log ("Sorry i dont have enough icedream...")
    } else {
        console.log(" YAY !! SOlD OUT ! I'm going home !!")
    }console.log (allCones)

} while (allCones > 0)
















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
var allCone = math.floor(math.random() * 50) + 50;
do {
    var conesToPurchase = Math.floor(Math.random() * 5) + 1;

    if (conesToPurchase <= allCones) {
        console.log(conesToPurchase + "cones sold......")
        allCone -= conesToPurchase
    }else{
        console.log("cannot sell you" + conesToPurchase + "cones I only have" + allCone +"...." )
    }
    console.log(allCone)
}while(allCone > 0)
console.log ("all cones are gone.")