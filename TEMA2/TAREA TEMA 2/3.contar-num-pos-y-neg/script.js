alert(
  "Se va a pedir una serie de números enteros positivos o negativos. La serie terminará cuando se introduzca un 0."
);
let n = parseInt(prompt("Introduce el primer número: "));
var contNumPos = 0;
var contNumNeg = 0;

while (n != 0) {
  n = parseInt(prompt("Introduce otro número:"));
  if (n < 0) {
    contNumNeg++;
  } else {
    contNumPos++;
  }
}

document.write("Cantidad de números positivos: " + contNumPos);
document.write("Cantidad de números positivos: " + contNumNeg);
