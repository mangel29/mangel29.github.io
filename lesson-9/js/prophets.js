const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';


fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const prophets = jsonObject['prophets'];
        console.table(jsonObject); // temporary checking for valid response and data parsing
        for (let i = 0; i < prophets.length; i++) {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
            card.appendChild(h2);
            let p = document.createElement('p');
            p.textContent = "Date of Birth: " + prophets[i].birthdate;
            card.appendChild(p);
            let p2 = document.createElement('p2');
            p2.textContent = "Place of Birth: " + prophets[i].birthplace;
            card.appendChild(p2);
            let img = document.createElement('img');
            img.setAttribute('src', prophets[i].imageurl);
            img.setAttribute('alt', prophets[i].name + ' ' + prophets[i].lastname + ' - ' + prophets[i].order);
            card.appendChild(img);
            document.querySelector('div.cards').appendChild(card);
        }
    });

    