function searchWeather(response) {
  let temperatureElement = document.querySelector("#temperatureNumeric");
  let temperatureResult = Math.round(response.data.temperature.current);
  let currentCity = document.querySelector("#weatherCurrentCity");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windSpeedElement = document.querySelector("#windspeed");
  let timeElement = document.querySelector("#time");
  let date = new Date(response.data.time * 1000);

  currentCity.innerHTML = response.data.city;
  timeElement.innerHTML = formatDate(date);
  temperatureElement.innerHTML = temperatureResult;
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  windSpeedElement.innerHTML = `${response.data.wind.speed}km/h`;
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let days = [
    "Sunday",
    "Monday",
    "Tuedsay",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }

  return `${day} ${hours}:${minutes}`;
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
