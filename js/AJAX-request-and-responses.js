// AJAX

//AJAX - asynchronous JavaScript and XML (and json)
//asynchronous - not at the same time , 실시간이 아닌, (정시에 이루어 지는 교육이 아니어서, 학생들이 자신의 일정에 맞춰 수업을 듣거나 과제를 올릴 수 있는 형태, 동시에 존재 (발생) 하지 않는

//synchronous - at the same time ,

//xml - extensible Markup Language  -- designed to store and transport data.

//Web Server -- server that holds your website
// // hardware : computers storing data.
// // software : handle request, sends data, it understands URLs. (addresses), allows us to interact with the servers. host files.--host: gives it a location to live.

//HTTP Server - software that understands URLs (addresses) and is able to communicate with the browser to view webpages.

// JSON  -- JavaScript Object Notation


//AJAX request (jQuery syntax)
//get information from our random dog API.

//$.ajax() // jquery syntax for AJAX GET request.
//console.log($.ajax('https://dog.ceo/api/breeds/image/random'))
//GET
// $.ajax(url,{
//     type: 'post',
//     //data we want to save to the server.
//
//})

//REQUEST :
//GET
//POST --> sending information (JSON)  to be stored on the server
//DELETE -->send information about the thing you want to delete.//
//not really if successful, response is limited.
//PUT --> edit /send the info about the thing you're editing. and
//you 'will receive the edited thing back.

//AJAX - HTTP 를 이해서 서버에 데이터를 요청해서 받아 올 수 있는 방법,

//1. Object to JSON
//stringfy(obj) ->JSON

let json = JSON.stringify(true)
console.log(json)
json=JSON.stringify(['apple','banana']);
console.log(json)

const rabbit = {
    name: 'tory',
    color: 'white',
    size: null,
    birthDate: new Date(),
    jump: ()=> {
        console.log(`${name} can jump!`);
    },
    };
json = JSON.stringify(rabbit)
console.log(rabbit)
console.log(json)
console.log(JSON.parse(json))
//2.JSON to object
//parse(json)

$.ajax('url',{
    type: 'post', //type of request
    data: {
        username: 'minamina',
        post: 'I love javascript',
    }
})

//GET -RESPONSE

$.ajax('https://dog.ceo/api/breeds/image/random').done(function(data,status){
    console.log('request is DONE!')

})

//request an image of a dog from DOG CEO API and render it dynamically,

//select the element we want to change
//change its src attribute and give it a value
//retrieve data from API
//handle the response
//retrieve the actual item we need from the response//data.message

//$('#doggo').attr('src',??)

//sends the request
$.ajax('https://dog.ceo/api/breeds/image/random')
    .done(function(data, status ){
        console.log(data);
        console.log(data.message);
        console.log(status);
        $('#doggo').attr('src',data.message)
    })
    .fail(function(){
        console.log('sorry, your request failed.')
    })
    .always(function(){

    })


$.ajax('https://dog.ceo/api/breeds/image/random',{
    type: 'POST',
    data: {
        message: 'https://thums.dreamstime.com'
    }
}).done(function(data, status){
    console.log('request successful')
}).fail(function(){
    console.log('request failed')
}).always(function(){
    console.log('always hello to you!')
})

//post https://jsonplaceholder.typicode.com/comment

//Get the url  - using an AJAX request
//loop through the array of data
//jquery's .each()
//while, do while, for loops, map.
//get the actual names of the coments.
//.done()method -- to capture the data when it is returned.
//append to element
//select/find the element that we want toa append to
//create an element.

//.ajex(url, options) //by defualt - GET

$.get('https://jsonplaceholder.typicode.com/comment')
    .done(function(data){
        console.log(data);
        //here we have access to the data returned,


        //loops through data returned (which I know is an array from console.log)
        $.each(data, function(i, comment){
            console.log(comment.name)
            let newEl = `<h1> S{comment.name} </h1>`

            //slelect element we're appending to,
            //append going to add whatever we pass in as child
            //elemets to the element selected.
            $('.container').append(newEl)
        })
    })


//
