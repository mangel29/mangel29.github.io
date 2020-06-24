    const today = new Date();

    var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    var day = dayNames[today.getDay()];

    var date = today.getDate();
    var month = monthNames[today.getMonth()];
    var year = today.getFullYear();

    var message = day + ", " + date + " " + month + " " + year;

    var el = document.getElementById("dateToday");
    el.textContent = message;