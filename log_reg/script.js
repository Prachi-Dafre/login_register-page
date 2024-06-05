const btnPopup = document.querySelector('.btnlogin-popup');
const cover_box = document.querySelector('.cover_box');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const iconClose = document.querySelector('.icon-close');
const navigation = document.querySelector('.navigation');
/*const hamburger =  document.querySelector('.hamburger');
const close = document.querySelector('.close');
const list = document.querySelector('.list');*/


function activateCoverBox(){
    cover_box.classList.add('active');
}
function deactivateCoverBox(){
    cover_box.classList.remove('active');
}
function activatePopup(){
    cover_box.classList.add('active-popup');
}
function deactivateCoverPopup(){
    cover_box.classList.remove('active-popup');
}


registerLink.addEventListener('click', activateCoverBox);
loginLink.addEventListener('click', deactivateCoverBox);
btnPopup.addEventListener('click', activatePopup);
iconClose.addEventListener('click', deactivateCoverPopup);






/*function togglenavigation() {
    if (navigation.classList.contains("shownavigation")) {
        navigation.classList.remove("shownavigation");
        close.style.display = "none";
    } else {
        navigation.classList.add("shownavigation");
        close.style.display = "block";
    }
}

hamburger.addEventListener("click", togglenavigation);*/

