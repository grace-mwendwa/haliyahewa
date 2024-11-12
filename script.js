function searchWeather(response) {
  let temperatureElement = document.querySelector("#temperatureNumeric");
  let temperatureResult = Math.round(response.data.temperature.current);
  let currentCity = document.querySelector("#weatherCurrentCity");

  currentCity.innerHTML = response.data.city;
  temperatureElement.innerHTML = temperatureResult;
}

function searchCity(city) {
  let apiKey = "64a733e6o87ac4af3690142d20281tdb";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(searchWeather);
}

function currentWeatherResult(event) {
  event.preventDefault();

  let currentCityInput = document.querySelector("#searchCityInput");

  searchCity(currentCityInput.value);
}

let searchCityWeather = document.querySelector("#weatherSearchForm");

searchCityWeather.addEventListener("submit", currentWeatherResult);

searchCity("Nairobi");
