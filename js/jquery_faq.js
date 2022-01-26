// //add a class to all dd elements names invisible✅
//
// //1.grab the element,
// //2. add element named invisible.
//
// $('dd').addClass('invisible');
// // <dd class='answer invisible'>
//
// //add some css rules that sets elements with the invisible class to visibility: hidden ✅
//
//
//
//
//
//
// //update page with jquery to add a link that toggle s the class invisible on and off for all dd
//
// //1. grab a element .
//
// //2.event --->click (){target, toggleClass()
//
// $('dd').click(function(){
//     $(this).toggleClass('hidden__answer')
// })
//
//
// //creat button ,  when clicked, makes the last li  in each ul have yellow background, //1. grab element
// //when it is clicked.
// // uk will have yellow background.
// $('#reset__list').click(function(){
//     $('li:last-child').css('background-color','#fff59d')
// })
//
// //when any h3 is clicked the li s underneath is should be bolded. use font-weight
// //1. grab target element .
// //2.when it is clicked.
// //3. li underneath  the h3--->target, should be bolded.
//
// $('h3').click(function(){
//     $(this).next().css('font-weight','bold')
// })
//

'use strict'
// add a class to all dd elements named invisible. ✅

//1.grab element.
//2. add a class named "invisible"
let dd=$('.answer')
dd.addClass('invisible')
console.log(dd);
//Creat some css rules that sets elements with the invisible  class to visibility:hidden; ✅

//⭐️update the page with jQuery to add a link that toggle the class invisible on and off for all dd elements.⭐️


//1. grab element to work with,
//2. toggleClass()
//$('dd').addClass('hidden__answer')

dd.click(function(){
    $(this).toggleClass('hidden__answer')
})
//when click, i want it to be hidden / shown ,

//how to , first rendered , it is hidden , then shown ??

$('#reset__answer').click(function(){
    $('dd').toggleClass('hidden__answer')
})

/////////bonus any dt elements is clicked, clicked should be highlighted.✅
$('.question').click(function(){
    $(this).toggleClass('highlight')
})

/////////////////////Traversing.

//creat a button when clicked,
// makes the last li in each ul have yellow background.

//1.grab element that will be clicked,  click()
//last li in each ul  , yellow back ground.✅

$('#yellow__background').click(function(){
    $('li:last-child').css('background-color','var(--color-highlight');
})



//when any h3 is clicked, the lis underneath should be bolded.✅

//1.h3, click,
//li s underneath  should be bold.
console.log($('ul')) //children [h3,li,li,li,li]
$('h3').click(function(){
   $(this).next().css('font-weight','bold')
})
// $('h3').click(function(){
//     $(this).nextAll().css('font-weight','bold')
// })

//when any list item is clicked,
// first li of the parent ul should have font color of blue.✅

//1 li , click
//first li of the parent ul , font color of blue.

$('li').click(function(){
    $(this).siblings().first().css('color','var(--color-purple')
})

/////////////bonus
//create 3div , that looks like a picture frame  , have a uniq background, img,
// button underneath ,swaps the image from the frame.
//left frame swaps to right and take the image from left frame to center .
//the center frame swaps frame randomly to either the left of right .
//right frame swaps to the left and take s the image from the frame in the center.










