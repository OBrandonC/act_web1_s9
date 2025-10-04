const boton = document.getElementById("btnClick");
const caja = document.getElementById("caja");


boton.addEventListener("click", () => {
  alert("¡Hiciste clic en el botón!");
});


caja.addEventListener("mouseover", () => {
  caja.style.backgroundColor = "lightgreen";
  caja.textContent = "¡Mouse encima!";
});


caja.addEventListener("mouseout", () => {
  caja.style.backgroundColor = "lightgray";
  caja.textContent = "Pasa el ratón por aquí";
});
