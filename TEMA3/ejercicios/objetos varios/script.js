function mostrarNombre(nombre) {
  return "Buenos días " + nombre;
}

function contarCharConEspacios(nombre) {
  return "Tu nombre tiene " + nombre.length + " caracteres incluidos espacios.";
}

function mostrarPrimeraA(nombre) {
  for (i = 0; i < nombre.length; i++) {
    if (nombre[i] === "A" || nombre[i] === "a") {
      return "La primera letra A de tu nombre esta en la posicion " + i;
    }
  }
  return "Tu nombre no tiene ninguna letra A";
}

function mostrarUltimaA(nombre) {
  let pos = "";
  for (i = 0; i < nombre.length; i++) {
    if (nombre[i] === "A" || nombre[i] === "a") {
      pos = parseInt(i);
    }
  }
  if (pos != "") {
    return "La ultima letra A de tu nombre esta en la posicion " + i;
  } else {
    return "Tu nombre no tiene ninguna letra A";
  }
}

function mostrarDiaNac(dayBirth, monthBirth, yearBirth) {
  let fechaNac = new Date(yearBirth, monthBirth - 1, dayBirth);
  let string = "";
  // console.log(fechaNac.toString());
  // console.log(fechaNac.getDay());
  string = "Naciste un dia ";
  if (fechaNac.getDay() == 0) {
    string += "domingo.";
  } else if (fechaNac.getDay() == 1) {
    string += "lunes.";
  } else if (fechaNac.getDay() == 2) {
    string += "martes.";
  } else if (fechaNac.getDay() == 3) {
    string += "miercoles.";
  } else if (fechaNac.getDay() == 4) {
    string += "jueves.";
  } else if (fechaNac.getDay() == 5) {
    string += "viernes.";
  } else if (fechaNac.getDay() == 6) {
    string += "sabado.";
  }
  return string;
}

function mostrarNombreQuitandoLetras(nombre) {
  return "Tu nombre menos las tres primeras letras: " + nombre.slice(3);
}



function mostrarTodosResultados(nombre, dayBirth, monthBirth, yearBirth) {
  document.getElementById("mostrarNombre").innerHTML = mostrarNombre(nombre);

  document.getElementById("contarCharConEspacios").innerHTML =
    contarCharConEspacios(nombre);

  document.getElementById("mostrarPrimeraA").innerHTML =
    mostrarPrimeraA(nombre);

  document.getElementById("mostrarUltimaA").innerHTML = mostrarUltimaA(nombre);

  document.getElementById("mostrarNombreQuitandoLetras").innerHTML =
    mostrarNombreQuitandoLetras(nombre);

  document.getElementById("mostrarDiaNac").innerHTML = mostrarDiaNac(
    dayBirth,
    monthBirth,
    yearBirth
  );
}

// mostrarDiaNac(30, 11, 2001);
