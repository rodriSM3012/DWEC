alert(
  "Se va a pedir una serie de números enteros positivos o negativos. La serie terminará cuando se introduzca un 0."
);
let n = parseInt(prompt("Introduce el primer número: "));

// se inicializa a 0 las variables que van a contar la cantidad de numeros segun su simbolo
var contNumPos = 0;
var contNumNeg = 0;

// el bucle pide numeros continuamente al usuario hasta que introduce un 0 y se detiene
// es un while y no un for porque no se sabe cuantas instancias tendra el bucle
while (n != 0) {
  n = parseInt(prompt("Introduce otro número:"));
  if (n < 0) {
    contNumNeg++;
  } else {
    contNumPos++;
  }
  // si es negativo se suma +1 a contNumNeg, y si no se suma +1 a contNumPos
  // si es negativo solo puede ser positivo ya que si fuese 0 se terminaria el bucle antes de llegar al if
}

document.write("Cantidad de números positivos: " + contNumPos);
document.write("Cantidad de números positivos: " + contNumNeg);
