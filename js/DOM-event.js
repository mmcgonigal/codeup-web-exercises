'use strict'
// event ?
//사용중이거나 프로그래밍 중인 시스템 내에서 일어나는 사건.
//ex1)user clicks button -- click event
//ex2)user presses keyboard -- keydown event
//ex3)user submits form ...etc

//event handler --

//means code block that will executed when event happens. mostly function.
//Each event can have an event handler.

//declare function which is going to be a event handler is called -----
// < event handler register : 이벤트가 발생하면, 이 함수를 호출해라.
// name of event handler -- handle어쩌고저쩌고

// var handleClick = function(){
//     alert("welcome😽")} //event handler register.

//const handleClick = () =>{alert("welcome😽")}
// let button = document.querySelector("button")
// button.onclick = handleClick
//taret.on'event' = event handler function.

//basic form

//target.on이벤트명 = 이벤트핸들러 함수명⭐️괄호 없이⭐

var inputType = document.querySelector("#typing");
var inputClick = document.querySelector(
    "#push"
);
var handleTyping = function(){
    console.log("typing....")
};
var handleClick = function(){
    console.log("clicking...")
};
inputType.onkeydown = handleTyping;
inputClick.onclick = handleClick;

//--------addEventListener "method"
//target.addEventListener('click', function(){})
//target.addEventListener('이벤트', 이벤트 핸들러 함수)

let btn1 = document.getElementById('one');
let btn2 = document.getElementById('two');
let btn3 = document.getElementById('three')

let handle_Click = ()=>prompt("did you just click me?!");

btn2.addEventListener('click',handle_Click);

//why addEventListener ?!
//i can register more than one event handler. !!!! <---> on handler attribute can be only registered only one, so the last registered one would be the only one working.
btn2.addEventListener('click',()=>console.log("another event handler has been added"))

btn2.removeEventListener('click',handle_Click)


