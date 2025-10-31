let n = parseInt(
  prompt(
    "Introduce un número entero que servirá como cantidad de números de la sucesión de Fibonacci que aparecerán en pantalla: "
  )
);

// para calcular la sucesion hacen falta 2 variables
n1 = 0;
n2 = 1;
// variable auxiliar para pasar los valores entre n1 y n2
aux = 0;

// se imprimen los primeros valores de la sucesion
document.write("0, 1");
for (let i = 0; i < n - 2; i++) {
  // i < n - 2 porque se restan los 2 primeros
  // guarda el valor de n2 en la variable auxiliar para no perderlo
  aux = n2;
  // suma n2 y n1 y se le asigna a n2, calculando el siguiente valor de la sucesion
  n2 += n1;
  // asigna el valor previo de n2 a n1
  n1 = aux;
  document.write(", " + n2);
}
