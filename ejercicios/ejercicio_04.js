
const titulo = document.getElementById("titulo");
const parrafo = document.getElementById("parrafo");
const caja = document.getElementById("caja");
const boton = document.getElementById("boton");


boton.addEventListener("click", () => {
 
  titulo.textContent = "Título cambiado con textContent";

  
  parrafo.textContent = "<b>Este párrafo ahora es texto plano</b>";


  caja.innerHTML = "<b>Este contenido ahora tiene HTML en negrita</b>";
});
