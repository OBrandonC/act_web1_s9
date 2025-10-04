
setTimeout(() => {
 
  const titulo = document.getElementById("titulo");
  const parrafo = document.getElementById("parrafo");
  const caja = document.getElementById("caja");


  titulo.textContent = "Texto cambiado con JavaScript ";
  parrafo.textContent = "Este párrafo fue modificado desde JS con retraso.";


  caja.style.backgroundColor = "lightblue";
}, 3000); 