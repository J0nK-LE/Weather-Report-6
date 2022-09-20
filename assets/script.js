let weatherAPI = document.getElementById('weatherAPI');
let day1Forecast = document.getElementById('day1Forecast');
let day2Forecast = document.getElementById('day2Forecast');
let day3Forecast = document.getElementById('day3Forecast');
let day4Forecast = document.getElementById('day4Forecast');
let day5Forecast = document.getElementById('day5Forecast');


let apiKey = "fa2c3cfe8bd2e87e7cafad8a2079cf35";
let cityName = "Dallas"
let cityData;
let latLonData;


fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${apiKey}`)
    .then(function (response) {

        return response.json()

    })
    .then(function (cityData) {


        console.log(cityData[0].lat);
        console.log(cityData[0].lon);

        return { lat: cityData[0].lat, lon: cityData[0].lon }

    })
    .then(function(latLonData) {
        return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latLonData.lat}&lon=${latLonData.lon}&appid=${apiKey}`)
        .then(function (response) {

            return response.json()

        })
        .then(function (currentCast) {

            console.log(currentCast);
        })

        })
    
    .then(function (latLonData) {
       return fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latLonData.lat}&lon=${latLonData.lon}&appid=${apiKey}&units=imperial`)
            .then(function (response) {

                return response.json()

            })
            .then(function (foreCast) {

                console.log(foreCast);
            })
    })


    


// fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${apiKey}`)
// .then(function (response) {
//     return response.json()
// })
// .then(function(data) {
//     console.log(data)
// })

