'use strict'
let today = '';
let temp_min = '';
let temp_max = '';
let weather_description = '';
let humidity = '';
let wind_speed = '';
let weather_pressure = '';
let weather_icon = '';



    let lat = 29.42
    let lon = -98.49
    mapboxgl.accessToken = mapKey;

    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [lon, lat],
        zoom: 10,
    });

    let marker = new mapboxgl.Marker({
        draggable: true
    })
    marker.setLngLat([lon, lat])
        .addTo(map);


    $.get("https://api.openweathermap.org/data/2.5/forecast", {
        APPID: weatherKey,
        lon: lon,
        lat: lat,
        units: "imperial",
        exclude: "current,hourly,hourly,alerts"
    }).done(function (data) {
        console.log(data)
       let currentCity = document.querySelector(".nameOfcity")
        currentCity.innerHTML=data.city.name
        // let sliceDays = data.daily.slice(0, 5)  // extract 5 days out of 7 days array.
        //         console.log(sliceDays)

        for(let i = 0; i <data.list[i]; i+=8) {
            console.log(data.list[i])


            // data.forEach(function (day) {


            let today = new Date((data.list[i].clouds.dt) * 1000).toDateString();
            temp_min = day.temp.min;
            temp_max = day.temp.max;
            weather_description = day.weather[0].description;
            humidity = day.humidity;
            wind_speed = day.wind_speed;
            weather_pressure = day.pressure;
            weather_icon = day.weather[0].icon


            let daysForm = `<div class="card  forecast__body">
                    <div class="card-header date">
                        ${today}
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">min: ${temp_min}℉
                          max: ${temp_max}℉<br>
                        <img src="http://openweathermap.org/img/w/${weather_icon}.png" style="display:inline-block"></li>
                        <li class="list-group-item">Description :<br> ${weather_description}</li>
                        <li class="list-group-item">Humidity : ${humidity}</li>
                        <li class="list-group-item">Wind : ${wind_speed}</li>
                        <li class="list-group-item">Pressure : ${weather_pressure}</li>
                    </ul>
                </div>`;


            $('#card_table').append(daysForm)
        }



    })

//     $('.search__button').click(function () {
//         let address = $(".geocoder").val();
//         console.log(address);
//         geocode(address,mapKey).then(function(coordinates) {
//             console.log(coordinates);
//         })
//     })
//
//
//
//
//
// })
// //------ san antonio base point
//
// let coordinates = document.getElementById('coordinates');
//
//
//
//
//
// let geo_lon = '';
// let geo_lat = '';
//
// let today = '';
// let temp_min = '';
// let temp_max = '';
// let weather_description = '';
// let humidity = '';
// let wind_speed = '';
// let weather_pressure = '';
// let weather_icon = '';
// let lngLat = '';
//
//
//
// function onDragEnd() {
//     console.log(marker)
//     lngLat = marker.getLngLat();
//     console.log(lngLat)
//     coordinates.style.display = 'block';
//     coordinates.innerText = `Longitude: ${lngLat.lng} Latitude: ${lngLat.lat}`;
//     geo_lon = lngLat.lng;
//     geo_lat = lngLat.lat;
//
//     console.log(geo_lon)
//     console.log(geo_lat)
//
//
//     $.get("http://api.openweathermap.org/data/2.5/onecall?", {
//         APPID: weatherKey,
//         lat: geo_lat,
//         lon: geo_lon,
//         units: "imperial",
//         exclude: "current,hourly,hourly,alerts,minutely"
//     }).done(function (data) {
//         // console.log(data.lat)
//         // console.log(data.lon)
//         //new LngLat = (lng: data.lon, lat: data.lat)
//
//         console.log(data)
//
//         // let new5days = data.daily.slice(0,5)  // extract 5 days out of 7 days array.
//
//
//         $('#card_table').empty()
//
//         //new5days.forEach(function (day) {
//         for (let i = 0; i < 5; i++) {
//
//
//             let day = data.daily[i]
//
//             today = new Date(day.dt * 1000).toLocaleDateString('en-US', {
//                 year: 'numeric',
//                 month: 'long',
//                 day: 'numeric'
//             }) // change the unix date unit into date
//             console.log(today);
//             temp_min = day.temp.min;
//             console.log(temp_min);
//             temp_max = day.temp.max;
//             weather_description = day.weather[0].description;
//             humidity = day.humidity;
//             wind_speed = day.wind_speed;
//             weather_pressure = day.pressure;
//             weather_icon = day.weather[0].icon
//
//
//             $('#card_table').append(`
//             <div class="card forecast__body">
//                 <div class="card-header date">
//                     ${today}
//                 </div>
//                 <ul class="list-group list-group-flush">
//                     <li class="list-group-item">min: ${temp_min}℉
//                       max: ${temp_max}℉<br>
//                     <img src="http://openweathermap.org/img/w/${weather_icon}.png" style="display:inline-block"></li>
//                     <li class="list-group-item">Description : <br>${weather_description}</li>
//                     <li class="list-group-item">Humidity : ${humidity}</li>
//                     <li class="list-group-item">Wind : ${wind_speed}</li>
//                     <li class="list-group-item">Pressure : ${weather_pressure}</li>
//                 </ul>
//             </div>
//             `);
//
//         };
//
//     })
// }
// // marker.on('dragend', onDragEnd);
//
// //////////////////////////////////////////////////////////////////////////////
//
//
//
//
//
// function geocode(search, token) {
//     var baseUrl = 'https://api.mapbox.com';
//     var endPoint = '/geocoding/v5/mapbox.places/';
//
//     return fetch(baseUrl + endPoint + encodeURIComponent(search) + '.json' + "?" + 'access_token=' + token)
//         .then(function(res) {
//             return res.json();
//             // to get all the data from the request, comment out the following three lines...
//         }).then(function(data) {
//             return data.features[0].center;
//         });
// }
//
//
//







