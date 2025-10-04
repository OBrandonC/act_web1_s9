document.addEventListener("DOMContentLoaded", () => {
  const infoDiv = document.getElementById("info");

  infoDiv.innerHTML = `
 
  <p><strong>Título de la página:</strong> ${document.title}</p>
        <p><strong>URL actual:</strong> ${document.URL}</p>
    `;
});
