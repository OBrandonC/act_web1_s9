const formulario = document.getElementById("miFormulario");
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const mensaje = document.getElementById("mensaje");

formulario.addEventListener("submit", (event) => {
  event.preventDefault(); 

  
  if (nombre.value.trim() === "" || email.value.trim() === "") {
    mensaje.textContent = "Por favor, completa todos los campos.";
    mensaje.className = "error";
  } else {
    mensaje.textContent = "¡Formulario enviado correctamente!";
    mensaje.className = "exito";

   
    formulario.reset();
  }
});
