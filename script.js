
const apiKey = 'f7269ff1547078d53d6e1a3a2ae47f13',
apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q='
const searchBox = document.querySelector('.search input')
const searchBtn = document.querySelector('.search button')
const weatherIcon = document.querySelector('.weather-icon')
const weather = document.querySelector('.weather')
const errorMessage = document.querySelector('.error')

async function checkWeather(city){



    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data)

    if(response.status == 404){
        errorMessage.style.display = 'block'
        weather.style.display = 'none'
    }else{

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp ) + '°c'
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%"
    document.querySelector('.wind').innerHTML = data.wind.speed + " km/h"

    if(data.weather[0].main == 'Clouds'){
        weatherIcon.src = "images/clouds.png"
    }else if(data.weather[0].main == 'Clear'){
        weatherIcon.src = "images/clear.png"
    }else if(data.weather[0].main == 'Rain'){
        weatherIcon.src = "images/rain.png"
    }else if(data.weather[0].main == 'Drizzle'){
        weatherIcon.src = "images/drizzle.png"
    } else if(data.weather[0].main == 'Mist'){
        weatherIcon.src = "images/mist.png"
    }

    weather.style.display = 'block'
    errorMessage.style.display = 'none'
    }





}


searchBtn.addEventListener('click',()=>{
    
    checkWeather(searchBox.value)
  



})

