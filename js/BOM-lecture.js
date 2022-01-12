'use strict'

let sirius ={
    numStudents: 30,
    classroom: "remote/in-person",
    checkAttendance : function (){
        prompt(" how many students in the class?")
        return this.classroom
    },

}


// this code will produce a console log every second
// when count >= max, the interval is cancelled, and the logging will stop

var count = 0; // starting point
var max = 10; // max number we want to get to
var interval = 1000; // interval time in milliseconds

var intervalId = setInterval(function () {
    if (count >= max) {
        clearInterval(intervalId); // stop Interval
        console.log('All done');
    } else {
        count++;
        console.log('Repeating this line ' + count);
    }
}, interval)//1000;




let intervalID=setInterval(function(){
    if (count >= max){
        clearInterval(intervalID)
    }else{
        count++;
        console.log(`Repeating this line ${count}`)
    }
}, 1000)

// setInterval(fn(),time);
// setTimeout(fn(), time);





//
// const tId = function showName(name){
//     console.log(name)
// }
// setTimeout(tID,2000, 'Mina');
// clearTimeout(tID)