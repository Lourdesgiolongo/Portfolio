document.querySelector(".btn.btn-1").addEventListener("click", function() {
    var enlaceDescarga = document.createElement("a");
    enlaceDescarga.href = "Archivo/Curriculum Vitae.pdf"; // Cambia "ruta_del_archivo/archivo.pdf" por la ruta real de tu archivo
    enlaceDescarga.download = "Curriculum Vitae.pdf"; // Cambia "nombre_del_archivo.pdf" por el nombre que deseas que tenga el archivo descargado
    enlaceDescarga.style.display = "none";
    document.body.appendChild(enlaceDescarga);
    enlaceDescarga.click();
    document.body.removeChild(enlaceDescarga);
});

const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");

  if (navMenu.classList.contains("nav-menu_visible")) {
    navToggle.setAttribute("aria-label", "Cerrar menú");
  } else {
    navToggle.setAttribute("aria-label", "Abrir menú");
  }
});

