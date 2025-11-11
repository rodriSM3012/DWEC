alert(
  "Se van a pedir varios números enteros positivos para crear una serie.\n" +
    "La serie terminara cuando se introduzca un 0."
);
let n = parseInt(prompt("Introduce el primer número: "));

// inicializacion de variables para calculas la media, el min y max
suma = n; // va a sumar todos los n y por eso empieza como n para no sumarlo luego
cont = 1; // cuenta los numeros que se han introducido y empieza en 1 contando el n que ya se ha introducido
// suma y cont se usaran para la media
nMax = n;
nMin = n;
// ambos se inician en n porque es el unico valor que hay por ahora

while (n != 0) {
  n = parseInt(prompt("Introduce el siguiente número: "));
  // ifs para comprobar si el nuevo numero es mayor o menor y sobreescribirlo luego
  if (n > nMax) nMax = n;
  else if (n < nMin && n != 0) nMin = n; // es un else if porque si ya es nMax no va a poder ser nMin
  //   tambien comprueba que no sea 0, ya que es el numero para parar el bucle y no queremos ese como minimo
  // operaciones para la media
  suma += n;
  cont++;
}

document.write("<br/>Media → " + parseFloat(suma / cont));
document.write("<br/>Número máximo → " + nMax);
document.write("<br/>Número mínimo → " + nMin);
