// funcion para transformar una cadena en cifrado cesar
// reemplaza los caracteres del string al caracter del alfabeto que se encuentre n espacios a la derecha
// al llegar a la z vuelve a empezar por la a
function convertirCifradoCesar(cadena, n) {
  // crear cadenas que funcionen como abecedario
  let alfabetoMayus = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let alfabetoMinus = "abcdefghijklmnopqrstuvwxyz";
  let vocalesConTildeMayus = "ÁÉÍÓÚ";
  let vocalesConTildeMinus = "áéíóú";
  // se crea una cadena vacia que sera igual que la original pero despues de haber sido cifrada
  let cadenaCifrada = "";
  // se puede hacer sustituyendo caracteres en el string original sin crear uno nuevo pero lo encuentro mas sencillo de esta manera

  // bucle para recorrer el string
  for (i = 0; i < cadena.length; i++) {
    alfabeto = ""; // cadena vacia que se sobreescribe con alguno de los alfabetos dependiendo de las condiciones de los ifs que hay debajo
    // esto se hace para evitar repetir el codigo de las lineas 34-36 dentro de cada uno de los ifs
    if (alfabetoMinus.includes(cadena.charAt(i))) {
      // comprueba si el caracter esta en minuscula
      alfabeto = alfabetoMinus;
    } else if (alfabetoMayus.includes(cadena.charAt(i))) {
      // comprueba si esta en mayuscula
      alfabeto = alfabetoMayus;
    } else if (vocalesConTildeMinus.includes(cadena.charAt(i))) {
      // comprueba si es una vocal con tilde en minuscula
      alfabeto = vocalesConTildeMinus;
    } else if (vocalesConTildeMayus.includes(cadena.charAt(i))) {
      // comprueba si es una vocal con tilde en mayuscula
      alfabeto = vocalesConTildeMayus;
    }
    // los ifs estan ordenados de manera que comprueba los caracteres mas probables de encontrar antes que los mas improbables para optimizar
    if (alfabeto != "") {
      // comprueba que alfabeto ha sido sobreescrito despues de entrar en algun if
      char = cadena.charAt(i); // se saca el caracter segun la posicion dentro del string
      pos = alfabeto.indexOf(char); // posicion en la que se encuentra el char en el string de alfabeto
      cadenaCifrada += alfabeto.charAt(pos + n); // se añade al final de la cadena el caracter en el alfabeto con la posicion pos + n
      // en 1 sola linea seria:
      // cadenaCifrada += alfabeto.charAt(alfabeto.indexOf(cadena.charAt(i)) + n);
    } else {
      // si alfabeto no se ha sobreescrito, es que se trata de un caracter especial y no se cifra, se añade el mismo caracter
      cadenaCifrada += cadena.charAt(i);
    }
    console.log(cadenaCifrada + "\n");
  }
}

convertirCifradoCesar("hola mundo", 6);
