
//funcion que carga las animaciones de las habilidades
function cargaAnimaciones(){
    $(function(){
        $('.chart1').easyPieChart({
            size:160,
            barColor:"#ff5b00",
            scaleLength:0,
            lineWidth:15,
            tackColor:"#525151",
            lineCap:"circle",
            animate:2000,
        });
        $('.chart2').easyPieChart({
            size:160,
            barColor:"#ff5b00",
            scaleLength:0,
            lineWidth:15,
            tackColor:"#525151",
            lineCap:"circle",
            animate:2000,
        });
        $('.chart3').easyPieChart({
            size:160,
            barColor:"#ff5b00",
            scaleLength:0,
            lineWidth:15,
            tackColor:"#525151",
            lineCap:"circle",
            animate:2000,
        });
        $('.chart4').easyPieChart({
            size:160,
            barColor:"#ff5b00",
            scaleLength:0,
            lineWidth:15,
            tackColor:"#525151",
            lineCap:"circle",
            animate:2000,
        });
        $('.chart5').easyPieChart({
            size:160,
            barColor:"#ff5b00",
            scaleLength:0,
            lineWidth:15,
            tackColor:"#525151",
            lineCap:"circle",
            animate:2000,
        });
        $('.chart6').easyPieChart({
            size:160,
            barColor:"#ff5b00",
            scaleLength:0,
            lineWidth:15,
            tackColor:"#525151",
            lineCap:"circle",
            animate:2000,
        });
    })
}

// Función que detecta cuando lanzar la animación de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("habilidades");
    var distancia_skils = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skils >= 300){
        let habilidades = document.getElementsByClassName("chart");
        for (let i = 0; i < habilidades.length; i++) {
            habilidades[i].classList.add("chart" + (i + 1));
        }

        cargaAnimaciones();
    }
}

// Detecto el scrolling para aplicar la animacion de las habilidades
window.onscroll = function() {
    efectoHabilidades();
}

//función que muestra el menu responsive{
    function responsiveMenu(){
        let x = document.getElementById("nav");
        if(x.className === "") {
            x.className = "responsive";
    
            //creamos el elemento que cierra el menu
            let span = document.createElement("span");
            span.innerHTML = "X";
            document.getElementById("nav").appendChild(span);
    
            //quitamos el boton eliminar cuando se hace click sobre este
            span.onclick = function () {
                x.className = "";
                span.remove();
            }
        } else {
            x.className = "";
        }
    }
    
    //Este codigo es para agregar una función a cada links del menu
    //responsive
    //cuando se presione en cualquier de los links del menu debe desaparecer el menu
    const links = document.querySelectorAll("#nav a");
    for(let i = 0; i < links.length; i++){
        links[i].onclick = function(){
            var x = document.getElementById("nav");
            x.className = "";
    
            //removemos el boton eliminar
            btnEliminar = document.querySelector("#nav span");
            btnEliminar.remove();
        }
    }
