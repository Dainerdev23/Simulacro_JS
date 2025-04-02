function ejercicio1() {
  function caja() {
    let total = 0;
    while (true) {
      let nombre = prompt(
        "Ingresa el nombre del producto o preciona fin para finalizar"
      );
      if (nombre.toLowerCase() == "fin") {
        break;
      }
      let precio = parseInt(prompt("ingrese el precio del articulo"));
      if (isNaN(precio))
        alert("el precio debe ser un numero");
      else
        total += precio;
      imprimeProducto(nombre, precio);
      let verificar = prompt("desea agregar mas productos");
      if (verificar.toLowerCase() == "no") {
        break;
      }
    }
    alert("El total de la compra es: " + total);
  }
  function imprimeProducto(nombre, precio) {
    console.log("El producto es: " + nombre + " y su precio es: " + precio);
  }
  
  caja();
}

function ejercicio2(){
function numAleatorio() {
  let num;
  do {
      num = Math.floor(Math.random() * 31) + 100;
  } while(num === 110 || num === 115 || num === 120);
  return num;
}

document.write("<h3>Números generados:</h3><ol>");
let necesitaPar = true;
let contador = 0;

while(contador < 10) {
  let num = numAleatorio();
  if((num % 2 === 0) === necesitaPar) {
      document.write(`<li>${num} (${num % 2 === 0 ? 'par' : 'impar'})</li>`);
      necesitaPar = !necesitaPar;
      contador++;
  }
}
document.write("</ol>");
}

function mostrarImagenes() {
  const contenedor = document.getElementById('imagenes-container');
  if (contenedor.style.display === 'none') {
      contenedor.style.display = 'block';
  } else {
      contenedor.style.display = 'none';
  }
}

