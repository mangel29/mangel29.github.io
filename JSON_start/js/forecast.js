const mydate = new Date();

const today = mydate.getDay();

console.log(today);

const weekday = new Array(7);
weekday[0] = "Sun";
weekday[1] = "Mon";
weekday[2] = "Tue";
weekday[3] = "Wed";
weekday[4] = "Thur";
weekday[5] = "Fri";
weekday[6] = "Sat";

const apiForecastURL = "//api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=af4ffb82a252fbc1a4871ac09edace82&units=imperial"

//Go fetch it and then wait for a response.
fetch(apiForecastURL)
    .then((response) => response.json())
    .then((weatherInfo) => {
        //Once it comes back, display it to the console.
        console.log(weatherInfo);

        document.getElementById("townName").innerHTML = weatherInfo.city.name;

        let mylist = weatherInfo.list;

        let forecastDay = today;
        console.log(forecastDay);

        for (i = 0; i < mylist.length; i++) {

            var time = mylist[i].dt_txt;
            if (time.includes('21:00:00')) {
                forecastDay += 1;
                if (forecastDay === 7) {
                    forecastDay = 0;
                }
                let dayName = document.createElement("span");
                dayName.textContent = weekday[forecastDay];
                console.log(">" + weekday[forecastDay]);
                let temp = document.createElement("p");
                temp.textContent = weatherInfo.list[i].main.temp + "\xB0";

                let iconcode = weatherInfo.list[i].weather[0].icon;
                let iconPath = "//openweathermap.org/img/w/" + iconcode + ".png";
                let theIcon = document.createElement("img");
                theIcon.src = iconPath;

                let theDay = document.createElement("div");
                theDay.appendChild(dayName);
                theDay.appendChild(temp);
                theDay.appendChild(theIcon);

                document.getElementById("weatherforecast").appendChild(theDay);
            }

        }

    }); //end of "then" fat arrow function