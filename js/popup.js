(function() {
    const bodyScrollLock = document.querySelector('.modal-open');
    const popupButtonYes = document.querySelector('.popup-confirm');
    const popupWrapper = document.querySelector('.popup')
    function popupButtonYesClick(){
        popupWrapper.style.display = 'none';
    }
    popupButtonYes.addEventListener('click', popupButtonYesClick);
})();

document.querySelector('.popup-confirm').onclick = submit;
function submit() {
    if (document.querySelector('.login').value == '') {
        document.getElementById('userName').innerHTML = 'Guest';
    } else {
    const loginValue = document.querySelector('.login').value;
    document.getElementById('userName').innerHTML = loginValue;
    }
}