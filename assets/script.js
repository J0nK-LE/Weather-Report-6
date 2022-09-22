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

let day1Icon = document.querySelector('#day1Icon');
let day2Icon = document.querySelector('#day2Icon');
let day3Icon = document.querySelector('#day3Icon');
let day4Icon = document.querySelector('#day4Icon');
let day5Icon = document.querySelector('#day5Icon');

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
let searchHistory = document.querySelector('#searchHistory')
let cityListen = document.querySelector('#inputCity')


let apiKey = "fa2c3cfe8bd2e87e7cafad8a2079cf35";
let cityName;
let cityData;
let latLonData;
let cityHistory;

getWeather()



submitBtn.addEventListener('click', function () {
    cityName = document.querySelector('#inputCity').value
    // console.log(cityName)
    getWeather()
    renderHistory()

})

currentDate.textContent = moment().format("M/D/YY");
day1Forecast.textContent = moment().add(1, 'd').format("M/D/YY");
day2Forecast.textContent = moment().add(2, 'd').format("M/D/YY");
day3Forecast.textContent = moment().add(3, 'd').format("M/D/YY");
day4Forecast.textContent = moment().add(4, 'd').format("M/D/YY");
day5Forecast.textContent = moment().add(5, 'd').format("M/D/YY");


function getWeather() {
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
            return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latLonData.lat}&lon=${latLonData.lon}&appid=${apiKey}&units=imperial`)
                .then(function (response) {

                    return response.json()

                })
                .then(function (currentCast) {
                    currentCity.textContent = currentCast.name
                    todayTemp.textContent = currentCast.main.temp
                    todayHumid.textContent = currentCast.main.humidity
                    todayWind.textContent = currentCast.wind.speed
                    
                    let icon0 = currentCast.weather[0].icon
                    
                   currentIcon.setAttribute("src", (`http://openweathermap.org/img/wn/${icon0}.png`))

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
                    let icon1 = foreCast.list[5].weather[0].icon
                    // console.log(icon1)
                    let icon2 = foreCast.list[13].weather[0].icon
                    let icon3 = foreCast.list[21].weather[0].icon
                    let icon4 = foreCast.list[29].weather[0].icon
                    console.log(icon4)
                    let icon5 = foreCast.list[37].weather[0].icon
                    
                   day1Icon.setAttribute("src", (`http://openweathermap.org/img/wn/${icon1}.png`))
                   day2Icon.setAttribute("src", (`http://openweathermap.org/img/wn/${icon2}.png`))
                   day3Icon.setAttribute("src", (`http://openweathermap.org/img/wn/${icon3}.png`))
                   day4Icon.setAttribute("src", (`http://openweathermap.org/img/wn/${icon4}.png`))
                   day5Icon.setAttribute("src", (`http://openweathermap.org/img/wn/${icon5}.png`))
                   

                    day1Temp.textContent = foreCast.list[5].main.temp
                    day2Temp.textContent = foreCast.list[13].main.temp
                    day3Temp.textContent = foreCast.list[21].main.temp
                    day4Temp.textContent = foreCast.list[29].main.temp
                    day5Temp.textContent = foreCast.list[37].main.temp

                    day1Wind.textContent = foreCast.list[5].wind.speed
                    day2Wind.textContent = foreCast.list[13].wind.speed
                    day3Wind.textContent = foreCast.list[21].wind.speed
                    day4Wind.textContent = foreCast.list[29].wind.speed
                    day5Wind.textContent = foreCast.list[37].wind.speed

                    day1Humid.textContent = foreCast.list[5].main.humidity
                    day2Humid.textContent = foreCast.list[13].main.humidity
                    day3Humid.textContent = foreCast.list[21].main.humidity
                    day4Humid.textContent = foreCast.list[29].main.humidity
                    day5Humid.textContent = foreCast.list[37].main.humidity



                    // console.log(foreCast);
                })
        })
}



function renderHistory(){
    cityListen.innerHTML = ""
}









// let citiesHistory = [];

// function renderHistory() {
//     searchHistory.innerHTML = "";

//     for (let i = 0; i < citiesHistory.length; i++) {
//         let cityHistory = citiesHistory[i];
//         console.log(cityHistory)

//         let li = document.createElement("li");
//         li.textContent = cityHistory;
//         li.setAttribute("data-index", i);


//         searchHistory.appendChild(li);
//     }
// }





