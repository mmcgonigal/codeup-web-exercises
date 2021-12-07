console.log("Objects")
let array = [1,2,3, true, false]

let birthdayObject = {
    month: "November",
    day: 22,
    getDetail: function(){   //getDetail is the name of function.
        return this.month + ", " + this.day    // "this" is reference to this object. -

    }
}

let person = {
    name: "Jack",
    birthday: birthdayObject,
    isTall: false,
    getDetail : function() {
        return this.name
    }
}

function createPerson(name){
    return {
        firstName : name,
        greeting: function(){
            console.log("Hello My name is" + this.firstName)
        }
    }
}
let personTwo = createPerson("laura");
let personThree = createPerson("Ry");
// object literal

//let person = new Object()
// const newPropertyName = 'name' // dynamically creating property ,
// person [newPropertyName] = "Matt lewis"; //  if do in [ " " ], I can add space in property , ex : ["name here"] ,
//                                 // also can create property dynamically.
// person.birthday = "Sep, 22";
// person.isTall = true;
//
//
console.log(person)
// let dog = {
//     breed: "Huskey",
//     colors: ["brown", "black", "white"],
//     sex: "female",
//     name: "luna",
//     isFloofer: true,
//     bark: function (loud) {
//         if (loud) {
//             console.log("woof Woof! ")
//         } else {
//             console.log("ruf ruf!")
//         }
//     }
//
//
//     getDetails: function () {
//         return this.color[0] + "" + this.breed + "named" + this.name
//     }
//  }
//}
let collectionOfDogs = []


function createDog(name, colors, breed) {
    return {
        breed: breed,
        colors: colors,
        sex: "f",
        name: name,
        isFloofer: true,
        bark: function (loud) {
            if (loud) {
                console.log("Woof Woof!!");
            } else {
                console.log("ruf ruf");
            }
        },
        getDetails: function () {
            return this.colors[0] + " " + this.breed + " named " + this.name;
        }
    }
}
console.log("createDog: ", createDog("gecko",["black","white"],"mixed").getDetails());

function print(person){
    console.log(person.name);
    console.log(person.age);
}
//==================================================================PERSONAL PRACTICE =========================
const mina = {name : "mina", age : 35};   // {key : value}
print(mina);
mina.hasJob=false; // adding
console.log (mina)
delete mina.hasJob // deleting
console.log(mina)
console.log(mina.name);
console.log(mina["name"]); // key should be string type
mina["hasJob"]=false;
console.log(mina.hasJob)   // key.value  is used in when actually coding
console.log(mina["hasJob"]) // computed property is used in "run time" in real time.

function printValue(obj, key){
    console.log(obj, [key])  // if you use console.log(obj, key) =>won't work  because  there is no object called KEY !!
}
printValue(mina,"name")

const person1 = {name: "bob", age: 2};
const person2 = {name: "steve", age: 3};
const person3 = {name: "dave", age: 4};
const person4 = makePerson("mike",2)
const person5 = new Person("mina", 35)
console.log(person4)
console.log(person5)
function makePerson(name,age){
    return{
        name: name,      // => if key and value has same name then you can  "property value short hand " which means :: name,
        age: age,        //                                                                                             age,  wwould work .
    };
}
// refactoring the printValue function ::
function Person (name, age){
    this.name = name;
    this.age = age;
}













