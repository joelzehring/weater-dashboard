// search for a city, we'll need to grab the user's input
var searchTerm = "Tucson";

// get weather data about that city from API
var APIkey = "61a79fbfa4179ade451172f8081aafa1";

// Current weather: `https://api.openweathermap.org/data/2.5/onecall?q=${searchTerm}&appid=${APIkey}`
// 5 day forecast: `https://api.openweathermap.org/data/2.5/forecast/daily?q=${searchTerm}&cnt=5&appid=${APIKey}`
fetch(
  `https://api.openweathermap.org/data/2.5/forecast?q=${searchTerm}&cnt=40&units=imperial&appid=${APIkey}`
)
.then(function(response) {
  return response.json();
})
.then(function(response) {
  console.log(response);

  var forecastDay1Date = response.list[0].dt_txt;
  
  for (var i = 0; i < response.list.length; i += 8) {
    var newEl = document.createElement('div');
    newEl.setAttribute('class', 'card');
    var newText = 
    `
      <p>${response.list[i].dt_txt}</p>
      <p>${response.list[i].main.temp}</p>
    `;

    newEl.innerHTML = newText;
    document.querySelector('main').appendChild(newEl);

  }
})

// render weather info on the page

// i = i + 1, i += 1, i++