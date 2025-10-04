const imagen = document.getElementById("imagen");
const enlace = document.getElementById("enlace");
const boton = document.getElementById("boton");

boton.addEventListener("click", () => {
  
  console.log("SRC actual:", imagen.getAttribute("src"));
  console.log("HREF actual:", enlace.getAttribute("href"));


  imagen.setAttribute("src", "https://via.placeholder.com/300x150");
  imagen.setAttribute("alt", "Imagen cambiada");

  enlace.setAttribute("href", "https://www.openai.com");
  enlace.textContent = "Ir a OpenAI";
});
