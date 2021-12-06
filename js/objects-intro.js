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



