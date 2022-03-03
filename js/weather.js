// OpenWeather: https://openweathermap.org/
OPENWEATHER_API_URL_BASE = "https://api.openweathermap.org/data/2.5/weather"
OPENWEATHER_API_KEY = "8cecaebc76935e1ec8220749bad7240d";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    // console.log(`Your location: ${lat}, ${lon}`);
    api_url = `${OPENWEATHER_API_URL_BASE}?lat=${lat}&lon=${lon}&appid=${OPENWEATHER_API_KEY}&units=metric`;
    fetch(api_url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");

        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        city.innerText = data.name
    });
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)
