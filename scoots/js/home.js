const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';


fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        for (let i = 0; i < towns.length; i++) {
            let card = document.createElement('section');
            let info = document.createElement('article');
            
            let h2 = document.createElement('h2');
            h2.textContent = towns[i].name;
            info.appendChild(h2);
            let h3 = document.createElement('h5');
            h3.textContent = towns[i].motto;
            info.appendChild(h3);
            let p = document.createElement('p');
            p.textContent = "Year Founded: " + towns[i].yearFounded;
            info.appendChild(p);
            let p2 = document.createElement('p');
            p2.textContent = "Population: " + towns[i].currentPopulation;
            info.appendChild(p2);
            let p3 = document.createElement('p');
            p3.textContent = "Annual Rain Fall: " + towns[i].averageRainfall;
            info.appendChild(p3);
            card.appendChild(info);
            let img = document.createElement('img');
            img.setAttribute('src', towns[i].photo);
            img.setAttribute('alt', towns[i].name);
            card.appendChild(img);
            document.querySelector('div.cards').appendChild(card);
    }
    });
