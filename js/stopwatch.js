let x;
let startstop = 0;

function startStop() {
    startstop = startstop + 1;
    if (startstop === 1) {
        start();
        document.getElementById("start").innerHTML = "Stop";
    } else if (startstop === 2) {
        document.getElementById("start").innerHTML = "Start";
        startstop = 0;
        stop();
    }
}

function start() {
    x = setInterval(timer, 10);
}

function stop() {
    clearInterval(x);
}

let milisec = 0;
let sec = 0;
let min = 0;
let hour = 0;
let miliSecOut = 0;
let secOut = 0;
let minOut = 0;
let hourOut = 0;

function timer() {
    miliSecOut = checkTime(milisec);
    secOut = checkTime(sec);
    minOut = checkTime(min);
    hourOut = checkTime(hour);
    milisec = ++milisec;

    if (milisec === 100) {
        milisec = 0;
        sec = ++sec;
    }
    if (sec == 60) {
        min = ++min;
        sec = 0;
    }
    if (min == 60) {
        min = 0;
        hour = ++hour;
    }
    document.getElementById("sec").innerHTML = secOut;
    document.getElementById("min").innerHTML = minOut;
}

function checkTime(i) {
    if (i < 10) {
    i = "0" + i;
    }
    return i;
}

function reset() {
    milisec = 0;
    sec = 0;
    min = 0
    hour = 0;
    document.getElementById("sec").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
}

const startStopButt = document.getElementById('start');
startStopButt.addEventListener('click', reset);
startStopButt.addEventListener('click', startStop);