'use strict'

// $.get("http://api.openweathermap.org/data/2.5/weather", {
//     APPID: weatherKey,
//     q:     "San Antonio, US",
//     units: "imperial", //change to Fahrenheit.
// }).done(function(data){
//     console.log(data)
//
//     console.log(data.name); //name of the city
//     console.log(data.main.temp); //temperature of the city
//     console.log(data.weather[0].description); // description of the city
//     console.log(data.main.humidity); //humidity of the city
//     console.log(data.wind.gust);//wind of the city
//     console.log(data.main.pressure);//pressure of the city
//
//     //example of how to get to the information on data, dot notation wih tree structure.
//     $('.city__name').html(data.name);
//     $('.weather__detail__temp').html(data.main.temp);
//     $('.weather__detail__description').html(data.weather[0].description)
//     $('.weather__detail__humidity').html(data.main.humidity);
//     $('.weather__detail__wind').html(data.wind.gust);
//     $('.weather__detail__pressure').html(data.main.pressure);
// })

$.get("http://api.openweathermap.org/data/2.5/forecast", {
    APPID: weatherKey,
    q:     "San Antonio, US",
    units: "imperial",
    cnt: 5, // how many timestamps
}).done(function(data) {
    console.log(data);
    console.log(data.list[0].main.temp) // 1st day of temp.

//
//     let forecast5 = `<div class="container">
//     <p class="cityName"><span class="city__name">${data.name}</span></p>
//         <div class="weather__details">
//             <p>Temperature :<span class="weather__detail__temp">${data.}</span></p>
//             <p>Description : <span class="weather__detail__description"></span></p>
//             <p>Humidity : <span class="weather__detail__humidity"></span></p>
//             <p>Wind : <span class="weather__detail__wind"></span></p>
//             <p>Pressure : <span class ="weather__detail__pressure"></span></p>
//         </div>
// </div>`
});