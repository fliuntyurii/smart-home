let condPow = true;
function showConditionerNotification() {  
    if (condPow) {
        let notification = document.createElement('div');
        notification.className = "notification";
    
        notification.innerHTML = 'Conditioner has just turned on';
        document.body.append(notification);

        setTimeout(() => notification.remove(), 1500);
    } else {
        let notification = document.createElement('div');
        notification.className = "notification";
     
        notification.innerHTML = 'Conditioner has just turned off';
        document.body.append(notification);
    
        setTimeout(() => notification.remove(), 1500);
    }
    condPow = !condPow;
}

const checkboxCond = document.getElementById('checkboxCond');
checkboxCond.addEventListener('click', showConditionerNotification);

function showModeNotification(text) {  
    let notification = document.createElement('div');
    notification.className = "notification";

    notification.innerHTML = text;
    document.body.append(notification);

    setTimeout(() => notification.remove(), 1500);
}

const radioInputUp = document.getElementById('radioInputUp');
radioInputUp.addEventListener('click', function(){showModeNotification('Conditioner mode: heating')});

const radioInputDown = document.getElementById('radioInputDown');
radioInputDown.addEventListener('click', function(){showModeNotification('Conditioner mode: cooling')});

let isLight = true;
function showLightNotification() {  
    if (isLight) {
        let notification = document.createElement('div');
        notification.className = "notification";
    
        notification.innerHTML = 'Light has just turned on. Bright: 50%';
        document.body.append(notification);

        setTimeout(() => notification.remove(), 1500);
    } else {
        let notification = document.createElement('div');
        notification.className = "notification";
     
        notification.innerHTML = 'Light has just turned off';
        document.body.append(notification);
    
        setTimeout(() => notification.remove(), 1500);
    }
    isLight = !isLight;
}

const checkbox = document.getElementById('checkbox');
checkbox.addEventListener('click', showLightNotification);

let isTvPow = true;
function showTVPowerNotification() {  
    if (isTvPow) {
        let notification = document.createElement('div');
        notification.className = "notification";
    
        notification.innerHTML = "Smart TV 'Samsung' has just turned on";
        document.body.append(notification);

        setTimeout(() => notification.remove(), 1500);
    } else {
        let notification = document.createElement('div');
        notification.className = "notification";
     
        notification.innerHTML = "Smart TV 'Samsung' has just turned off";
        document.body.append(notification);
    
        setTimeout(() => notification.remove(), 1500);
    }
    isTvPow = !isTvPow;
}

const tvPow = document.getElementById('tvPow');
tvPow.addEventListener('click', showTVPowerNotification)

let volume = 0;
Math.abs(volume);
function showTVVolumeUpNotification(text) {  
    if (volume <= 20) {
    let notification = document.createElement('div');
    notification.className = "notification";
    notification.innerHTML = text + volume++;
    document.body.append(notification);
    setTimeout(() => notification.remove(), 1500);
    }
}

function showTVVolumeDownNotification(text) {  
    volume--
    if (volume >= 0) {
    let notification = document.createElement('div');
    notification.className = "notification";
    notification.innerHTML = text + volume;
    document.body.append(notification);
    setTimeout(() => notification.remove(), 1500);
    } 
    if (volume < 0) {
        return volume = 0;
    }
}

const buttonVolU = document.getElementById('buttonVolU');
buttonVolU.addEventListener('click', function(){showTVVolumeUpNotification('Volume ')});

const buttonVolD = document.getElementById('buttonVolD');
buttonVolD.addEventListener('click', function(){showTVVolumeDownNotification('Volume ')});

function showTVChannelNotification() {  
    let notification = document.createElement('div');
    notification.className = "notification";

    notification.innerHTML = `Channel switched to ${document.getElementById('buttonCountNumber').innerHTML}`;
    document.body.append(notification);

    setTimeout(() => notification.remove(), 1500);
}

const buttonCountPlus = document.getElementById('buttonCountPlus');
buttonCountPlus.addEventListener('click', showTVChannelNotification);

const buttonCountMinus = document.getElementById('buttonCountMinus');
buttonCountMinus.addEventListener('click', showTVChannelNotification);

let isAlarmSys = true;
function showAlarmNotification() {  
    if (isAlarmSys) {
        let notification = document.createElement('div');
        notification.className = "notification";
    
        notification.innerHTML = 'Alarm system on. Your home in safety';
        document.body.append(notification);

        setTimeout(() => notification.remove(), 1500);
    } else {
        let notification = document.createElement('div');
        notification.className = "notification";
     
        notification.innerHTML = 'Alarm system off';
        document.body.append(notification);
    
        setTimeout(() => notification.remove(), 1500);
    }
    isAlarmSys = !isAlarmSys;
}

const powerAlarm = document.getElementsByClassName('power')[0];
powerAlarm.addEventListener('click', showAlarmNotification);

let isIRoboxPow = true;
function showCleaningNotification() {  
    if (isIRoboxPow) {
        let notification = document.createElement('div');
        notification.className = "notification";
    
        notification.innerHTML = 'Cleaning mode on. iRobox is cleaning the house';
        document.body.append(notification);

        setTimeout(() => notification.remove(), 1500);
    } else {
        let notification = document.createElement('div');
        notification.className = "notification";
     
        notification.innerHTML = 'Cleaning mode off';
        document.body.append(notification);
    
        setTimeout(() => notification.remove(), 1500);
    }
    isIRoboxPow = !isIRoboxPow;
}

const iRoboxPower = document.getElementById('start');
iRoboxPower.addEventListener('click', showCleaningNotification);

