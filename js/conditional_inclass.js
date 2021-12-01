// // In plain English,
// let weather = "sunny"
// if(weather==="sunny"){
//     console.log("wear shirt");
// } else if (weather==="rainy"){
//     console.log("bring umbrella")
// } else if(weather ==="snowy"){
//     console.log("wear 10 jackets")
// } else {
//     console.log("wear whatever")
// }
// //if my name is really my name ?
//
// let myAge = 31;
// let actualAge =21;
// function checkAge (myAge, actualAge){
//     if (myAge === actualAge){
//         console.log("my age is Actual age")
//     } else {
//         console.log("that's cool")
//     }
// }
// checkAge(28,actualAge)
//
// //five students, Exercise: Create 5 different variables that holds 5 different number grades.
// // (ex: let laurasGrade = 99) Write a function that accepts a student’s number grade, and returns  their letter grade based on their number grade. Call the function for each student.
// // Scoring: A: 90 + , B: 80 - 89, C: 70-79, D: 60 - 69, F: 60 - (edited)
//
//
//
// function makeGrade (grade){
//     if (grade >=90){
//         console.log("A")
//     } else if ( grade>=80){
//         console.log("B")
//     } else if ( grade >=70){
//         console.log("C")
//     } else if (grade >=60){
//         console.log("D")
//     } else {
//         console.log("FAIL")
//     }
// }
// makeGrade(50)
//
// // let studentA = 95;
// // let studentB = 87;
// // let studentC = 77;
// // let studentD = 68;
// // let studentE = 54;
//
// // function studentGrade(grade){
// //     if (grade >=90){
// //         console.log("A-Excellent")
// //     }else if (grade<90 && grade >=80){
// //         console.log("B-Good job!")
// //     }else if (grade<80 && grade >=70){
// //         console.log("C-PASS")
// //     }else if (grade<70 && grade >=60){
// //         console.log("D-Work harder!")
// //     } else {
// //         console.log("F-Extra class on summer vacation!")
// //     }
// // }
// // studentGrade(studentC);
// // studentGrade(studentE);
// // if (true === !!"4"){
// //    console.log("matches")
// // }else{
// //  console.log("not matches")
// //}
//
// // 4=="4" ? console.log("matches") : console.log("not matches");
// let studentA= 90
// let stundentB= 78
// let studentC= 50
//
// function studentGrade(grade){
//     return grade>=90? console.log ("A-Exellent")
//             :grade >90 && grade <=80? console.log("B-Goodjob")
//             :grade >80 && grade <=70? console.log("C-Pass!")
//             :grade >70 && grade <=60? console.log("D-Work harder!")
//             :console.log("F-Extra class on summer vacation!")
//     }
// studentGrade(studentA)
// studentGrade(studentC)
//
//
// let studentGrd = 83
// switch(studentGrd){
//     case 90:
//         console.log("A-Excellent")
//         break;
//     case 83:
//         console.log("B-Goodjob")
//         break;
//     case 50:
//         console.log("C-Pass")
//         break;
//     case 60:
//         console.log("D-Work harder ")
//         break;
//     case 40:
//         console.log("F-summer class enrolled")
//         break;
//     default :
//         console.log ("well....")
//     }
// //weather sunny =sunglasses, rainy = umbrella , snow = 10 jackets
// let weather3 = "sunny"
// switch(weather3){
//     case "sunny":
//         console.log("sunglasses")
//         break;
//     case "rainy":
//         console.log("umbrella")
//         break;
// }
// Write a function that accepts the top three bowling scores and returns the average.
//1write a function - write the function form first.
//2.pass in parameter- how many parameters do I need?
//parameter name doesnt really matter.- but close to function specific preferred.
//3. 3score(variable)
// using let , set the variables...
//4. return something(number)
//     Write a function that accepts the best score and returns true if its divisible by 3 or 5 and false if it’s not
// Write a function that accepts the name of the bowling place (“ThEbEsTbOwLiNgPlAcEever”) and returns it in all lower case BONUS: write a function that returns “TheBestBowlingPlaceEver” and return it all lowercase with a space between each word
// Given these variables: let score = 109; let name = “bowling Is Fun”; let isBowlingFun = true; let players = [“tom”, “jerry”, “Garfield”]; Write a function that returns the type of each of the variables (call the function once per variable);
// Write a function that executes all of the above functions
// Copy and execute the following functions, and find the Error: (Hint: try console logging the result)
let score1=100;
let score2=200;
let score3=300;
function bowlingScoreAvr(score1,score2,score3){
   let scrAvr= ((score1+score2+score3)/3)
    console.log(scrAvr)
    return scrAvr;
}
bowlingScoreAvr(100,200,300);

var bestScore = 150


function bowlingBestScore(bestScore){
    if (bestScore%3===0 || bestScore%5===0){
        return true;
    }else {
        return false;
    }
}
console.log(bowlingBestScore(bestScore));


function bowlingName(str){
    let name = str.toLowerCase();
    console.log(name)
    return name;
}
bowlingName("ThEbEsTbOwLiNgPlAcEever");
let score = 109;
let name = "bowling is fun";
let isBowlingfun =true;
let players = ["Tom","Jerry","Garfield"];


function typeOfVar(input){
    console.log(typeof input)
}
typeOfVar(score);
typeOfVar(name);
typeOfVar(isBowlingfun);
typeOfVar(players);


//
// function allIn(){
//    console.log(bowlingScoreAvr(score1,score2,score3));
//    console.log(bowlingBestScore(bestScore));
//    console.log(bowlingName(str));
//    console.log(typeOfVar(input));
//
//
// allIn()

function myFunction(firstName,lastName){
    return firstName + lastName
}
myFunction("Mina","McGonigal")

//function thatsNotMyName(name){ if(name = "Laura"){ return "that's me!, I'm " + "name"} } else { return "that's not my name" }

