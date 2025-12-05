// funcion para generar un numero aleatorio en un intervalo [a,b]
function generarNumAletorio(a, b) {
  return parseInt(Math.random() * b + a);
}

function imprimirArray(array) {
  for (i = 0; i < array.length; i++) {
    document.write("<li>" + array[i] + "</li>");
  }
}

let arrayNum = [];
for (i = 0; i < 10; i++) {
  arrayNum.push(parseInt(generarNumAletorio(1, 100)));
}

console.log(arrayNum);
