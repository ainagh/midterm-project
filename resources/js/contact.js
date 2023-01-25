/* Crea tu propia lógica para hacer un fetch que emule una post request a un servidor y enseñe un mensaje en consola cuando la llamada se resuelva */


const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector("#navlist")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navlist.classList.toggle("active");

})

/*  ADVANCED: utiliza DOM manipulation para enseñarle al user que su mensaje se ha enviado correctamente o no */