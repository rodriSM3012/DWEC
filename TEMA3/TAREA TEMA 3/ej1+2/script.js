// funcion basica para abrir la ventana con altura, anchura y url personalizada
function abrirVentana(width, height, url) {
  // al abrir la ventana se establece un tamaño por defecto de 100x100
  let nuevaVentana = window.open(url, "Ventana", "width=100, height=100");
  nuevaVentana.resizeBy(width, 0);
  nuevaVentana.resizeBy(0, height);
}

// funcion para cambiar la direccion url de la ventana por una nueva sin abrir una nueva
function cambiarURL(newURL) {
  // llama al objeto window y luego location para usar .replace
  nuevaVentana.location.replace(newURL);
}
