const  url = 'https://api.openweathermap.org/data/2.5/weather?q='
const api_key='&appid=6511e14723ad8cb6f243ece1366c5deb'

function getWeather(cityName ="bishkek"){
    const response= fetch(`${url}${cityName}${api_key}`)

        .then(response=>response.json()) //response.json()  -  json data from server
        .then(data=> {

            console.log(data)
            snowWeather(data)
        }) //data - json data from server

}

getWeather()


const cityName = document.getElementById('cityName')
const temp = document.getElementById('temp')
const weatherStatus = document.getElementById('weatherStatus')
const winD = document.getElementById('wind')
const humidity = document.getElementById('humidity')
const textField = document.getElementById('textField')
const searchBtn = document.getElementById('searchBtn')

searchBtn.addEventListener('click',()=>{
    getWeather(textField.value)
})

function snowWeather(city){
    cityName.innerHTML=`${city.name} 
    <span>${city.sys.country}</span>`
    temp.innerHTML=`${(city.main.temp -273.15).toFixed()}°C`
    winD.innerHTML=`Ветер: ${city.wind.speed} <span>km/h</span>`
}
