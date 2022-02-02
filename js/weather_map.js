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



    // console.log(data.list) //list of array
    // console.log(data.list[0].main.temp) // 1st day of temp.
    // console.log(data.list[0].dt_txt) //1st day date
    // console.log(data.list[0].main.temp_max)
    // console.log(data.list[0].main.temp_min)
    // console.log(data.list[0].weather[0].description)
    // console.log(data.list[0].main.humidity)
    // console.log(data.list[0].wind.speed)
    // console.log(data.list[0].main.pressure)



// $.get("https://api.openweathermap.org/data/2.5/onecall", {
//     APPID: weatherKey,
//     units: "imperial", //change to Fahrenheit.
//     lat: -98.4936,
//     lon: 29.4241,
// })


$.get("http://api.openweathermap.org/data/2.5/onecall?", {
    APPID: weatherKey,
    lat:    29.423017,
    lon:   -98.48527,
    units: "imperial",
    exclude: "current,hourly,hourly,alerts"
}).done(function(data){
    console.log(data.lat)
    console.log(data.lon)
    //new LngLat = (lng: data.lon, lat: data.lat)


    let sliceDays = data.daily.slice(0,5)  // extract 5 days out of 7 days array.
    console.log(sliceDays)
    let today = '';
    let temp_min = '';
    let temp_max = '';
    let weather_description = '';
    let humidity = '';
    let wind_speed = '';
    let weather_pressure = '';
    let weather_icon = '';


    sliceDays.forEach(function (day) {

        today = new Date(day.dt * 1000).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'}) // change the unix date unit into date
        temp_min = day.temp.min;
        temp_max = day.temp.max;
        weather_description = day.weather[0].description;
        humidity = day.humidity;
        wind_speed = day.wind_speed;
        weather_pressure = day.pressure;
        weather_icon = day.weather[0].icon

        $('#card_table').append(`
            <div class="card col=2">
                <div class="card-header date">
                    ${today}
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">min: ${temp_min}℉
                      max: ${temp_max}℉<br>
                    <img src="http://openweathermap.org/img/w/${weather_icon}.png" style="display:inline-block"></li>
                    <li class="list-group-item">Description : ${weather_description}</li>
                    <li class="list-group-item">Humidity : ${humidity}</li>
                    <li class="list-group-item">Wind : ${wind_speed}</li>
                    <li class="list-group-item">Pressure : ${weather_pressure}</li>
                </ul>
            </div>
        `)
    })

    // mapboxgl.accessToken = mapKey;
    // var map = new mapboxgl.Map({
    //     container: 'map',
    //     style: 'mapbox://styles/mapbox/streets-v9',
    //     zoom: 10,
    //     center: [data.lon, data.lat],
    //
    //     //need to add pin /marker with even of double click on map.
    //     //when add pin, i need to retrieve data,
    //
    // });
});
mapboxgl.accessToken = mapKey;
let coordinates = document.getElementById('coordinates');
let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    center: [0, 0],
    zoom: 2
});

let marker = new mapboxgl.Marker({
    draggable: true
})
    .setLngLat([0, 0])
    .addTo(map);

function onDragEnd(e) {
    console.log(marker)
    let lngLat = marker.getLngLat();
    console.log(lngLat.lng)
    coordinates.style.display = 'block';
    coordinates.innerText = `Longitude: ${lngLat.lng}<br />Latitude: ${lngLat.lat}`;

}





marker.on('dragend', onDragEnd);



    //     data.list.forEach(function (date) {
    //
    //     today = (date.dt * 1000).toLocaleDateString();

    //     console.log(today)
    //     console.log(temp_min)
    //     console.log(temp_max)
    //     console.log(weather_description)
    //     console.log(humidity)
    //     console.log(weather_pressure)
    //     })
    // })
    // )
    //
    //
    //
