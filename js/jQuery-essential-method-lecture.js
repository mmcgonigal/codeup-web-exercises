'use strict'

//give all paragraphs a border
//grab all p element
//change the css

//setting

$('p').css('border','1px solid black');

//change h1 to say happy monday
//grab the element
//chain a method onto that element.
//pass in the value that i want to change it to .html


//.html() getting? setting ? SETTING!.
console.log($('h1').html()); //hello world -->Getting

$('h1').html('Happy Monday'); //Setting


//.html() getting? setting? Getting
console.log($('h1').html()); //Happy Monday  //getting

//add a class of  a border to my h2

$('#red').addClass('border'); // Setter
console.log($('red'));

$('#red').removeClass();// Setter
console.log($('#red'));

//. toggleClass()

//toggle our h1 to be highlighted on an event
//grab the element we want to change
//grab the element thats listening fir the click.
//change the css
//toggle it

$('h1').click(function(){
    $(this).toggleClass('highlight')
}) // when h1 is clicked, add class of "highlight "
 // then if it is clicked again, remove class of 'highlight'