function conversorCelsiusToFarenhait(temp) {
  return parseFloat(temp * 1.8 + 32);
}

function conversorFarenhaitToCelsius(temp) {
  return parseFloat((temp - 32) * 1.8);
}

let temp = parseFloat(prompt("Introduce un valor de la temperatura: "));
let tipo = prompt(
  "Si la temperatura que introduciste está en Celsius, introduce C; si está en Farenhait introduce F:"
);

if (tipo == "C") {
  document.write(temp + "ºC = " + conversorCelsiusToFarenhait(temp) + "ºF");
} else if (tipo == "F") {
  document.write(temp + "ºF = " + conversorCelsiusToFarenhait(temp) + "ºC");
} else {
  alert("El tipo que intrdujiste no es válido.");
}
