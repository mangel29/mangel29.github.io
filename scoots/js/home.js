const requestURL = 'data/rentals.json';


fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const rentals = jsonObject['rentals'];
        console.table(jsonObject);
        for (let i = 0; i < rentals.length; i++) {
            let card = document.createElement('section');
            let info = document.createElement('article');
            
            let h2 = document.createElement('h2');
            h2.textContent = rentals[i].type;
            info.appendChild(h2);
            let h3 = document.createElement('h5');
            h3.textContent = "Max. Persons: " + rentals[i].persons;
            info.appendChild(h3);
            card.appendChild(info);
            let img = document.createElement('img');
            img.setAttribute('src', rentals[i].photo);
            img.setAttribute('alt', rentals[i].type);
            card.appendChild(img);
            document.querySelector('div.cards').appendChild(card);
    }
    });
