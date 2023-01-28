const navBarra = document.querySelector(".nav-barra");
const navMenu = document.querySelector(".nav-menu"); /* defino las constantes */

navBarra.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu-visible"); /*a la barra al hacerle click le asigno la variavle nav-menu-visible que me posiciona el menu en el medio*/
});