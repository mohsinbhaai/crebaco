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

function updateBackground() {
    var
        hr = (new Date()).getHours();

        hello = document.querySelector(".hello");
        var indianTime = document.querySelector(".indian-time");
    if (hr < 10) {
        hello.innerText = "Have a good morning";
        hello.style.color="blue";
    } else if (hr < 19) {
        hello.innerText ="Have a good day!";
        hello.style.color="red";
    } else {
        hello.innerText = "Have a good night!";
        hello.style.color="yellow";
        indianTime.style.backgroundColor="grey";
    }
}

setInterval(updateBackground, 1000 * 60);
updateBackground();