"use strict"

for(let i=0; i<10; i++){
    console.log("for loop iteration #" + i)  //
}

let i=0;
while(i<10){
    console.log("for loop iteration number " + i);
    i++  //
}

for (let i=0,j=9; i<10; i++,j--){
    console.log(`for loop iteration #  ${i}, j = ${j}`); // why is this function not working if i put "use strict"???
}

let numberToStop = 5 ;
for (let i =3; i<15; i++){
    console.log("loop counter is:  " + i);
    if(i === numberToStop){
        console.log("We have reached to stopping point ! : break !! ")
        break;                           //break = as soon as hit break , get out of code and iteration.
        console.log("you will never see this line") // that's why this line was not executed.
    }
}
//while(true){
//  let answer = confirm("Do you want to continue?"  // while true, keep do this line
//  if(!answer){                                   //then, when it is false, in this case  confirm is not true,
//      break;                                      // it will break.
//  }
//}




for (let i=0; i <=20; i++){
    if(i % 2 !==0){
        continue;       //continue =  it doesnt get out of iteration ,continue to next iteration
    }
    console.log("Here is a lovely even number:  "+ i)
}


for(let i=0 ; i <= 20; i++){
    if(i%2){   // if(i%2) tobe true, 1%2 should be 1 because true =1 false =0
                // so when i is odd number, it met the continue and  and went back to iteration which is i<=20;
                 //
        continue;
    }
    console.log(i)
}


// let i =1;
// do{
//     console.log ( "Little different from just 'while lool'! "); // difference between do while and while is
//         i ++                                                    //do while execute the code first then check condition.
// }while (i<5 )                                               //so 'do while' execute code at least once.
//

let number =1
while(number <=5){
    console.log(number)
    number ++  // number +=1
}


// loop


//while //
//0 available spots
//20 parking spots (ending point )
//loop until a parking spot opens up.
//iterating through the loop.
//there are x number of spots available.
// how many parking spots are available in a parking garage

let availableParking = 0 ;
let maxAvailableParkingSpot = 20 ;
let carsParked = 0
while(carsParked < maxAvailableParkingSpot){
    console.log(`availble : ${availableParking} occupied : ${maxAvailableParkingSpot} `)
    availableParking++
    maxAvailableParkingSpot--
}


let usedSpot =20;
while(usedSpot > 0 ){
    usedSpot--;
    console.log(`There are ${20-usedSpot} Available`)
}

do {
    console.log (" i before ++i" , i)
    i++;
    console.log("i after ++i , ", i)
}while (i<=15);

// loop through number 0 -50  by 2s
// var i = 0
// do{console.log (i)
// i+=2
// }while(i<=50)
//////////////////after lunch break
// var i=0
// do{
//     console.log (i)
//     i++
// }while (i<=10)
//
//
// var i = 0
// while(i<=10){
//     console.log(i)
//     i++
// }
//====================challenge exercise !

// TODO: using prompt() and alert(), write a loop that will continue to ask for the correct password until the
// correct password is given.


var truePassword = "asdf"
function passwordInput(){
    // asking password
    let password= prompt("please enter password")
         while (password !== truePassword) {
             alert("Invalid Password")
            password= prompt("Try again.")
             }
             alert("you have entered right password")
        }

passwordInput()

// Laura 's example ::: ===============================
//let correctPass = "secret"
// let input = prompt ("what is the password?")
// while (input !== correctPass){
//     alert ("please check your password");
//     input = prompt("enter pass again")
// }
// alert("thank you")


for(let counter = 1; counter <=5; counter ++) {
    console.log("First counter" + counter)

    for (let counterTwo = 5; counterTwo > 0; counterTwo--) {
        console.log("Second counter" + counterTwo)
    }
}


//=====================Laura's example !

//
//=================================================================================================EXERCISE=============
//
// Create a function named showMultiplicationTable that accepts a number and console.logs
// the multiplication table for that number (just multiply by the numbers 1 through 10)

let g = 1
function showMultiplicationTable(){
    while (g<=10){
        console.log(3*g)
        g++
    }
}
showMultiplicationTable();




//looping 0-10

// Use a for loop and the code from the previous lessons
// to generate 10 random numbers between 20 and 200 and
// output to the console whether each number is odd or even.
 // how many times generating first round - random number 1  second round - random number 2 ...go on ..
// number that generates random ..?? Math.random(200) ,
for(let i=1; i<10; i++) {
    let randomNumber = Math.floor(Math.random() * (180) + 20)
    //console.log(randomNumber) - check to see if it produce random number;
    if (randomNumber%2 === 0){
        console.log(`Loop number ${i} 's random number is ${randomNumber} and it is even number! `)
    } else {
       console.log(`Loop number ${i} 's random number is ${randomNumber} and that is odd number! `)
    }
}

// Create a for loop that uses console.log to create the output shown below
// 1  1st loop 1
// 22 2nd loop i+1
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999



for(let i=0; i<=9; i++){
    let a='';        //empty string when everytime go back to outer loop, a becomes empty string,
    for(let k=i; k>0; k-- ){
        a+=i;    // a=a+i
    }
    console.log(a)   // '',''1, ''2,''2,''3,''3,''3 .....
}


for (let i=0; i<=9; i++) {
    let a = ""
    for (let k = 0; k < i; k++) {
        a += i;
    }
    console.log(a)
}
//Create a for loop that uses console.log to create the output shown below.100 95 90 85 ......5
for(let i = 100; i> 0; i-=5){
    console.log(i)
}
// ===========================================================EXTRA EXERCISE FROM LAURA.
// Also if you get stuck follow this pattern:
//  re-read the question and try breaking it down into pseudo-code (before you write any code)
// console.log any values that you’re not sure about
// the second you get stuck, turn on a 20' timer. if you are still stuck after the 20' … take a break
// find the key words that you know of and do some googling
// ask for help from us, your peers, alumni, ta’s, fellows, developer friends, etc.



// 1. SUM OF POSITIVE NUMBERS
// write a program to find the sum of positive numbers
// if the user enters a negative numbers, the loop ends
// the negative number entered is not added to sum
// hint: think about what is returned from a prompt
// hint: break it down and then if you want, wrap it into a function
//
//     function stringToNumber() {
//
//         userInput = prompt("put 2 numbers with ,")
//
//         userInput = userInput.split(',')
//         let m = Number(userInput[0]);
//         let k = Number(userInput[1]);
//         if (m < 0 || k < 0) {
//             stringToNumber()
//         } else {
//             console.log(m);
//             console.log(k);
//             return m + k;
//         }
//     }
//        stringToNumber(userInput)

//
function stringToNumber() {
var m;
var k;
    do {

        userInput = prompt("put 2 numbers with ,")

        userInput = userInput.split(',')
         m = Number(userInput[0]);
         k = Number(userInput[1]);


    } while (m < 0 || k < 0)
    return m + k
}

//=================2. FIZZ BUZZ
// Write a program that prints the numbers 1 to 100. But for multiples of three,
// print "fizz" instead of the number and  for any multiples of five print "buzz instead of the number.
// Numbers that are multiples of both three and five, print "fizzbuzz"
 for (let i = 1; i <= 100; i++){
     if(i % 3 === 0 && i % 5 === 0){
         console.log("fizz buzz")
         continue;
     }else if(i % 5 === 0){
         console.log("buzz")
         continue;
     }else if(i % 3 === 0){
         console.log("fizz")
         continue;
     }else{
         console.log (i)
         continue;
     }
 }

























//     3. TREE WITH STARS
// // write a program that results in the following display:
//
// *
// * *
// * * *
// * * * *
// * * * * *


for(let i = 0; i < 10; i++){
     let a = ''
    for(let k = 0; k < i; k++){
        a+="*"
    }
    console.log(a)
}
// I am not sure why this is undefined??!!









// ---
//     4. Given the animals array (see below)
// // write a program that accepts an array which returns the following for each element in the array when passed in the animals array:

// // should return:
// "🐸 is my favorite animal"
// "🦁 is my favorite animal"
// "🐵 is my favorite animal"
// "🐳 is my favorite animal"
// "🐕 is my favorite animal"
// "🦜 is my favorite animal"
let animals = ["🐸","🦁","🐵","🐳","🐕","🦜"]
function favoriteAnimal (arr){
    for(let i = 0; i < arr.length; i++){
        console.log(`${arr[i]}  is my favorite animal`)
    }
}
favoriteAnimal(animals)








