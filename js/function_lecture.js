/*
let isAtBar = true;
let bac = .00;
let age = 22;
let cashOnHand = 4.99;

let canHaveADrink = (bac < .08 && age >= 21 && cashOnHand >= 5.00) // true && false && true && true --> false

if (canHaveADrink && isAtBar) {
    console.log("Have a brewski my dude!");
} else if (canHaveADrink || isAtBar) {
    console.log("here is togo for you!");
} else {
    console.log("sorry!");
}
;*/
//Its definition has two parameters: a boolean which informs
// if it's cloudy and a number which tells us how many planes are scheduled to fly
//If it is not cloudy AND there are less than 10 planes scheduled to fly, then today is a good day to fly!

function goodDayToFly(weather, schedule) {
    if (weather==="sunny" && schedule<=10) {
        console.log("It is a great day to fly")
    } else {
        console.log("Not a good day to fly")
    }
}
goodDayToFly("rainy", 0);

function plus(a, b){
    return a + b;
}
console.log(plus(2,4));

function minus(a,b){
    return a - b;
}
console.log(minus(5,3));
function multiple(a,b){
    return a * b;
}
console.log(multiple(3,4));
function devide(a, b){
    return (a / b)
};
console.log(devide(10,2));
function remainder(a,b){
    return (a % b)
}
console.log(remainder(10,3));

function calculate(a,b){
    if(a+b) {
        return a + b;
    }else if (a - b){
        return a - b;
    }else if (a * b){
        return a * b;
    }else if (a /b){
        return a / b;
    }else {
        console.log ("crap....")
    }
};
calculate (3 * 4);


