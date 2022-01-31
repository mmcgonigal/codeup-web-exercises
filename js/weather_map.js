'use strict'
// $.get(`https://api.openweathermap.org/data/2.5/weather?lat=${37.5665}&lon=${126.9780}&appid=${weatherKey}`)
//     .done(function(weather){
//         console.log(weather);
//
//         $('.container').append('<p>${weather.main.sea_level}</p>')
//     })

$.get("http://api.openweathermap.org/data/2.5/weather", {
    APPID: weatherKey,
    q:     "San Antonio, US"
}).done(function(data){
    console.log(data)
    console.log(data.main.name); //name of the city
    console.log(data.main.temp); //temperature of the city
    console.log(data.weather[0].description); // description of the city
    console.log(data.main.humidity); //humidity of the city
    console.log(data.wind.gust);//wind of the city
    console.log(data.main.pressure);//pressure of the city

    //example of how to get to the information on data, dot notation wih tree structure.
    $('.city__name').html(data.main.name);
    $('.weather__detail__temp').html(data.main.temp);
    $('.weather__detail__description').html(data.weather[0].description)
    $('.weather__detail__humidity').html(data.main.humidity);
    $('.weather__detail__wind').html(data.wind.gust);
    $('.weather__detail__pressure').html(data.main.pressure)
})