// Solicitar el valor del radio de un círculo e imprimir el valor del perímetro y del área de un
// círculo con ese radio.
const radio = parseFloat(
  prompt("Introduce el valor del radio de una circunferencia: ")
);
alert("Longitud de la circunferencia: " + 2 * radio * 3.1416 + " cm");
alert("Area del circulo: " + radio * radio * 2 * 3.1416 + " cm2");
