
setTimeout(() => {
  const elementos = document.getElementsByClassName("resaltado");

 
  for (let el of elementos) {
    el.style.color = "red";
    el.style.fontWeight = "bold";
    el.style.backgroundColor = "yellow";
  }

  
  alert(`Número de elementos con clase "resaltado": ${elementos.length}`);
}, 3000);
