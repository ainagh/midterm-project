/* Crea tu propia lógica para hacer un fetch que emule una post request a un servidor y enseñe un mensaje en consola cuando la llamada se resuelva */


const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");

})


/* // Get the hamburger icon and navigation menu elements
var hamburger = document.querySelector('.hamburger');
var nav = document.querySelector('.nav');

// Add an event listener to the hamburger icon to toggle the navigation menu when clicked
hamburger.addEventListener('click', function() {
  nav.classList.toggle('visible');
});
 */
/*  ADVANCED: utiliza DOM manipulation para enseñarle al user que su mensaje se ha enviado correctamente o no */