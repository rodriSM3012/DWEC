// funcion sin optimizar para calcular numeros primos
function esPrimo(n) {
  for (var i = 2; i < n; i++) {
    // i se inicializa en 2 porque 0 daria error y 1 siempre es divisor
    if (n % i == 0) return false;
    // al detectar un divisor implica que no es primo y sale de la funcion con un return
  }
  // si sale del bucle implica que si es primo y llega al return true
  return true;
}

// funcion para hacer avanzar a la i
function saltarNum(i) {
  if (i % 10 == 1 || i % 10 == 7) {
    // si el numero termina en 1 o 7 salta 2 posiciones hasta el 3 y el 9, ya que si termina en 2 u 8 nunca es primo
    i += 2;
  } else if (i % 10 == 3) {
    // el else if comprueba si el numero termina en 3, y si lo hace salta 4 numeros
    // ya que los numeros que terminan en 4, 5 o 6 nunca son primos.
    // de esta manera el codigo se ahorra pasar por 3 numeros que nunca seran primos
    if (i == 3) i += 2; // se salta el 4 para ir al 5 que sí es primo y no saltarselo.
    else i += 4;
  } else {
    i++;
  }
  return i;
}

// version optimizada de esPrimo: se salta el 2 y empieza con 3 seguido de un bucle que solo recorre los numeros impares,
// ya que los numeros pares ya se saltan con la funcion saltarNum
function esPrimo2(n) {
  for (var i = 3; i < n; i += 2) {
    if (n % i == 0) return false;
    // al detectar un divisor implica que no es primo y sale de la funcion con un return
  }
  // si sale del bucle implica que sí es primo y llega al return true
  return true;
}

// se pide n al usuario por teclado
let n = parseInt(
  prompt(
    "Introduce un número entero que servirá como límite para la cantidad de números primos que se mostrarán a continuación:"
  )
);

// inicializacion de una variable que contara la cantidad de numeros primos que se han encontrado
cont = 0;

// j sirve como una variable que va en aumento y se va a usar para detectar numeros primos
let i = 2;

// el bucle compara cont con la cantidad que pidio el usuario y detiene el bucle cuando se haya alcanzado la cantidad
// es < en vez de <= porque si fuese <= calcularia uno de mas
while (cont < n) {
  if (esPrimo2(i)) {
    document.write(i + "<br/>");
    cont++;
  }
  i = saltarNum(i);
}
