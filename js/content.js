const span = document.getElementById("lightingValue");
const range = document.getElementById("slide");
function changeVal() {
  span.textContent = range.value;
}
changeVal();

range.onchange = changeVal;

const powerButton = document.getElementsByClassName('power')[0];
let isPower = true;
function power(){
    if(isPower) {
        document.getElementById('alarmStatus').innerHTML = 'On';
        document.getElementById('info').innerHTML = 'Your home in safety.';
    } else { 
        document.getElementById('alarmStatus').innerHTML = 'Off';
        document.getElementById('info').innerHTML = "Turn on if you aren't at home.";
    }
    isPower = !isPower;
}
powerButton.addEventListener('click', power);

let isSwitch = true;
function chboxToRange(){
    if(isSwitch) {
        range.value = 50;
        span.textContent = range.value;
    } else { 
        range.value = 0;
        span.textContent = range.value;
    }
    isSwitch = !isSwitch;
}

const chboxCond = document.getElementById('checkboxCond');
let isSwitchCond = true;
function doChboxCond(){
    if(isSwitchCond) {
        document.getElementById('ConditionerStatus').innerHTML = 'On';
        document.getElementsByName('mode').disabled == false;
    } else { 
        document.getElementById('ConditionerStatus').innerHTML = 'Off';
        document.getElementsByName('mode').disabled == true;
    }
    isSwitchCond = !isSwitchCond;
}

function toggleMode() {
    let modeItems = document.querySelectorAll('#conditionerMode input[type="radio"]');
    for (let i = 0; i < modeItems.length; i++) {
      modeItems[i].disabled = !modeItems[i].disabled;
    }
  }

chboxCond.addEventListener('click', doChboxCond);
chboxCond.addEventListener('change', toggleMode);

const channels = ['Netflix', 'Discovery', 'Disney', 'Cartoon', 'HBO', 'Paramount', 'Showtime', 'Fox', 'ET News', 'ON Film'];
let i = 1;
document.getElementById("buttonCountPlus").onclick = function() {
  if(i <= channels.length-1){
      document.getElementById("buttonCountNumber").innerHTML = channels[i];
      i++;
    }
}
  
document.getElementById("buttonCountMinus").onclick = function() {
  if(i >= 1){
    i--;
      document.getElementById("buttonCountNumber").innerHTML = channels[i];
    }
}