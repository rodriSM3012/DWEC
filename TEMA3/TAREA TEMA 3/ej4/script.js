// la funcion sirve para generar un contraseña con letras mayus y MediaElementAudioSourceNode,
// numeros y carcteres especiales de manera aleatoria
// n sirve para determinar la longitud de la contraseña
// puse el nombre en ingles para evitar problemas con la ñ en contraseña
function generatePassword(n) {
  password = ""; // este string vacio servira para guardar la contraseña final
  // los siguientes strings serviran para sacar de ellos un caracter que se elegira aleatoriamente
  stringMayus = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  stringMinus = "abcdefghijklmnopqrstuvwxyz";
  stringSpChar = "!@#$%^&*()_-+=<>?";
  // no inclui un string con los numeros porque puedo usar Math.random() * 10 directamente

  // el bucle generara 1 caracter en cada iteracion que se añadira al final del string password
  // termina al alcanzar la longitud de n
  console.log("\n\n");
  for (i = 0; i < n; i++) {
    let tipo = parseInt(Math.random() * 4); // determina el tipo de caracter que se va a añadir. puede salir 0, 1, 2 o 3
    // el if detecta el valor de tipo y dependiendo de cual sea se añade a password un caracter de los 3 strings distintos o un numero
    if (tipo == 0) {
      password += generateRandomCharFromString(stringMayus);
    } else if (tipo == 1) {
      password += generateRandomCharFromString(stringMinus);
    } else if (tipo == 2) {
      password += generateRandomCharFromString(stringSpChar);
    } else {
      password += parseInt(Math.random() * 10);
    }
    console.log("tipo = " + tipo);
  }

  if (password.length == n) {
    console.log("long cadena = " + password.length + "\n");
  } else {
    console.log("ERROR");
  }
  // devuelve el valor de password al terminar el bucle
  return password;
}

// la funcion devuelve un caracter aleatorio que se escoge de un string que se introudce al llamar la funcion
function generateRandomCharFromString(string) {
  return string.charAt(parseInt(Math.random() * (string.length - 1)));
}
// todos los Math.random() tienen un parseInt antes porque siempre da un numero aleatorio float (con decimales) y tiene que ser entero de 1 digito

// console.log(generatePassword(8));
