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
      .then((data) => this.displayWeather(data)); 
    },
    displayWeather: function(data) {
      // Create variables for information we want
      const { name } = data;
      const { icon, description } = data.weather[0];
      const { temp, humidity, feels_like } = data.main;
      const { speed } = data.wind;
      
      
      // Display on page
      document.querySelector(".city").innerText = "Weather in " + name;
      document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
      document.querySelector(".description").innerText = description;
      document.querySelector(".temp").innerText = temp + "°F";
      document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
      document.querySelector(".wind").innerText = "Wind speed: " + speed + "mp/h"
      document.querySelector(".feelsLike").innerText = "Feels like: " + feels_like + "°F"
      document.querySelector(".weather").classList.remove("loading");
      document.body.style.backgroundImage = "url('https://source.unsplash.com/1920x1080/?" + name + "')"


    },
    search: function () {
      this.fetchWeather(document.querySelector(".searchbar").value);
    }
 };

 //Searchbar functionality 

 document.querySelector(".search button").addEventListener("click", function () {
   weather.search();
 });

 //Enter key functionality

 document.querySelector(".searchbar").addEventListener("keyup", function (event){
   if (event.key == "Enter") {
      weather.search();
   }
 });

//Create defualt location to be desplayed apon website boot

weather.fetchWeather("Orlando");