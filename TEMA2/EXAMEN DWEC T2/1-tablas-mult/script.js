// funcion para imprimir en pantalla la tabla del 7 con bucle for
function imprimirTabla7() {
  // el bucle inicia en 1 y termina en 10 incluido (por eso <= en vez de <)
  document.write("Tabla del 7:<br/>");
  for (i = 1; i <= 10; i++) {
    document.write(i + " x 7 = " + 7 * i + "<br/>");
  }
  document.write("<br/><br/>");
}

// funcion para imprimir en pantalla la tabla del 8 con bucle while
function imprimirTabla8() {
  let i = 1; // se declara la variable fuera para que se mantenga al reiniciar el bucle
  document.write("Tabla del 8:<br/>");
  while (i <= 10) {
    document.write(i + " x 8 = " + 8 * i + "<br/>");
    i++;
  }
  document.write("<br/><br/>");
}

// funcion para imprimir en pantalla la tabla del 9 con bucle do-while
function imprimirTabla9() {
  let i = 1;
  document.write("Tabla del 9:<br/>");
  do {
    document.write(i + " x 9 = " + 9 * i + "<br/>");
    i++;
  } while (i <= 10);
  document.write("<br/><br/>");
}
