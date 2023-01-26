/* Crea tu propia lógica para hacer fetch de 3 posts distintos y enseñarlos en la homepage con DOM manipulation */

/* -------------------------------Scroll button--------------------------- */

let scrollBtn = document.querySelector(".scroll-to-top");

const scrollMeAllTheWayUp = () => {
  console.log(window);
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}

scrollBtn.addEventListener("click", scrollMeAllTheWayUp)

/* ----------------------------------------API--------------------------------- */


/* GET: Utilizado para obtener información de un recurso. Este es el método utilizado por defecto cuando se hace una petición HTTP sin especificar un método.

  // ----- Envío de una solicitud -----/*  */

 let getExternalApi = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((respuestas) => {
        console.log (respuestas);
        respuestas.forEach((element, i) => {
          console.log(i);
          if (i < 3){
          document.querySelector(`#text${i+1} h3`).innerHTML = element.title.substring(0, 19);
          document.querySelector(`#text${i+1} p`).innerHTML = element.body.substring(0, 29);
          }
        });
        /* for (let i = 0; i < 3; i++) {
          document.querySelector(`#text${i+1} h3`).innerHTML = respuestas[i].title;
          document.querySelector(`#text${i+1} p`).innerHTML = respuestas[i].body;
        } */
    })
    .catch((error) => console.log(error));
};
getExternalApi ()
