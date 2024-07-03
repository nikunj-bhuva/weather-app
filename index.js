const apiKey = "128ddf11f6202299738d81533791d9bd";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await response.json();
  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

  if (data.weather[0].main == "clouds") {
    weatherIcon.src = "./images/clouds.png.png";
  } else if (data.weather[0].main == "clear") {
    weatherIcon.src = "./images/clear.png.png";
  } else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "./images/rain.png.png";
  } else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "./images/drizze.png.png";
  } else if (data.weather[0].main == "Mist") {
    weatherIcon.src = "./images/mist.png.png";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
