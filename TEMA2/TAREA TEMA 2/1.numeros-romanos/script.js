/**
 * La funcion convertidorNRomanos convierte un número a el mismo número en el sistema de números romanos
 * @param n: numero entero positivo
 * @returns nRomano: string con el numero en escritura romana
 */
function convertidorNRomanos(n) {
  let nRomano = "";

  // I → 1
  // V → 5
  // X → 10
  // L → 50
  // C → 100
  // D → 500
  // M → 1000
  while (n != 0) {
    /* 
    el bucle comprueba >= que una cantidad que coincida con la cantidad que representa cada letra,
    y si lo hace se lo resta al numero, haciendolo cada vez mas pequeño. 
    tambien hay una comprobacion extra dentro de cada if para el caso de los numeros que se escriben como una resta:
    10 → X, 1 → I; 9 = 10 - 1; 9 → IX (X - I) 
    */
    if (n >= 1000) {
      n -= 1000;
      nRomano += "M";
    } else if (n >= 500) {
      if (n >= 900) {
        n -= 900;
        nRomano += "CM";
      } else {
        n -= 500;
        nRomano += "D";
      }
    } else if (n >= 100) {
      if (n >= 400) {
        n -= 400;
        nRomano += "CD";
      } else {
        n -= 100;
        nRomano += "C";
      }
    } else if (n >= 50) {
      if (n >= 90) {
        n -= 90;
        nRomano += "XC";
      } else {
        n -= 50;
        nRomano += "L";
      }
    } else if (n >= 10) {
      if (n >= 40) {
        n -= 40;
        nRomano += "XL";
      } else {
        n -= 10;
        nRomano += "X";
      }
    } else if (n >= 5) {
      if (n >= 9) {
        n -= 9;
        nRomano += "IX";
      } else {
        n -= 5;
        nRomano += "V";
      }
    } else if (n >= 1) {
      if (n >= 4) {
        n -= 4;
        nRomano += "IV";
      } else {
        n -= 1;
        nRomano += "I";
      }
    }
  }
  return nRomano;

  /*
  el bucle usa sentencias if anidadas para reducir el numero de comprobaciones:
  si n = 21 comprueba si >= 1000, 500, 100, 50... y solo comprueba si >= 900, 400, 90... después de 
  entrar en las primeras condiciones, haciendo el bucle mas eficiente en la mayoria de casos
  */
}

let n = parseInt(
  prompt(
    "Introduce un número entero de 0 a 3999 para pasarlo a números romanos: "
  )
);

document.write(n + " → " + convertidorNRomanos(n));
