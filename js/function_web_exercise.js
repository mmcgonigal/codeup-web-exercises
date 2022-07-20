"use Strict";

function isOdd(number){
    if(number%2===1){
        console.log("This is odd number")
    }else{
        console.log("This is even number")
    }
};
isOdd(7);
function isEven(number1){
    if(number1%2===0){
    console.log("This is even number")
    }else{
        console.log("This is odd number")
    }
}
isEven(10);
function identity(input){
    return input;
}
identity("banana");
function addFive(input1){
   console.log(input1+5)
}
addFive(10);
addFive("banana");
function isMultipleOfFive(number2){
    let multipleFive = number2 % 5
    if(multipleFive===0){
        return multipleFive;
    } else {
        console.log ("The number is not multiple of five!")
    }
}
console.log(isMultipleOfFive(10));
function isThree(n){
if(n===3){
    console.log("true")
}else{
    console.log("false")
}
};
isThree(3)
function isMultipleOfThree(input2){
   let multipleThree = input2 % 3;
   if (multipleThree ===0){
       return multipleThree;
   }else {
       console.log("The number is not multiple of 3.")
   }
}
isMultipleOfThree(10);
function isMultipleOfThreeAndFive(input3){
    let multipleThreeAndFive = input3 % 3 ===0 && input3 % 5 === 0
    if (multipleThreeAndFive){
        console.log("This number is multiple of 3 and also multiple of 5");
    } else {
        console.log ("This does not meet criteria,Sorry! ");
    }
}
// function isMultipleOfThreeAndFive(input3){
//     let multipleThree = input3 % 3 === 0;
//     let multipleFive = input3 % 5 === 0
//     if (multipleThree && multipleFive){
//         console.log ("This number is multiple of 3 and also multiple of 5");
//     } else {
//         console.log( "Sorry, This does not meet criteria ")
//     }
// }

isMultipleOfThreeAndFive(15);
isMultipleOfThreeAndFive(17);
function isMultipleOf(target,n){
    let multipleOf= target % n;
    if(multipleOf === 0 ){
        console.log("YES");
    }else {
        console.log("NOPE");
    }
}
isMultipleOf(14,2)
isMultipleOf(13,2);

function isTrue(a){
    let type1= Boolean(a)
    if(type1){
        console.log ("True...")
    } else {
        console.log("False")
    }
}
isTrue(true)
function isFalse(b){
    let type1 = Boolean(a);
    if(!type1){
        console.log(`${type1} is false ! `)
    }else{
        console.log(`${type1} is true`)
    }
}
isFalse(null);
function isTruthy(input5){

}







