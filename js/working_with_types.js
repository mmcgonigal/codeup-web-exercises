var a = 1;
var b = a++;
console.log(a); //2
console.log(b);//1

var c = ++a;
console.log(a)//3
console.log(c)//3
var d = "hello";
var e = false;
console.log(d++);//NaN
console.log(e++);//NaN?..

var perplexed;//
console.log(perplexed + 2);//NaN
var price = 2.7;
price.toFixed(2)//2.70
console.log(price.toFixed(2)); //2.70
/*var price="2.7"
price.toFixed(2)//NaN?
console.log(price.toFixed(2));*/


console.log(isNaN(0)) //false
console.log(isNaN(1)) //false
console.log(isNaN("")) //?.. false - empty string converted into 0 ->number
console.log(isNaN("string"))//true
console.log(isNaN("0"))//false
console.log(isNaN("1"))//false
console.log(isNaN("3.145"))//false
console.log(isNaN(Number.MAX_VALUE))//false
console.log(isNaN(Infinity))//false
console.log(isNaN("true")) //true
console.log(isNaN(true))//flase
console.log(isNaN("false"))//true
console.log(isNaN(false))//flase

// to illustrate why the isNaN() function is needed:
console.log(NaN == NaN)//false. you can't compare it because NaN doesn't have value..?


console.log(!true)//false
console.log(!false)//true
console.log(!!true)//true
console.log(!!false)//false
console.log(!!0)//false
console.log(!!-0)//false
console.log(!!1)//1 so true
console.log(!!-1)//true
console.log(!!0.1)//true
console.log(!!"hello")//truthy
console.log(!!"")//false -empty string
console.log(!!'')//false =-empty string
console.log(!!"false") //truthy
console.log(!!"0")//truthy.

/*Execute the following statement in the Chrome JavaScript console and then follow the directions below.


var sample = "Hello Codeup";
Use .length to find the number of characters in the string.
Try to make the sample string all upper or all lower case.
Update the variable sample via concatenation so that it contains "Hello Codeup Students".
Replace "Students" with "Class".
Find the index of "c" using .indexOf(). What do you observe?
Find the index of "C" using .indexOf().
Retrieve a substring that contains only the word "Codeup" by using indexOf() and substring().*/
var sample = "Hello Codeup"
console.log(sample.length);
console.log(sample.toLowerCase());//does not change the value of sample.
sample += " students";
console.log(sample);
sample.replace("students", "Class")//replace won't change the value of sample.
console.log(sample);
console.log(sample.indexOf("c"));//because there is no lowercase c
console.log(sample.indexOf("C"));
let cIndex = sample.indexOf('C');
let pIndex = sample.indexOf('p') + 1;
console.log(sample.substring(cIndex, pIndex));
/*You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it),
and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?
*/
let littleMermaid = 3;
let brotherBear = 5;
let hercules = 1;
let rent = (littleMermaid + brotherBear + hercules) * 3;
console.log(rent);
/*Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour.
Google pays $400, Amazon $380, and Facebook $350.
How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.
*/
let gPay = 400;
let aPay = 380;
let fPay = 350;
let payCheck = gPay * 6 + aPay * 4 + fPay * 10;
console.log(payCheck);
/*A student can be enrolled in a class only
if the class is not full and the class schedule does not conflict with her current schedule.
*/
let enroll = "possible room";
let schedule = "not conflict";
let semester = enroll && schedule;
if (semester) {
    console.log("new semester class");
} else {
    console.log("well.. I can try seasonal class")
}

/*A product offer can be applied only if a person buys more than 2 items,
and the offer has not expired. Premium members do not need to buy a specific amount of products.
*/



 var username = "codeup";
 var password = "notastrongpassword";
// //the password must be at least 5 characters
// var passwordLessThan5 = password.length >= 5
// console.log(passwordLessThan5);
if(password.length>=5){
    console.log("true")
}
// //the password must not include the username
// var passwordWithoutId = password.includes(username);
// console.log(passwordWithoutId);

if (username.includes(password)){
    console.log("false")
    }else{
    console.log("true")
//
// //the username must be no more than 20 characters
// var usernameMoreThan20 = username.length <= 20;
// console.log(usernameMoreThan20);
// //neither the username or password can start or end with whitespace
// var usernameWithoutSpace = username.trim();
// var passwordWithoutSpace = password.trim();
// console.log(usernameWithoutSpace);
// console.log(passwordLessThan5);
//

// Erstwhile, the legislature determined that being at the bar is not necessary in order to be served,
// but all the remaining conditions are still valid
// Change the expression assigned to cashOnHand to make isAtBar optional  while still requiring the remaining values to be true
//
// let isAtBar = true;
// let bac = .00;
// let age = 22;
// let cashOnHand = 4.99;
//
// let canHaveADrink = (bac < .08 && age >= 21 && cashOnHand >= 5.00) // true && false && true && true --> false
//
// if (canHaveADrink && isAtBar) {
//     console.log("Have a brewski my dude!");
// } else if(canHaveADrink || isAtBar){
//     console.log("here is togo for you!");
// } else
// {
//     console.log("sorry!");
// };
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
//
//
//
//
//
