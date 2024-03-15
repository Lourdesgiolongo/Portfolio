document.querySelector(".btn.btn-1").addEventListener("click", function() {
    // Crear un elemento <a> en el DOM
    var enlaceDescarga = document.createElement("a");
    // Establecer el atributo href con la ruta del archivo que deseas descargar
    enlaceDescarga.href = "Archivo/Curriculum Vitae.pdf"; // Cambia "ruta_del_archivo/archivo.pdf" por la ruta real de tu archivo
    // Establecer el atributo download para especificar el nombre del archivo descargado
    enlaceDescarga.download = "Curriculum Vitae.pdf"; // Cambia "nombre_del_archivo.pdf" por el nombre que deseas que tenga el archivo descargado
    // Ocultar el elemento <a>
    enlaceDescarga.style.display = "none";
    // Agregar el elemento <a> al final del body
    document.body.appendChild(enlaceDescarga);
    // Simular un clic en el enlace de descarga
    enlaceDescarga.click();
    // Eliminar el elemento <a> del DOM después de la descarga
    document.body.removeChild(enlaceDescarga);
});

// Función para verificar si un elemento está visible en el viewport
function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

//función que muestra el menu responsive

function responsiveMenu() {
    let x = document.getElementById("nav");
    let span = document.querySelector("#nav span");

    if (x.className === "") {
        x.className = "responsive";

        //creamos el elemento que cierra el menu
        span = document.createElement("span");
        span.innerHTML = "X";
        span.onclick = function () {
            x.className = "";
            span.remove();
        };
        document.getElementById("nav").appendChild(span);
    } else {
        x.className = "";
        if (span) {
            span.remove();
        }
    }
}

//Este codigo es para agregar una función a cada links del menu
//responsive
//cuando se presione en cualquier de los links del menu debe desaparecer el menu
const links = document.querySelectorAll("#nav a");
for (let i = 0; i < links.length; i++) {
    links[i].onclick = function () {
        var x = document.getElementById("nav");
        x.className = "";

        //removemos el boton eliminar
        btnEliminar = document.querySelector("#nav span");
        btnEliminar.remove();
    }
}
document.getElementById("icono-nav").addEventListener("click", responsiveMenu);
