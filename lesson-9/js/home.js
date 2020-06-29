const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';


fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const towns = jsonObject['towns'];
        console.table(jsonObject);
        for (let i = 0; i < towns.length; i++) {
            if (towns[i].name == "Fish Haven" || towns[i].name == "Preston" || towns[i].name == "Soda Springs") {
            let card = document.createElement('section');
            let info = document.createElement('article');
            
            let h2 = document.createElement('h2');
            h2.textContent = towns[i].name;
            info.appendChild(h2);
            let h3 = document.createElement('h3');
            h3.textContent = towns[i].motto;
            info.appendChild(h3);
            let p = document.createElement('p');
            p.textContent = "Year Founded: " + towns[i].yearFounded;
            info.appendChild(p);
            let p = document.createElement('p');
            p.textContent = "Population: " + towns[i].currentPopulation;
            info.appendChild(p);
            let p = document.createElement('p');
            p.textContent = "Year Founded: " + towns[i].yearFounded + " | Population: " + towns[i].currentPopulation + " | Annual Rain Fall: " + towns[i].averageRainfall;
            info.appendChild(p);
            card.appendChild(info);
            let img = document.createElement('img');
            img.setAttribute('src', towns[i].photo);
            img.setAttribute('alt', towns[i].name);
            card.appendChild(img);
            document.querySelector('div.cards').appendChild(card);
        }
    }
    });
