'use strict'
//////////jQuery introduction exercise

//add an alert to tell DOM has finished loading

//window.onload = function(){
//    alert('The page has finished loading');
//} ---javascript

//$(document).ready(function(){ // this is jquery form same as window.onload
  //  alert('DOM has finished loading⭐️')
//})




////////////jquery Selector exercise

//add attributes to elements✅

//$('div').attr('id','item__detail');
//$('h1,p').addClass('newClass');

//use jQuery to select an element by the id, alert the contents of the element.✅

//let heading = $('#heading').html()
//alert(heading);

//update jQuery code to select and alert a different id✅

// let paragraph= $('#heading__detail').html()
// alert(paragraph)

//use same id on 2 elements✅
//$('#heading').css('color','red') // only worked on first element

//update code so 3 different element has same class name codeup.✅

//$('li').addClass('codeup')
//$('.codeup').css('border','solid 1px red');

//remove class from one of the element.✅

//$('ul li:nth-child(2)').removeClass('codeup');
//console.log ($('li:nth-child(2)'))

//give another element an id of codeup✅

//$('.item__detail').attr('id','codeup');

//set font size of all li to 20px ✅
//$('li').css('font-size','20px');

//craft selectors that highlights all the h1,p,li element(s)✅

//$('h1').css('background-color','#fff59d');
//$('p').css('background-color','#90caf9');
//$('li').css('background-color','#ffab91');

//create a jQuery statement to alert the contents of your h1 element✅
//alert($('h1').html())

//combine selectors that highlight all the h1,p, and li elements.✅

//$('h1,p,li').css('background-color','#80deea')







////////////////////////// jQuery Mouse Event exercise

//add jQuery code that will change the background color of an h1 element when clicked.✅

//1. find and bring h1 element
//2.event handler function register -->change background color
//3.add to .click put together

let heading = $('#heading')
let clickHandler = function(){
    heading.css('background-color','#fff59d')
}
heading.click(clickHandler)

//make all paragraph have a font size of 18px when the are double clicked.✅

//1.bring paragraph, $('')
//2. event handler function register -->dblclick font size 18px.
//3. put together --.dblclick()

let heading__detail = $('#heading__detail')
let dblclickHandler = function(){
    heading__detail.css('font-size','18px')
};
heading__detail.dblclick(dblclickHandler)

//set all li text color to red when the mouse is hovering; reset to black when it is not.✅

//1.bring li
//2. 2 function --> hover ( hoverinHandler1 ,hoveroutHandler)
//font color change to red , reset to black .
//3. option 1.put together .hover()
//4. option 2 put together .mouseenter() .mouseleave()

let listItems = $('.list__items');
let hoverInHandler = function (){
    $(this).css('color','red');
}
let hoverOutHandler = function (){
    $(this).css('color','black');
}

//listItems.hover(hoverInHandler,hoverOutHandler); //option 1

listItems.mouseenter(hoverInHandler); //option2
listItems.mouseleave(hoverOutHandler); // option 2





