const lista = document.getElementById("lista");
const boton = document.getElementById("btnAgregar");
let contador = 1;

boton.addEventListener("click", () => {
 
  const nuevoElemento = document.createElement("li");

 
  nuevoElemento.textContent = `Elemento ${contador}`;

  
  lista.appendChild(nuevoElemento);

 
  contador++;
});
