'use strict'

//window.document  현재 브라우저에 랜더링 되고 있는 문서를 의미하며, 이 속성을 이영하면 해당 문서에 접근 가능 .
//window. 은 생략 가능 !!
//querySelector -valid css selector is required. 선택자와 일치하는 문서 내 첫번째 요소를 반환,
//getElementById - element within the document ,
//if n)o)t existing , return null.

console.log(document.querySelector('h1'));
console.log(document.querySelector('p'));
console.log(document.querySelector('#text'));
console.log(document.querySelector('.paragraph'));

console.log(document.getElementById('text'))

console.log(document.getElementById('p'))
// expect this to be null.

//getElementById is used only with id in element

const h1= document.querySelector('h1')
const p= document.getElementById('text')

//textContent : read / modify  the text in the element

console.log(h1.textContent)
h1.textContent = 'Hello, World '

p.textContent = "get element by id "
console.log(p.textContent)


//DOM event
//사용중이거나 프로그래밍 중인 시스템 내에서 일어나는 사건.
//ex1) user clicks a button : click event
//ex2) user typed : keydown event
//ex3) user submit type form : submit event...etc.etc.

// each event can have ⭐️handler⭐️
//what is handler ?!

// code block that will be executed when event happens. mostly this will be function. and declaring those functions is called event handler register.
//event handler register : 이벤트가 발생하면, 이 함수를 호출해라 .
const handleClick = function(){
    alert("Welcome!")
}

const button = document.querySelector('button')
button.onclick = handleClick
//even if calling function, make sure not add () .

