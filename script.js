const apiKey = "7d22f733952110dfe259f49844f1c730";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const city = "dubai";
const searchBtn = document.getElementById("searchBtn");
const searchBox = document.getElementById("searchBox");


async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);
    if(data.message){
        document.getElementById("error").classList.remove("d-none");
        document.getElementById("error").innerHTML = data.message + "!!!";
    }else{
    document.getElementById("city").innerHTML = data.name;
    document.getElementById("temp").innerHTML = data.main.temp + "°C";    
    document.getElementById("humidity").innerHTML = "Humidity = " + data.main.humidity + "%";    
    document.getElementById("wind-speed").innerHTML = "Wind speed = " + data.wind.speed + "km/h";    
    document.getElementById("details").classList.remove("d-none");
}
}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})