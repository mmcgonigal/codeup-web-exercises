//add a class to all dd elements names invisible✅

//1.grab the element,
//2. add element named invisible.

$('dd').addClass('invisible');
// <dd class='answer invisible'>

//add some css rules that sets elements with the invisible class to visibility: hidden ✅






//update page with jquery to add a link that toggle s the class invisible on and off for all dd

//1. grab a element .

//2.event --->click (){target, toggleClass()

$('dd').click(function(){
    $(this).toggleClass('hidden__answer')
})


//creat button ,  when clicked, makes the last li  in each ul have yellow background, //1. grab element
//when it is clicked.
// uk will have yellow background.
$('#reset__list').click(function(){
    $('li:last-child').css('background-color','#fff59d')
})

//when any h3 is clicked the li s underneath is should be bolded. use font-weight
//1. grab target element .
//2.when it is clicked.
//3. li underneath  the h3--->target, should be bolded.

$('h3').click(function(){
    $(this).next().css('font-weight','bold')
})





