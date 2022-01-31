$.get(`https://api.openweathermap.org/data/2.5/weather?lat=${37.5665}&lon=${126.9780}&appid=${weatherKey}`)
    .done(function(weather){
        console.log(weather);

        $('.container').append('<p>${weather.main.sea_level}</p>')
    })