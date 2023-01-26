

/* ---------------- HAMBURGER MENU ------------------ */
const hamburguer = document.querySelector(".hamburguer")
const navMenu = document.querySelector(".nav-menu")

hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle("active");
    navMenu.classList.toggle("active");

})


/* Crea tu propia lógica para hacer un fetch que emule una post request a un servidor y enseñe un mensaje en consola cuando la llamada se resuelva */


/* La página “Contáctanos” debe incluir un formulario para que los visitantes del sitio web puedan enviar una solicitud de contacto. El formulario debe incluir campos para recolectar información como el nombre, el correo electrónico y el mensaje del usuario. También se debe incluir un botón de envío para enviar la solicitud al punto final especificado en la URL. “https://jsonplaceholder.typicode.com/”.
Los resultados de este formulario se deben ver registrados en consola una vez enviados al punto final especificado en la URL con un codigo de estado 201 */

let submit = (e) => {
  // Verificacion y "refrescar" conceptos de semana pasada
  e.preventDefault();
  console.log(e);
  console.log("CTA Connected");
  // Vamos a traernos el valor de los inputs del html
  let yourName = document.querySelector("#yourName").value;
  let yourEmail = document.querySelector("#yourEmail").value;
  let yourPhone = document.querySelector("#yourPhone").value;
  let yourMessage = document.querySelector("#yourMessage").value;


  // Uso de fetch para empujar valores del title y el body del formulario al api PUBLICO externo
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      name: yourName,
      email: yourEmail,
      phone: yourPhone,
      message: yourMessage
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
};

document.querySelector(".submit-button").addEventListener("click", submit);

