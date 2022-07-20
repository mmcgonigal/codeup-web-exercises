(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    var person = {
        firstName: "Mina",
            lastName: " McGonigal",
    }
    console.log(person.firstName);
    console.log(person.lastName);
    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    person.sayHello= function(){
        return " Hello from" +" " + this.firstName + " "+this.lastName + "!"
    }
    console.log(person.sayHello())

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320},
    ];
    shoppers.forEach(
        function(shopper){
        if(shopper.amount > 200){
            console.log("Hello, " + shopper.name + " you are getting a discount! your total will be "
                + (shopper.amount - (shopper.amount * 0.12)) )
        }else{
            console.log(" Hello , Fellow Shopper," + shopper.name +
                " You didn't spend enough money to get discount!")
        }
        }
    );



    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
    var books = [
        {
            title: "Horton hears a who",
            author: {
                firstName: "Theodor",
                lastName: "Seuss",
            },
        },
        {
            title: "Pride and Prejudice",
            author: {
                firsName: "Jane",
                lastName: "Austin",
            },
        },
        {
            title: "Harry Potter",
            author: {
                firstName: "J.K",
                lastName: "Rolling",
            },
        },
        {
            title: "coding for dummy",
            author: {
                firstName: "Laura",
                lastName: "Luiz",
            },
        },
        {

            title: "How to code?!",
            author:{
                firstName: "Sam",
                lastName: "Moore",
            },
        },
]
    // var books = [
    //     {title : "Outliers", author: { firstName: "Malcom", lastName: "Gladwell"}},
    //     {title: "Green Eggs and Ham", author: { firstName: "Dr.", lastName: "Seuss"}},
    //     {title: "HELLO WORLD", author: {firstName: "Justin", lastName:  "Conger"}}
    // ];
    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
books.forEach(
    function(book,index){
        console.log(` Number ${index +1}  book's title is ${book.title} and author name is ${book.author.firstName} ${book.author.lastName}`)
    }
)
    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */
    function createBook(titleofBook,author_firstName,author_lastName) {
        return {
            title: titleofBook,
            author: {
                firstName: author_firstName,
                lastName: author_lastName,
            },
        }
    }
    // this function returns an object.
    //console.log(createBook("GDT","Stig","Larson"))
    //books.push(createBook("GDT","Stig","larson"))
})();

//================SELF practice,

let heroes = [
    {name:"captain America",
    gender:"male",
    weapon:"shield",
    },
    {name:"ironman",
    gender:"male",
    weapon:"omnibeam",
    },
    {name:"thor",
    gender:"male",
    weapon:"hammer",
    },
    {name: "hawk eye",
    gender: "male",
    weapon:"arrow",
    },
]
console.log (heroes[2])
function createHero(nameOfHero,genderOfHero,weaponOfHero){
    let newHero= {
        name:nameOfHero,
        gender:genderOfHero,
        weapon:weaponOfHero,
    }
    heroes.push(newHero)
}

createHero("black widow","female","chitauri")

//heroes.push(newHero);// assigned variable and then put it ?!
                        // if i want to make it
//heroes.push("black widow","female","chitauri")  - if i want to add this way, should i put function in the object{}?
console.log(heroes)

heroes.forEach(function(hero){  // index parameter = dont really need many.
                                                                    //singular of object is good or element is good enough.
    if(hero.gender==="female"){
        console.log(`${hero.name} is one of my favorite hero and ${hero.name} 's weapon is ${hero.weapon}`)
    }else{
        console.log(`${hero.name} is one of marvel heroes `)
    }

})


