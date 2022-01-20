//JS REVIEW

// Objects

//declaring an object:

// let USA = {
//     printStates: function(){
//         console.log ()
//     }
//    texas: {
//        size: "big",
//        flower: "bluebonnet",
//        bird: "mockingbird",
//        people: 30,
//        addPeaple: function(){
//            let nowPeople =this.people
//            console.log(this.people) // 30
//
//        }
//    }
// }

//nested objects, object methods, this keyword

let sirius = {
    numStudent:29,
    city: ['dallas','Houston','san antonio','fort Worth'],
    inPerson: false,
    theBest: true,
    //method - storage that stroe functions.
    returnCity: function(){
        console.log(8+8) //16
        console.log('hello world') //hello world
        return this.city; //san antonio
    }
}
console.log(sirius.inPerson);
console.log(sirius.returnCity());
console.log(sirius.returnCity);
console.log(sirius)

let cityOfName = {
    city: ['dallas','Houston',['downtown','rim','north central','museum district'],'fort worth',]
}
console.log(cityOfName.city);
console.log(cityOfName.city[2][1]); // access array inside of array [][]

let cityName = {
    city: ['dallas','Houston',['downtown','rim','north central','museum district'],'fort worth',
        {city: 'austin',numPeople:40, lake:true, weird:true}]
}
console.log(cityName)
console.log (cityName.city);
console.log(cityName.city[4].weird);

//ARRAYS
//declaring ARRAY

let cities = [
    {city : 'san antonio', people:30, isGreat:true, team: 'spurs'},
    {city : 'Dallas', people:40, isGreat:true, team: 'mavericks'},
    {city : 'Houston', people:50, isGreat:false, team: 'rockets'},
    {city : 'Austin', people:30, isGreat:true, team: 'keepItWeird'}
]
//forEach

cities.forEach(function(city){
    console.log(cities.city);
});


//Conditional statement

//operators if/else


let sports = ['spurs','mavericks','rockets','bucks']

//loop through array using forEach
sports.forEach(function(team){
    if(team.charAt(0)==='r'){
        console.log ('this ' + team + " starts with r " )
    }else{
        console.log("this "+ team +" does not start with r")
    }
})
//check something -- >conditional statement if/else
//how to find a first letter of a string.
//charAt()
//check if first letter of a team is "r"

console.log(10%3)

console.log(!!true)

let band={
    shred:function(){
        console.log("RAAAAAH")
    }
}

