let currentCity = document.querySelector('#currentCity')
let currentDate = document.querySelector('#currentDate')
let todayTemp = document.querySelector('#todayTemp')
let todayHumid = document.querySelector('#todayHumid')
let todayWind = document.querySelector('#todayWind')

let day1Forecast = document.querySelector('#day1Forecast');
let day2Forecast = document.querySelector('#day2Forecast');
let day3Forecast = document.querySelector('#day3Forecast');
let day4Forecast = document.querySelector('#day4Forecast');
let day5Forecast = document.querySelector('#day5Forecast');

let day1Temp = document.querySelector('#day1Temp')
let day2Temp = document.querySelector('#day2Temp')
let day3Temp = document.querySelector('#day3Temp')
let day4Temp = document.querySelector('#day4Temp')
let day5Temp = document.querySelector('#day5Temp')

let day1Wind = document.querySelector('#day1Wind')
let day2Wind = document.querySelector('#day2Wind')
let day3Wind = document.querySelector('#day3Wind')
let day4Wind = document.querySelector('#day4Wind')
let day5Wind = document.querySelector('#day5Wind')

let day1Humid = document.querySelector('#day1Humid')
let day2Humid = document.querySelector('#day2Humid')
let day3Humid = document.querySelector('#day3Humid')
let day4Humid = document.querySelector('#day4Humid')
let day5Humid = document.querySelector('#day5Humid')

let submitBtn = document.querySelector('#submitBtn')
// let inputCity = document.querySelector('#inputCity')


let apiKey = "fa2c3cfe8bd2e87e7cafad8a2079cf35";
let cityName = "dallas";
let cityData;
let latLonData;
let cityNM;

submitBtn.addEventListener('click', function(){
    cityNM = document.querySelector('#inputCity').value
    
})
console.log(cityNM)





fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${apiKey}`)
    .then(function (response) {

        return response.json()

    })
    .then(function (cityData) {


        console.log(cityData[0].lat);
        console.log(cityData[0].lon);

        return { lat: cityData[0].lat, lon: cityData[0].lon }

    })
    .then(function (latLonData) {
        return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latLonData.lat}&lon=${latLonData.lon}&appid=${apiKey}&units=imperial`)
            .then(function (response) {

                return response.json()

            })
            .then(function (currentCast) {

                console.log(currentCast);
            })

    })


fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${apiKey}`)
    .then(function (response) {

        return response.json()

    })
    .then(function (cityData) {


        // console.log(cityData[0].lat);
        // console.log(cityData[0].lon);

        return { lat: cityData[0].lat, lon: cityData[0].lon }

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







