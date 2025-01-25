
const temperatureCelsius = 31;  
const windSpeedKmh = 15;       
function calculateWindChill(temp, windSpeed) {
    return 13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16);
}


function displayWindChill() {
    let windChill = "N/A";  


    if (temperatureCelsius <= 10 && windSpeedKmh > 4.8) {
        windChill = calculateWindChill(temperatureCelsius, windSpeedKmh).toFixed(2) + "°C";
    }

    document.querySelector('.weather-container').innerHTML = `
        <h2 class=".weather-container h2">Weather</h2>
        <img class="icon" src="images/weather-icon.svg" alt="Weather Icon">
        <p>Temperature: ${temperatureCelsius}°C</p>
        <p>Humidity: 80%</p>
        <p>Wind: ${windSpeedKmh} km/h</p>
        <p>Pressure: 1013 hPa</p>
        <p>Wind Chill: ${windChill}</p>
    `;
}

window.onload = displayWindChill;


document.addEventListener("DOMContentLoaded", function() {
    const currentYear = new Date().getFullYear();
    document.getElementById("currentyear").textContent = currentYear;

    const lastModified = document.lastModified;
    document.getElementById("lastmodified").textContent = `Last Modified: ${lastModified}`;
});