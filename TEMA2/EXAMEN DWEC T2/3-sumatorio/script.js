function sumarParesIntervalo(numero1, numero2) {
  let suma = 0;
  let i;
  if (numero1 % 2 == 0) {
    // comprueba si numero1 es par o no
    i = numero1; // inicializa i como numero1 si es par
  } else {
    i = numero1 + 1; // inicializa i como numero1 si es impar y suma 1 para que sea par
  }
  for (j = i; j <= numero2; j += 2) {
    // suma de 2 en 2 para qeu solo sean los pares
    suma += j;
  }
  return suma;
}

alert(
  "Se van a pedir dos números enteros para declarar un intervalo y luego se sumaran todos los numeros pares dentro del mismo."
);

let numero1 = parseInt(prompt("Introduce el valor menor del intervalo: "));
let numero2 = parseInt(prompt("Introduce el valor mayor del intervalo: "));

// inicia el bucle del cual no se sale hasta que el numero1 sea menor que el numero2
while (numero1 > numero2) {
  alert(
    "El número menor del intervalo es mayor que el otro valor, se van a solicitar de nuevo."
  );
  numero1 = parseInt(prompt("Introduce el valor menor del intervalo: "));
  numero2 = parseInt(prompt("Introduce el valor mayor del intervalo: "));
}

document.write(
  "Suma de los números pares en el intervalo entre " +
    numero1 +
    " y " +
    numero2 +
    ": " +
    sumarParesIntervalo(numero1, numero2)
);
