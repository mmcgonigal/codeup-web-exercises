'use strict'
//fetch GET request .

// Headers :
//CONTENT -TYPE : application/json
//fetch("api/url",{
//      // does it send and return json format
//         content-type: 'application/json'
// })





//METHOD TYPE - WHAT KIND OF ACTION DO YOU WANT TO TAKE WITH THE API?
//GET , POST ,PUT, DELETE, PATCH

//GET - getting information (reading)
//--- what's required for a GET request
//---> url + endpoint
//---> api token
//---> sometimes an id of something
// WHAT WILL THE RESPONSE BE LIKE?
// response object => response.json()



//POST - adding information/ pushing data into the API (writing)
//Whats required when making a POST request?
//---> url + endpoint
//---> what we are adding -JSON OBJECT
//WHAT WILL THE RESPONSE BE LIKE?
//---> confirmation is not guaranteed
//response object ---> res=>res.json() --> res.status || res.ok
//err if err
//How can we confirm if it was posted successfully?
//---> We can look into the data/api itself ; if you have access to it.
//---> trusting the status of the response
//바디가 필요 ,



//PUT - replace something thats already on the API (editing)
//What should be sent with a PUT request?
//---> identify the data you are changing ( what you are changing)
//---> where does the ID go ? at the end of the url.
//---> What you are changing to --- JSON object
// Where do i add the obj that i'm changing the specified thing to ?
//--->  options object, which is the second parameter to my .fetch() method
//WHAT WILL THE RESPONSE BE LIKE ?
//---> dont get actual data back, have to check the status or make another GET request to see if it updated.
// 바디가 필요


//DELETE - delete a specific data from the API
//what's required to make a DELETE requests
//---> id of the thing you ae deleting.
// WHAT WILL THE RESPONSE BE LIKE ?
//--- response obj => res =>res.json() =>res.status

//DELETE -delete a specific data from the API




//Example API - SUPER SIMPLIFIED
// {
//     'stars' : 4,
//     'name: mcdonalds',
//     'location' : 'everywhere'
//     'id' : 001
// }

// access key (headers)

// request body
//data to be added

//POST

//url
//content being added -json
//token-possibly
//endpoint -possibly
//method type - specify that we are making a POST request.


//DELETING A SPECIFIC MOVIE

//unique id of the thing we are deleting
//how user is going to delete --> button to click on
//button event listener
// on event trigger  -- >delete from API

//What does that fetch delete request require ?
//where is the data located ?
//unique id of the thing we're deleting --> end of the url after endpoints
//options( 2nd parameter)
//method type : DELETE
//before the fetch method --> grab the id of the movie that's being clicked on // data-id (attribute)
// clicked on // data -id(attribute)





