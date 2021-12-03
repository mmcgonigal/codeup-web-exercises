let favoriteFood=["noodle","kalbi","pizza","steak","caldo"]
console.log(favoriteFood)
console.log(favoriteFood.length)
console.log(favoriteFood[1] += " 1")
console.log(favoriteFood[2] += " 2")
console.log(favoriteFood[3] += " 3")
console.log(favoriteFood[4] += " 4")







let students=["Gerald","Mark","Mina","Jason","Justin","Justin",]
console.log(students)
console.log(students.length)
console.log(students[2]);
console.log(students[4]);
students[4] += "Sebastian"  //students[4] = students[4] + "Sebastian"
console.log(students)

console.log(students[4])

console.log(students.indexOf("Mina"))
console.log(students.lastIndexOf("Mina"))
Math.random

let ages = [14, 23 ,89, 5, 25,36];
for ( let i = 0 ; i < ages.length ; i++){
            console.log(ages[i]*2);
}


let samsDogs=["blue","luna","scamp"];
console.log("before", samsDogs)
samsDogs.unshift("spot")  // add to front
console.log("after unshift", samsDogs);
samsDogs.push("rex") //  add to the last
console.log("after push", samsDogs)
console.log("removing last index")
console.log("after pop",samsDogs)
samsDogs.pop();
console.log("after shift")
samsDogs.shift();
console.log((`fetching index of luna`))
console.log("luna's index", samsDogs.indexOf("luna"))

console.log(samsDogs.reverse());
let numbers = [4,3,45,63,221,23]
let searchTerm = "soup, tomato, no-garlic,1hour"
let parseSearchTerm = searchTerm.split("")
console.log("Parsed Search Term", parseSearchTerm)


let fruits=["apple","banana","strawberry"]
let fruits2= ["coconut","watermelon"]
let basket = fruits.concat(fruits2)
console.log(basket)
let num1=[1,2,3,4,5]
let num2=[6,7,8,9]
num3=num1.concat(num2)
console.log(num3)













