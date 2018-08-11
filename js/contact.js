var text = ["BONJOUR.", "HOLA.", "CIAO.", "NAMASTE.", "SALAAM.", "KONNICHIWA", "MERHABA"];
var counter = 0;
var elem = document.getElementById("changeText");
var inst = setInterval(change, 1000);

function change() {
    elem.innerHTML = text[counter];
    counter++;
    if (counter >= text.length) {
        counter = 0;
        // clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
    }
}


// ============================
//      Indian Time Zone

function indianTimeZone() {

    var options = {
            timeZone: 'Asia/Kolkata',
            hour: 'numeric',
        },
        formatter = new Intl.DateTimeFormat([], options);
    var hr = formatter.format(new Date());

        var indiaTime = document.querySelector(".indian-time-zone");
        var indianTime = document.querySelector(".indian-time");
    if (hr > 5 && 19 > hr) {
        indiaTime.innerText = "Have a good DAY!";
        indiaTime.style.color="blue";
        indianTime.style.backgroundColor="grey";
    } else  {
        indiaTime.innerText ="Have a good NIGHT!";
        indiaTime.style.color="red";
        indianTime.style.backgroundColor="grey";
    }
}

setInterval(indianTimeZone, 1000 * 60);
indianTimeZone();

// ============================
//      Singapore Time Zone

function singaporeTimeZone() {

    var options = {
            timeZone: 'Asia/Singapore',
            hour: 'numeric',
        },
        formatter = new Intl.DateTimeFormat([], options);
    var hr = formatter.format(new Date());

    var hello = document.querySelector(".singapore-time-zone");
    var singaporeTime = document.querySelector(".singapore-time");
    if (hr > 5 && 19 > hr) {
        hello.innerText = "Have a good morning";
        hello.style.color="blue";
    } else {
        hello.innerText ="Have a good day!";
        hello.style.color="red";
    }
}

setInterval(singaporeTimeZone, 1000 * 60);
singaporeTimeZone();

// =====================================
//      US Time Zone

function usTimeZone() {

    var options = {
            timeZone: 'America/Panama',
            hour: 'numeric',
        },
        formatter = new Intl.DateTimeFormat([], options);
    var hr = formatter.format(new Date());

    var hello = document.querySelector(".american-time-zone");
    var americanTime = document.querySelector(".american-time");
    if (hr > 5 && 19 > hr) {
        hello.innerText = "Have a good morning";
        hello.style.color="blue";
        americanTime.style.backgroundColor="red";
    } else {
        hello.innerText = "Have a good night!";
        hello.style.color="yellow";
        americanTime.style.backgroundColor="grey";
    }
}

setInterval(usTimeZone, 1000 * 60);
usTimeZone();

// =====================================
//      Africa Time Zone

function africaTimeZone() {

    var options = {
            timeZone: 'Africa/Algiers',
            hour: 'numeric',
        },
        formatter = new Intl.DateTimeFormat([], options);
    var hr = formatter.format(new Date());

    var africanTimeZone = document.querySelector(".african-time-zone");
    var africanTime = document.querySelector(".african-time");
    if (hr > 5 && 19 > hr) {
        africanTimeZone.innerText = "Have a good morning";
        africanTimeZone.style.color="color";
        africanTime.style.backgroundColor="white";
    } else {
        africanTimeZone.innerText = "Have a good night!";
        africanTimeZone.style.color="yellow";
        africanTime.style.backgroundColor="#1C1C1C";
    }
}

setInterval(africaTimeZone, 1000 * 60);
africaTimeZone();