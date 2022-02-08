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
// let deduct = ()=>{
//     new Promise((resolve,rejected)=>{
//         return resolve -2
//     })
// }
// let multiple = ()=>{
//     new Promise((resolve,rejected)=>{
//         return resolve *2
//     })
// }
//
// // add(10).then(deduct).then(multiple)
// add.then().then().catch()

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
fetch(url, {headers: {'Authorization':githubKey}})