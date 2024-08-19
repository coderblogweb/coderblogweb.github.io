'use strict';

/**
 * navbar variables
 */

const navOpenBtn = document.querySelector("[data-menu-open-btn]");
const navCloseBtn = document.querySelector("[data-menu-close-btn]");
const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

for (let i = 0; i < navElemArr.length; i++) {

  navElemArr[i].addEventListener("click", function () {

    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("active");

  });

}



/**
 * header sticky
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {

  window.scrollY >= 10 ? header.classList.add("active") : header.classList.remove("active");

});



/**
 * go top
 */

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  window.scrollY >= 500 ? goTopBtn.classList.add("active") : goTopBtn.classList.remove("active");

});



/**
 * Contact Form Script
 */

const scriptURL = 'https://script.google.com/macros/s/AKfycbxDJF2M4PpjjtTCkSn0CO6jnmsMNQw3xojDtEEk9MtYiNoQ9X9dlHvaOq05CDz_tM8/exec';

const form = document.forms['submit-to-google-sheet'];

const msg = document.getElementById('msg');

form.addEventListener('submit', e => {

  e.preventDefault()

  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      msg.innerHTML = "Message Sent!!"
    })

    setTimeout(function() {
      msg.innerHTML = ""
    }, 10000)
    form.reset()
    .catch(error => console.error('Error!', error.message))
});



/**
 * Get Year
 */

const d = new Date();
let year = d.getFullYear();
document.getElementById("year").innerHTML = year;
