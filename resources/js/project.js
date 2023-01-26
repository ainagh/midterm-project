/* Crea tu propia lógica para hacer fetch de un post y enseñar su información utilizando DOM manipulation */

/* HEAD: Similar a GET, pero solo regresa los encabezados de la respuesta, no el cuerpo. */

let getExternalApi = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((respuesta) => {
        console.log (respuesta);
          document.querySelector("#title-project").innerHTML = respuesta.title.substring(0, 9);
          document.querySelector("#body-project").innerHTML = respuesta.body;
        })
    
    .catch((error) => console.log(error));
};
getExternalApi ()



let getExternalApi2 = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((respuestas) => {
        console.log (respuestas);
        respuestas.forEach((element, i) => {
          console.log(i);
          if (i < 3){
          document.querySelector(`#te${i+1} h3`).innerHTML = element.title;
          document.querySelector(`#te${i+1} p`).innerHTML = element.body;

        
          }
        });
        /* for (let i = 0; i < 3; i++) {
          document.querySelector(`#text${i+1} h3`).innerHTML = respuestas[i].title;
          document.querySelector(`#text${i+1} p`).innerHTML = respuestas[i].body;
        } */
    })
    .catch((error) => console.log(error));
};
getExternalApi2 ()



/* ADVANCED: consigue que la info del post funcione dinámicamente y enseñe un post u otro según la URL */




/* ------- HAMBURGUER -------- */

const hamburguer = document.querySelector(".hamburguer")
const navMenu = document.querySelector(".nav-menu")

hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle("active");
    navMenu.classList.toggle("active");

})

console.log("Simple Push")