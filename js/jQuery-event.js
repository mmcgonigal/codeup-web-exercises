$('heading').click(function(){
    console.log('this is clicked')
})




$('p-one').click(function(){
    $('#p-two').css('border','3px dotted purple')
})

let p1 = $('#p-one');
let p2 = $('#p-two');
let clickHandler = function(){
    p2.css('border','3px dotted purple')
};

//double click
//just another event - it listens 2 clicks

//find element that i am going to work on
//give button id just in case
//put it into variables
//creat a function
//on  dblclick, change background to dark color,
//change font to light color
//select element that will be changed

let btn = $('button')

btn.dblclick(function(){
    $('*').css({'background-color':'royalblue','color':'white'})
})


//when hovering over li, lets change the background color to light
//blue and when you hover out of it let's change the background color to light green

//identify the element (li)
//hover event
//function for event (hover in )
// --> change bg color to blue
//function for event (hover out)
// -->change the bg color to green

// $('li').hover(function(){
//     $(this).css('background-color','#ffcc80')
// },function(){
//     $(this).css('background-color','#fff59d')
// })

let hoverInHandler =function(){
    $(this).css('background-color','#ffcc80')
};
let hoverOutHandler = function(){
    $(this).css('background-color','#fff59d')
}
$('li').hover(hoverInHandler,hoverOutHandler);





