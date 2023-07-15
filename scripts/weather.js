let temperature = document.getElementById("temperature");
let weatherIcon = document.getElementById("weather-icon");
let captionDesc = document.querySelector("#description");
let humidity = document.querySelector("#humidity");

const site =
  "https://api.openweathermap.org/data/2.5/forecast?q=carlsbad&appid=77567e80de009e3fad4c8380f0f481d1";

async function apiFetch() {
  try {
    const response = await fetch(site);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}
function displayResults(weatherData) {
  temperature.innerHTML = `<strong>${weatherData.list[0].main.temp}</strong>`;
  humidity.innerHTML = `<strong>${weatherData.list[0].main.humidity}</strong>`;

  const imagesrc = `https://openweathermap.org/img/wn/10d@2x.png`;
  const desc = weatherData.list[0].weather[0].description;

  weatherIcon.setAttribute("src", imagesrc);
  weatherIcon.setAttribute("alt", desc);
  weatherIcon.setAttribute("loading", "lazy");
  weatherIcon.setAttribute("width", "200");
  weatherIcon.setAttribute("height", "200");

  captionDesc.innerHTML = desc;
}

apiFetch();
