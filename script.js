const apiKey = "YOUR_API_KEY"; // Replace with your OpenWeatherMap API key
const searchBtn = document.getElementById("search-btn");
const cityInput = document.getElementById("city-input");
const weatherInfo = document.querySelector(".weather-info");
const cityName = document.getElementById("city-name");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");
const humidity = document.getElementById("humidity");

searchBtn.addEventListener("click", async () => {
    const city = cityInput.value.trim();
    if (city === "") {
        alert("Please enter a city name");
        return;
    }
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
        if (!response.ok) {
            throw new Error("City not found");
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        alert(error.message);
    }
});

function displayWeather(data) {
    weatherInfo.style.display = "block";
    cityName.textContent = `Weather in ${data.name}`;
    temperature.textContent = `Temperature: ${data.main.temp}°C`;
    description.textContent = `Description: ${data.weather[0].description}`;
    humidity.textContent = `Humidity: ${data.main.humidity}%`;
}

