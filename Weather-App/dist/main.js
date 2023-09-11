const getSearchBar = document.querySelector('#cityInput');
const getSearchButton = document.querySelector('#searchButton');
const apiKey = "268b21144fa64db99f111719231109";

async function getWeather(city) {
	await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`)
	.then(response => response.json())
	.then(data => {
		displayWeatherInfo(data);
	})
	.catch(error => {
		console.error('Error fetching data:', error);
	});
}

getSearchButton.addEventListener('click', function () {
	let city = getSearchBar.value;
	if (city) {
		getWeather(city);
	} else {
		console.error("No city entered");
	}
});

function displayWeatherInfo(data) {
	document.querySelector('.city-name').innerHTML = data.location.name;
	document.querySelector('.country-name').innerHTML = data.location.country;
	document.querySelector('.temperature').innerHTML = data.current.temp_c + "°C";
	document.querySelector('.weather-description').innerHTML = data.current.condition.text;
	document.querySelector('.wind-speed').innerHTML = data.current.wind_kph + " km/h";
	document.querySelector('.humidity').innerHTML = data.current.humidity + "%";
	document.querySelector('.feels-like').innerHTML = data.current.feelslike_c + "°C";
	
}