document.addEventListener("DOMContentLoaded", () => {
  const parrafo2 = document.getElementById("parrafo2");
  const info = document.getElementById("info");


  const padre = parrafo2.parentElement;


  const hijos = padre.children;

 
  const siguiente = parrafo2.nextElementSibling;

  
  info.innerHTML = `
        <h2>Resultados de navegación</h2>
        <p><b>Padre de párrafo 2:</b> ${padre.id}</p>
        <p><b>Hijos del contenedor:</b> ${Array.from(hijos)
          .map((h) => h.id)
          .join(", ")}</p>
        <p><b>Siguiente hermano de párrafo 2:</b> ${siguiente.id}</p>
    `;
});
