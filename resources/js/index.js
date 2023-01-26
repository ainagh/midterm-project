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



