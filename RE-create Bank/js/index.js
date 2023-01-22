"use strict";

console.log('javascript is running');

const login = document.querySelector('.login-container');
const btnLogin = document.querySelector('.btn--login-model');
const btnOpenAc = document.querySelector('.btn--show-modal');
const btncloseAcModal = document.querySelector('.btn--closeAc-modal');
const overlay = document.querySelector('.overlay');
const btnClose = document.querySelector('.btn--close-modal');
const toast = document.querySelector('.toast');
const closeToast = document.querySelector('.close-toast');
const btnInput = document.querySelector('.btn-input');
const openAccount = document.querySelector('.open--account-container');
const header = document.querySelector('.header');

const showModel = function () {
    login.classList.remove('hidden');
    overlay.classList.remove('hidden');
    console.log("btn clicked!");
};

const closeModel = function () {
    login.classList.add('hidden');
    overlay.classList.add('hidden');
}
const showAcModel = function () {
    openAccount.classList.remove('hidden');
    overlay.classList.remove('hidden');
    console.log("btn clicked!");
};

const closeAcModel = function () {
    openAccount.classList.add('hidden');
    overlay.classList.add('hidden');
}

// login btns
btnLogin.addEventListener('click', showModel);
btnClose.addEventListener('click', closeModel);
overlay.addEventListener('click', closeModel);

// open ac btns
btnOpenAc.addEventListener('click', showAcModel);
btncloseAcModal.addEventListener('click', closeAcModel);
overlay.addEventListener('click', closeAcModel);

// for toast
const toastNotify = function () {
    toast.classList.remove('hidden');
};

const hideNotify = function () {
    toast.classList.add('hidden');
};

btnInput.addEventListener('click', toastNotify);
closeToast.addEventListener('click', hideNotify);

// get cookies
const massage = document.createElement('div');
massage.classList.add('cookie-message');

massage.innerHTML =
    "We use cookies for improve functionality and analytics.<button class= 'btn btn--close-cookie'>Got it!</button>";
header.after(massage);
document.querySelector('.btn--close-cookie').addEventListener('click', function () {
    massage.parentElement.removeChild(massage);
})
