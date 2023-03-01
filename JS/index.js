const navBarra = document.querySelector(".nav-barra");
const navMenu = document.querySelector(".nav-menu"); /* defino las constantes */

navBarra.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu-visible"); /*a la barra al hacerle click le asigno la variavle nav-menu-visible que me posiciona el menu en el medio*/
});



function cargarAnimaciones(){
    $(function(){
        $('.chart1').easyPieChart({
            size:160,
            barColor:"#993167",
            scaleLength: 0,
            lineWidth:15,
            tackColor:"#525151",
            lineCap:"circle",
            animate:2000,
        });
        $('.chart2').easyPieChart({
            size:160,
            barColor:"#993167",
            scaleLength: 0,
            lineWidth:15,
            tackColor:"#525151",
            lineCap:"circle",
            animate:2000,
        });
        $('.chart3').easyPieChart({
            size:160,
            barColor:"#993167",
            scaleLength: 0,
            lineWidth:15,
            tackColor:"#525151",
            lineCap:"circle",
            animate:2000,
        });
        $('.chart4').easyPieChart({
            size:160,
            barColor:"#993167",
            scaleLength: 0,
            lineWidth:15,
            tackColor:"#525151",
            lineCap:"circle",
            animate:2000,
        });
        $('.chart5').easyPieChart({
            size:160,
            barColor:"#993167",
            scaleLength: 0,
            lineWidth:15,
            tackColor:"#525151",
            lineCap:"circle",
            animate:2000,
        });
        $('.chart6').easyPieChart({
            size:160,
            barColor:"#993167",
            scaleLength: 0,
            lineWidth:15,
            tackColor:"#525151",
            lineCap:"circle",
            animate:2000,
        });
    })
}

cargarAnimaciones();