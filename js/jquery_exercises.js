'use strict'

//add an alert to tell DOM has finished loading

//window.onload = function(){
//    alert('The page has finished loading');
//} ---javascript

//$(document).ready(function(){ // this is jquery form same as window.onload
  //  alert('DOM has finished loading⭐️')
//})
//add attributes to elements✅

//use jQuery to select an element by the id, alert the contents of the element.✅

//let heading = $('#heading').html()
//alert(heading);

//update jQuery code to select and alert a different id✅

// let paragraph= $('#heading__detail').html()
// alert(paragraph)

//use same id on 2 elements✅
//$('#heading').css('color','red') // only worked on first element

//update code so 3 different element has sam class name codeup.✅

//$('li').addClass('codeup')
//$('.codeup').css('border','solid 1px red');

//remove class from one of the element.

//$('li:nth-child(2)').removeClass('codeup');
//console.log ($('li:nth-child(2)'))

//give another element an id of codeup✅

//$('.item__detail').attr('id','codeup');

//set font size of all li to 20px ✅
$('li').css('font-size','20px');

//craft selectors that highlights all the h1,p,li element(s)✅

$('h1').css('background-color','#fff59d');
$('p').css('background-color','#90caf9');
$('li').css('background-color','#ffab91');

//create a jQuery statement to alert the contents of your h1 element✅
alert($('h1').html())

//combine selectors that highlight all the h1,p, and li elements.✅

$('h1,p,li').css('background-color','#80deea')



