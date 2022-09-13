let weatherAPI = document.getElementById('weatherAPI');

let apiKey = "fa2c3cfe8bd2e87e7cafad8a2079cf35";
let cityName = "Dallas"


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
        return fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latLonData.lat}&lon=${latLonData.lon}&appid=${apiKey}`)
            .then(function (response) {

                return response.json()

            })
            .then(function (data) {

                console.log(data);
            })



    })

// fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${apiKey}`)
// .then(function (response) {
//     return response.json()
// })
// .then(function(data) {
//     console.log(data)
// })

