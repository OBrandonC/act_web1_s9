const titulo = document.getElementById("titulo");
const btnAdd = document.getElementById("btnAdd");
const btnRemove = document.getElementById("btnRemove");
const btnToggle = document.getElementById("btnToggle");


btnAdd.addEventListener("click", () => {
  titulo.classList.add("resaltado");
});


btnRemove.addEventListener("click", () => {
  titulo.classList.remove("resaltado");
});


btnToggle.addEventListener("click", () => {
  titulo.classList.toggle("oculto");
});
