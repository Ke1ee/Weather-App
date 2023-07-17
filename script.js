// Create object to store functions for API
 let weather = {
    "apiKey": "5c3194248aa07cc1818a2aee947f3e0d",
    fetchWeather: function (city) {
      fetch(
         "https://api.openweathermap.org/data/2.5/weather?q=" 
      + city 
      + "&units=imperial&appid=" 
      + this.apiKey
   )
      .then((response) => response.json())
      .then((data) => console.log(data)); 
    },
    displayWeather: function(data) {

    }

 }