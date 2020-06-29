const apiWC = "//api.openweathermap.org/data/2.5/weather?id=5604473&APPID=af4ffb82a252fbc1a4871ac09edace82&units=imperial"

//Go fetch it and then wait for a response.
fetch(apiWC)
  .then((response) => response.json())
  .then((weatherInfo) => {

const tempNum = parseFloat(document.getElementById("temp").textContent);
console.log(tempNum);

const windSpeed = parseFloat(document.getElementById("speed").textContent);
console.log(windSpeed);

let wc = 35.74 + (0.6215 * tempNum) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * tempNum * Math.pow(windSpeed, 0.16));
wc = Math.round(wc);

if (tempNum <= 50 && windSpeed > 3) {
    document.getElementById("chill").textContent = "Wind Chill is "+ wc + "\xb0F";
} else {
    document.getElementById("chill").textContent = "No Wind Chill Today";
}

});