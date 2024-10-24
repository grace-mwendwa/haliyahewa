function currentWeatherInput(event) {
  event.preventDefault();

  let currentCity = document.querySelector("#weatherCurrentCity");
  let currentCityInput = document.querySelector("#searchCityInput");

  currentCity.innerHTML = currentCityInput.value;
}

let searchCityInput = document.querySelector("#weatherSearchForm");
searchCityInput.addEventListener("submit", currentWeatherInput);
