let ventana;

// funcion para abrir la ventana
function abrirVentanaFunction() {
  ventana = window.open("prueba.html", "prueba", "width=500, height=200");
}

// funcion para cerrar ventana
function cerrarVentanaFunction() {
  ventana.close();
}

// funcion para mostrar informacion
function infoVentanaFunction() {
  alert(
    "Nombre de la ventana: " +
      ventana.name +
      "\nAltura interior de la ventana: " +
      ventana.innerHeight +
      "\nAnchura de la ventana: " +
      ventana.innerWidth
  );
}

// funcion para mover la ventana a la derecha
function moverVentanaRFunction() {
  ventana.moveBy(50, 0);
}

// funcion para mover la ventana a la izquierda
function moverVentanaLFunction() {
  ventana.moveBy(-50, 0);
}

// funcion para mover la ventana arriba
function moverVentanaUFunction() {
  ventana.moveBy(0, -50);
}

// funcion para mover la ventana abajo
function moverVentanaDFunction() {
  ventana.moveBy(0, 50);
}

// funcion para aumentar el tamaño de la ventana en el eje X
function aumentarTamXVentanaFucntion() {
  ventana.resizeBy(50, 0);
}

// funcion para reducir el tamaño de la ventana en el eje X
function reducirTamXVentanaFucntion() {
  ventana.resizeBy(-50, 0);
}

// funcion para aumentar el tamaño de la ventana en el eje Y
function aumentarTamYVentanaFucntion() {
  ventana.resizeBy(0, 50);
}

// funcion para reducir el tamaño de la ventana en el eje Y
function reducirTamYVentanaFucntion() {
  ventana.resizeBy(0, -50);
}

// funcion para iniciar programacion
function lanzarProgFunction() {
  
}