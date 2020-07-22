fetch('data/rentals.json')
    .then(function (rentals) {
        return rentals.json();
    })
    .then(function (jsonObject) {
        const rentals = jsonObject['rentals'];
        console.table(jsonObject);
        for (let i = 0; i < rentals.length; i++) {
            
            let table = document.createElement('tr');
            let type = document.createElement('td');
            type.textContent = rentals[i].type;
            table.appendChild(type);
            let persons = document.createElement('td');
            persons.textContent = rentals[i].persons;
            table.appendChild(persons);
            let rhalf = document.createElement('td');
            rhalf.textContent = rentals[i].rhalf;
            table.appendChild(rhalf);
            let rfull = document.createElement('td');
            rfull.textContent = rentals[i].rfull;
            table.appendChild(rfull);
            let img = document.createElement('img');
            img.setAttribute('src', rentals[i].photo);
            img.setAttribute('alt', rentals[i].type);
            table.appendChild(img);
            document.querySelector('tbody.forrent').appendChild(table);

    }
    });