const apiKey = 'e6bb729970a0e5c9b19184125bd6e264'; 
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

const getWeather = () => {
    const city = document.getElementById('cityInput').value;
    const url = `${apiUrl}?q=${city}&appid=${apiKey}&units=metric`;

    
//fetch data from the api
    fetch(url)
        .then(response => {
            //check if the response is ok
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            //return the response as json
            return response.json();
        })
        .then(data => {
            //extract the data we need
            const temperature = data.main.temp;
            const description = data.weather[0].description;
            const cityName = data.name;
            document.getElementById('weatherData').innerHTML = `
                <div id="city">${cityName}</div>
                <div id="temperature">Temperature: ${temperature.toFixed(1)}°C</div>
                <div id="description">Description: ${description}</div>
            `;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
};
//add event listener to the button
document.getElementById('getWeatherBtn').addEventListener('click', getWeather);
