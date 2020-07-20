//ADD the key and change units to imperial
const apiURL = "//api.openweathermap.org/data/2.5/weather?id=3521342&APPID=af4ffb82a252fbc1a4871ac09edace82&units=imperial"

//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
    //Once it comes back, display it to the console.
    console.log(weatherInfo);
    document.getElementById("current").innerHTML=weatherInfo.weather[0].main;
    document.getElementById("temp").innerHTML=weatherInfo.main.temp;
    document.getElementById("humid").innerHTML=weatherInfo.main.humidity;

 }); //end of "then" fat arrow function





 