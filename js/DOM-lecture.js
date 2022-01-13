'use strict'

//window.document  현재 브라우저에 랜더링 되고 있는 문서를 의미하며, 이 속성을 이용하면 해당 문서에 접근 가능 .
//window. 은 생략 가능 !!
//querySelector -valid css selector is required. 선택자와 일치하는 문서 내 첫번째 요소를 반환,
//getElementById - element within the document ,
//if not existing , return null.

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
let handleClick = function(){
    alert("Welcome!")
}

let button = document.querySelector('button')
button.onclick = handleClick
//even if calling function, make sure not add () .





//1. make a prompt to ask user for name
//2, save the name to a variable.
//3. input the name saved into the span.
    //3-1 GET THE SPAN (or element) ,(id, class, tag name).
    //3-2 save the retrieved span to a variable.
    //3-3 change the inner contents of the span to the saved input variable
//(prompAnswer)‹›


let promptAnswer = prompt('what is your name?');
let retrievedSpan = document.getElementById("name");

console.log('promptAnswer: ', promptAnswer);
console.log('retrievedSpan: ', retrievedSpan);
retrievedSpan.innerHTML = promptAnswer;



//UPDATE ENTIRE HTML ELEMENT
// document.getElementById('name').innerHTML="new TEXT"
// retrievedSpan.innerHTML = promptAnswer;

//JUST UPDATES TEXT
// document.getElementById('name').textContent = "new text";
// retrievedSpan.textContent = promptAnswer;

let preText = document.getElementById('red');
preText.textContent="It is a beautiful weather"

//RETRIEVING MULTIPLE ELEMENTS:
//GOOGLE : how to get elements by class using the DOM

//1. Declare the variable.
//2. document.getElementsByClassName
//3. specify the class we're looking for -- > odd
//4. console.log the variable to make sure I'm grabbing the info I need

let myElements = document.getElementsByClassName('odd');
console.log(myElements)
// Returns ARRAY each element in the array is
//each of the elements it found with the class name.
//RETURNS ARRAY.

// myElements.innerHTML = 'hello world'
//this didn't work.

//LOOP THROUGH AN ARRAY  to change the element returned

for( let i = 0; i <= myElements.length; i++ ){
    myElements[i].innerHTML="hello world";
}





//LET'S CHANGE THE COLOR OF MY H1 TAG TO PURPLE.
    //1 ACCESS THE ELEMENT WE WANT TO CHANGE.
    //2 CHANGE THE STYLE (attribute) to purple.
    //3

let myH1 = document.getElementById('greeting');

//setAttribute('attribute name', 'attribute new value');
myH1.setAttribute("style", "color: purple");





