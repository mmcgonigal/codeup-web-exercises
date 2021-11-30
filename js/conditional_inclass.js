// In plain English,
let weather = "sunny"
if(weather==="sunny"){
    console.log("wear shirt");
} else if (weather==="rainy"){
    console.log("bring umbrella")
} else if(weather ==="snowy"){
    console.log("wear 10 jackets")
} else {
    console.log("wear whatever")
}
//if my name is really my name ?

let myAge = 31;
let actualAge =21;
function checkAge (myAge, actualAge){
    if (myAge === actualAge){
        console.log("my age is Actual age")
    } else {
        console.log("that's cool")
    }
}
checkAge(28,actualAge)

//five students, Exercise: Create 5 different variables that holds 5 different number grades.
// (ex: let laurasGrade = 99) Write a function that accepts a student’s number grade, and returns  their letter grade based on their number grade. Call the function for each student.
// Scoring: A: 90 + , B: 80 - 89, C: 70-79, D: 60 - 69, F: 60 - (edited)



function makeGrade (grade){
    if (grade >=90){
        console.log("A")
    } else if ( grade>=80){
        console.log("B")
    } else if ( grade >=70){
        console.log("C")
    } else if (grade >=60){
        console.log("D")
    } else {
        console.log("FAIL")
    }
}
makeGrade(50)

// let studentA = 95;
// let studentB = 87;
// let studentC = 77;
// let studentD = 68;
// let studentE = 54;

// function studentGrade(grade){
//     if (grade >=90){
//         console.log("A-Excellent")
//     }else if (grade<90 && grade >=80){
//         console.log("B-Good job!")
//     }else if (grade<80 && grade >=70){
//         console.log("C-PASS")
//     }else if (grade<70 && grade >=60){
//         console.log("D-Work harder!")
//     } else {
//         console.log("F-Extra class on summer vacation!")
//     }
// }
// studentGrade(studentC);
// studentGrade(studentE);
// if (true === !!"4"){
//    console.log("matches")
// }else{
//  console.log("not matches")
//}

// 4=="4" ? console.log("matches") : console.log("not matches");
let studentA= 90
let stundentB= 78
let studentC= 50

function studentGrade(grade){
    return grade>=90? console.log ("A-Exellent")
            :grade >90 && grade <=80? console.log("B-Goodjob")
            :grade >80 && grade <=70? console.log("C-Pass!")
            :grade >70 && grade <=60? console.log("D-Work harder!")
            :console.log("F-Extra class on summer vacation!")
    }
studentGrade(studentA)
studentGrade(studentC)


let studentGrd = 83
switch(studentGrd){
    case 90:
        console.log("A-Excellent")
        break;
    case 83:
        console.log("B-Goodjob")
        break;
    case 50:
        console.log("C-Pass")
        break;
    case 60:
        console.log("D-Work harder ")
        break;
    case 40:
        console.log("F-summer class enrolled")
        break;
    default :
        console.log ("well....")
    }
//weather sunny =sunglasses, rainy = umbrella , snow = 10 jackets
let weather3 = "sunny"
switch(weather3){
    case "sunny":
        console.log("sunglasses")
        break;
    case "rainy":
        console.log("umbrella")
        break;
}

"sunny" == "sunny"
"sunny" == "rainy"