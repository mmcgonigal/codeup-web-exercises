'use strict'

// a js object, used as  a placeholder, used often with requests.

// function add(a,b){
//     return a+b;
// }
//
// add(4,6); //trigger immediately once it's called.
//
// $.ajax("https://api.github.com/zen")
//     .done(function(res){
//         console.log(res)
//     }) // waits for the response before it trigger, executed .

//similar to a conditional, in that a function will not run unless X
// condition(typically timely condition) is ready.

// PROMISE STATES :

// PENDING - waiting for the response / waiting for the condition to be met.

//RESOLVED - when condition waiting for is successfully met - your resolved function will executed.

//REJECTED - When event happens, but the condition is not meet
//successfully, fails -- trigger the function that is going to handle the fail error

// FETCH REQUESTS

//comes from FETCH API - doesn't have to be embedded into our code in ordeer to use

//GET Request using FETCH API

//fetch()
// fetch('https://api.github/zen')
    //make the request

    //how do we handle the response? json
    //console.log(res)

    // .then()
    //handle the response
    //accepts two parameters
    //1 - callback  function -> get executed only when the request comes back
    //successfully  --->  state of the promise = resolved
    //1-> always going to accept the successful response object from the request as a parameter.
    //2-callback function -- > gets executed only if the request is made but fails
    // --> state of promise = rejected
//     .then(function (response){
//         console.log(response)
//     })
//
//
//
// fetch('https://www.boredapi.com/activity')
//     .then(function(res){
//         console.log(res);
//     })
//
// fetch('https://www.boredapi.com/activity')
//     .then(res=> console.log(res),function(error){
//         console.log(error)
//         }
//     )

//
//
// let add = ()=>{
//     new Promise((resolve,rejected)=>{
//         return resolve + 5
//     })
// }
//
//
//
//

//CUSTOM PROMISES

// we can crete a custom

// const myPromise = new Promise((resolve, reject)=> {
//     setTimeout(()=>{
//     if (Math.random() > 0.5) {
//         resolve();
//     } else {
//         reject();
//     }}
//     ,600)
// });
// console.log(myPromise)
//
//
// myPromise.then(() => {
//     console.log("resolved!")
// })
// myPromise.catch(() => {
//     console.log("rejected!")
// })
//
//promise



// const customPromise =
//     new Promise(
//         function (successParam, failedParam)
//         {
//               // code to actually be run
//            setTimeout(() => {
//                if(Math.random() > 0.5){
//                    successParam()
//                } else {
//                    failedParam()
//                }
//            }, 1500)
//         }
//     );

// iff that code is successful ... .then () run the 'resolve' function
// if that code is rejected ... then () run the rejected function
//
// customPromise.then(() => {console.log("successful")})
// customPromise.catch(() => {console.log("sorry an error occurred")})
//
// console.log(customPromise);
//

//
// let myCustomPromise = new Promise((resolve,reject)=>{
//    let randomNum = Math.random();
//    if(randomNum > 0.5){
//       console.log(randomNum)
//       resolve(randomNum + 10)
//    }else{
//       reject('math.random gave a number smaller than 0.5')
//    }
// })
// myCustomPromise.then((val)=>{console.log(val)})
// .catch((err)=>{console.log(err)})



// let myCalculate = new Promise((resolve,reject)=>{
//    let input = prompt('let me get a number')
//    if(typeof input ==='number') {
//       resolve('this is number--- we will process to then()')
//    }else{
//       reject("Not a number --- we will process to catch()")
//    }
// })
// myCalculate
//     .then((input)=>{
//        return input +5;
//     })
//     .then((num)=>{
//        return num*10;
//     })
//     .catch(()=>{
//        prompt("thats not a number, try again")
//     })

/////////////////////////////////////////////////////////exercise

fetch('https://api.github.com/users/mmcgonigal'
, {headers: {'Authorization':githubKey}})

    .then(response => response.json())
    .then(data =>{
       console.log(data);
       console.log(data.updated_at)

    })
    .catch(error => console.log(error))


let userInfo =(username)=>{
    fetch(`https://api.github.com/users/${username}`
        , {headers: {'Authorization':githubKey}})

        .then(response => response.json())
        .then(data=>{
            console.log(data);
            console.log(data.updated_at)
        })
}
userInfo('mmcgonigal');

///Create your own Promise named wait

let wait = new Promise((resolve,reject)=>{


})



