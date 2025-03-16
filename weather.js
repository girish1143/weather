async function getWeather() {
    const city = document.getElementById("cityInput").value;
    const apiKey = "73f38d3718564964b8a192206251603"; // Replace with your WeatherAPI key
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (response.ok) {
            const weatherInfo = `
                <h2>${data.location.name}, ${data.location.country}</h2>
                <p>Temperature: ${data.current.temp_c}°C</p>
                <p>Feels Like: ${data.current.feelslike_c}°C</p>
                <p>Weather: ${data.current.condition.text}</p>
                <p>Humidity: ${data.current.humidity}%</p>
                <p>Wind Speed: ${data.current.wind_kph} km/h</p>
                <p>Pressure: ${data.current.pressure_mb} mb</p>
                <p>Visibility: ${data.current.vis_km} km</p>
                <p>Local Time: ${data.location.localtime}</p>
                <img src="${data.current.condition.icon}" alt="Weather Icon">
            `;
            document.getElementById("weatherInfo").innerHTML = weatherInfo;
        } else {
            document.getElementById("weatherInfo").innerHTML = `<p>${data.error.message}</p>`;
        }
    } catch (error) {
        console.error("Error fetching weather data:", error);
        document.getElementById("weatherInfo").innerHTML = `<p>Failed to retrieve weather data.</p>`;
    }
}
