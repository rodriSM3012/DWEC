// funcion para transformar una cadena en cifrado cesar
// reemplaza los caracteres del string al caracter del alfabeto que se encuentre n espacios a la derecha
// al llegar a la z vuelve a empezar por la a
function convertirCifradoCesar(cadena, n) {
  let alfabetoMayus = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let alfabetoMinus = "abcdefghijklmnopqrstuvwxyz";
  let vocalesConTildeMayus = "ÁÉÍÓÚ";
  let vocalesConTildeMinus = "áéíóú";
  let cadenaCifrada = "";

  for (i = 0; i < string.length; i++) {
    let newChar = ""; // sera la letra por la que se sustituira
    // en primer lugar comprueba si el caracter es un espacio, y si lo es lo salta y lo deja como esta para ir al sig
    if (!cadena.charAt(i) == " ") {
      // busca char en alfabetoMinus; si no lo encuentra pos == false
      let pos = encontrarCharEnString(alfabetoMinus, cadena.charAt(i));
      if (pos == false) {
        // char no se encontro en alfabetoMinus, se va a buscar en alfabetoMayus
        pos = encontrarCharEnString(alfabetoMayus, cadena.charAt(i));
        // por el if, solo lo busca si antes no lo encontro
        if (pos == false) {
          // si todavia no se encontro, es que hay una vocal con tilde u otro caracter distinto
          // TODO detectar tildes
        }
      } else {
          cadena.charAt(i) = alfabetoMinus.charAt(pos+n)
      }
      // se detectan antes las minusculas porque es mas probable encontrarlas que las mayusculas,
      // asi al encontrarlas ya no se recorre alfabetoMayus, optimizando el codigo

    }
  }
}

// funcion que recorre un string como un array y detecta si en el string se encuentra un caracter concreto (char)
// al encontrarlo ejecuta un return y se detiene la funcion devolviendo la posicion donde se encontro char (i)
function encontrarCharEnString(cadena, char) {
  for (i = 0; i < cadena.length; i++) {
    if (cadena.charAt(i) === char) return i;
  }
  return false;
}
