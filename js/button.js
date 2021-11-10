const conditioner = document.getElementsByClassName('airConditioning1')[0];

const surveillance = document.getElementsByClassName('videoSurveillance1')[0];

const light = document.getElementsByClassName('lighting1')[0];

const smart = document.getElementsByClassName('smartTV1')[0];

const alarm = document.getElementsByClassName('alarm1')[0];

const cleaning = document.getElementsByClassName('cleaning1')[0];

const content = document.getElementsByTagName('main')[0]; 
const doAirConditioning = document.getElementById('airConditioning');
const doVideoSurveillance = document.getElementById('videoSurveillance');
const doLighting = document.getElementById('lighting');
const doSmartTV = document.getElementById('smartTV');
const doAlarm = document.getElementById('alarm');
const doCleaning = document.getElementById('cleaning');

let isAirConditioning = true;
function airConditioning(){
    if(isAirConditioning) {
        conditioner.classList.remove("airConditioning1");
        conditioner.className = "airConditioning";
        content.append(conditioner);
    } else { 
        content.removeChild(conditioner);
    }
    isAirConditioning = !isAirConditioning;
}
doAirConditioning.addEventListener('click', airConditioning);

let isVideoSurveillance = true;
function videoSurveillance(){
    if(isVideoSurveillance) {
    surveillance.classList.remove("videoSurveillance1");
    surveillance.className = "videoSurveillance";
    content.append(surveillance);
    } else {
        content.removeChild(surveillance);
    }
    isVideoSurveillance = !isVideoSurveillance;
}
doVideoSurveillance.addEventListener('click', videoSurveillance);

let isLighting = true;
function lighting(){
    if(isLighting) {
        light.classList.remove("lighting1");
        light.className = "lighting";
        content.append(light);
    } else { 
        content.removeChild(light);
    }
    isLighting = !isLighting;
}
doLighting.addEventListener('click', lighting);

let isSmartTV = true;
function smartTV(){
    if(isSmartTV) {
        smart.classList.remove("smartTV1");
        smart.className = "smartTV";
        content.append(smart);
    } else {
        content.removeChild(smart);
    }
    isSmartTV = !isSmartTV;
}
doSmartTV.addEventListener('click', smartTV);

let isAlarm = true;
function alarmSys(){
    if(isAlarm) {
        alarm.classList.remove("alarm1");
        alarm.className = "alarm";
        content.append(alarm);
    } else { 
        content.removeChild(alarm);
    }
    isAlarm = !isAlarm;
}
doAlarm.addEventListener('click', alarmSys);

let isCleaning = true;
function Cleaning(){
    if(isCleaning) {
        cleaning.classList.remove("cleaning1");
        cleaning.className = "cleaning";
        content.append(cleaning);
    } else {
        content.removeChild(cleaning);
    }
    isCleaning = !isCleaning;
}
doCleaning.addEventListener('click', Cleaning);