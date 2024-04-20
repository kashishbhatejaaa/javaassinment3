const cityId = '5884098'; // City ID for Barrie, Ontario
const apiKey = 'a9b59a5651bab743e2766bdc013ab8da'; // Your OpenWeatherMap API key

const apiUrl = `http://api.openweathermap.org/data/2.5/forecast?id=${5884098}&appid=${a9b59a5651bab743e2766bdc013ab8da}`;

// Fetch data from the API
fetch(apiUrl)
    .then(resp => {
        // Check that the response is 200 OK
        if (!resp.ok) {
            throw new Error('Network response was not ok');
        }
        // Parse the JSON response into a JavaScript object
        return resp.json();
    })
    .then(data => {
        // Extract the temperature from the first day of the forecast
        const temperature = data.list[0].main.temp;
        const description = data.list[0].weather[0].description;

        // Update the UI with the weather data
        const weatherDiv = document.getElementById('weatherData');
        weatherDiv.innerHTML = `
            <h2>Current Weather</h2>
            <p>Temperature: ${temperature.toFixed(1)}°C</p>
            <p>Description: ${description}</p>
        `;
    })
    .catch(error => {
        // Handle errors
        console.error('Error fetching weather forecast:', error);
    });
