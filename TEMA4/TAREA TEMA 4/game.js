// objeto literal con todos los componentes del juego: heroe, enemigos y salas
const defaultGameState = {
  player: {
    // nombre del jugador
    name: "Rodrigo",
    // salud que tiene el jugador
    health: 30,
    // fuerza del jugador
    strength: 14,
    // bonus de fuerza del jugador
    strengthBonus: 2,
    // defensa del jugador
    defense: 12,
    // bonus de defensa del jugador
    defenseBonus: 0,
    // id de la habitación en la que se encuentra el jugador
    currentRoom: 0,
    // cantidad de dinero que tiene el jugador
    gold: 300,
    // cantidad de pociones que tiene el jugador
    potions: 3,
  },
  map: {
    /*
    MAPA: 
                              +----------------+       
                              | 3 sala tesoro  |        
                              +----------------+       
                                        |              
                                        |              
  +---------+---------+       +---------+---------+       +---------+---------+
  | 4 tienda          |-------| 2 pasillo         |-------| 5 sala cadenas    |
  +-------------------+       +---------+---------+       +-------------------+
                                        |
                                        |
                              +---------+---------+
                              | 1 entrada         |
                              +---------+---------+
                                        |
                                        |
                              +---------+---------+
                              | 0 pueblo          |
                              +-------------------+
    */
    rooms: [
      // entrada
      {
        // id de la sala
        id: 1,
        // probabilidad de cada ubicacion para que aparezca un monstruo
        monsterProb: 0.0,
        // determina si la sala es una tienda donde comprar o no
        isShop: false,
        // nombre de la sala
        name: "Entrada a la mazmorra",
        // descripcion de la sala
        description: "",
        // incluye la id de la sala que se encuentra al norte
        north: 2, // pasillo
        // incluye la id de la sala que se encuentra al sur
        south: 0, // pueblo
        // incluye la id de la sala que se encuentra al oeste
        west: null,
        // incluye la id de la sala que se encuentra al este
        east: null,
        // nombre de la imagen que se usara para cada ubicacion
        img: "/assets/images/game/rooms/entrada.png",
      },
      // pueblo
      {
        id: 0,
        monsterProb: 0.0,
        isShop: false,
        name: "Poblado de humanos",
        description:
          "Torres góticas se alzan entre relámpagos; el viento arrastra agua helada, y el musgo brillante cruje bajo los pies en el sendero rocoso.",
        north: 1, // entrada
        south: null,
        west: null,
        east: null,
        img: "/assets/images/game/rooms/pueblo.png",
      },
      // pasillo
      {
        id: 2,
        monsterProb: 0.25,
        isShop: false,
        name: "Pasillo principal",
        description:
          "Las columnas de piedra húmeda sostienen un techo arqueado; el aire es espeso, huele a hollín, y cada paso retumba con eco profundo en la penumbra.",
        north: 3, // sala del tesoro
        south: 1, // entrada
        west: 4, // tienda
        east: 5, // sala con cadenas
        img: "/assets/images/game/rooms/pasillo.png",
      },
      // sala del tesoro
      {
        id: 3,
        monsterProb: 0.7,
        isShop: false,
        name: "Cueva con un cofre del tesoro",
        description:
          "Un cofre abierto brilla entre sombras; el oro irradia calor suave, y el aire huele a cuero y piedra húmeda, con ecos apagados desde lo alto.",
        north: null,
        south: 2, // pasillo
        west: null,
        east: null,
        img: "/assets/images/game/rooms/tesoro.png",
      },
      // tienda
      {
        id: 4,
        monsterProb: 0.05,
        isShop: true,
        name: "Tienda del alquimista",
        description:
          "Lámparas cálidas iluminan libros y frascos; el aire mezcla cera, tierra y papel viejo, y el suelo cruje con cada movimiento entre raíces ocultas.",
        north: null,
        south: null,
        west: null,
        east: 1, // pasillo
        img: "/assets/images/game/rooms/shop.png",
      },
      // sala con cadenas
      {
        id: 5,
        monsterProb: 0.9,
        isShop: false,
        name: "Sala con cadenas",
        description:
          "Cadenas oxidadas cuelgan del techo; el suelo refleja luz roja y emite calor pegajoso, mientras el silencio vibra con goteos metálicos.",
        north: null,
        south: null,
        west: 1, // pasillo
        east: null,
        img: "/assets/images/game/rooms/room.png",
      },
    ],
    enemies: [
      // dragon
      {
        // nombre del enemigo
        name: "Dragón dorado",
        // determina si es un enemigo mayor (boss) o menor
        isBoss: true,
        // descripcion del enemigo
        description: "",
        // salud que tiene el enemigo
        health: 340,
        // fuerza del enemigo
        strength: 19,
        // defensa del enemigo
        defence: 13,
        // nombre de la imagen que se usara para cada enemigo
        img: "/assets/images/game/enemies/dragon.png",
      },
      // orco
      {
        name: "Orco",
        isBoss: false,
        description: "",
        health: 90,
        strength: 17,
        defence: 16,
        img: "/assets/images/game/enemies/orc.png",
      },
      // gobin
      {
        name: "Goblin",
        isBoss: false,
        description: "",
        health: 20,
        strength: 11,
        defence: 9,
        img: "/assets/images/game/enemies/goblin.png",
      },
    ],
  },
};

// funcion para mostrar todos los atributos del heroe
function mostrarHeroe() {
  return (
    "Nombre: " +
    defaultGameState.player.name +
    "<br/>Puntos de salud: " +
    defaultGameState.player.health +
    "<br/>Fuerza: " +
    defaultGameState.player.strength +
    "<br/>Bonus de fuerza: " +
    defaultGameState.player.strengthBonus +
    "<br/>Defensa: " +
    defaultGameState.player.defense +
    "<br/>Bonus de defensa: " +
    defaultGameState.player.defenseBonus +
    "<br/>Ubicación: " +
    defaultGameState.player.currentRoom +
    "<br/>Dinero: " +
    defaultGameState.player.gold +
    "<br/>Pociones: " +
    defaultGameState.player.potions
  );
}
// funcion para mostrar todos los atributos de un enemigo elegido aleatoriamente
function mostrarEnemigoRandom() {}

// funcion para mostrar todos los atributos de una habitacion elegida aleatoriamente
function mostrarSalaRandom() {
  // string para guardar todos los datos
  let datosSala = "";
  // n es un numero entero aleatorio entre 0 y el numero total de objetos dentro del array rooms
  // se usara para elegir un array aleatorio dentro de rooms
  n = parseInt(Math.random() * defaultGameState.map.rooms.length);

  // incluye id, probabilidad de enemigo y tienda
  datosSala +=
    "Id: " +
    defaultGameState.map.rooms[n].id +
    "<br/>Probabilidad de aparición de enemigo: " +
    defaultGameState.map.rooms[n].monsterProb * 100 + // para que aparezca como porcentaje
    "%<br/>Tienda: ";
  // comprueba si es una tienda o no con el atributo isShop e incluye si o no
  if (defaultGameState.map.rooms[n].isShop) {
    datosSala += "sí";
  } else {
    datosSala += "no";
  }

  // incluye nombre y descripcion
  datosSala +=
    "<br/>Nombre: " +
    defaultGameState.map.rooms[n].name +
    "<br/>Descripción: " +
    defaultGameState.map.rooms[n].description;

  // incluye datos de las salas adyacentes
  datosSala += mostrarNombreSalaAdy(defaultGameState.map.rooms[n].id);

  return datosSala;
}

// funcion para mostrar el nombre de las salas adyacentes a una sala concreta segun su id
function mostrarSalasAdyacentes(id) {
  // string para guardar los datos de la sala
  datosSalasAdy = "";
  n = posicionSalaSegunId(id);
  let idSalaAdy = "";

  // comprobacion de las salas adyacentes
  datosSalasAdy +=
    "<br/>Sala al norte: " +
    mostrarNombreSalaAdy(defaultGameState.map.rooms[n].north) +
    "<br/>Sala al sur: " +
    mostrarNombreSalaAdy(defaultGameState.map.rooms[n].south) +
    "<br/>Sala al oeste: " +
    mostrarNombreSalaAdy(defaultGameState.map.rooms[n].west) +
    "<br/>Sala al este: " +
    mostrarNombreSalaAdy(defaultGameState.map.rooms[n].east);

  /* 
  la funcion creo que se podria hacer segun la posicion del array de una habitacion dentro del array de rooms en vez de segun su id
  y se podria prescindir del bucle for y la comprobacion if (el que se usa en posicionSalaSegunId); 
  sacando north, south, west y east con defaultGameState.map.rooms[i].north/south...
  pero preferi hacerlo asi para usar el id como identificador para ser mas preciso
  */
}

// funcion que escribe el nombre de una habitacion segun su id, y si el id es vacio escribe "ninguna"
// esta diseñada especificamente para usarla en mostrarSalasAdyacentes() y evitar repetir codigo en esta
function mostrarNombreSalaAdy(id) {
  let nombreSalasAdy = "";
  if (id != null) {
    nombreSalasAdy += defaultGameState.map.rooms[posicionSalaSegunId(id)].name;
  } else {
    nombreSalasAdy += "ninguna";
  }
  return nombreSalasAdy;
}

// la funcion busca en rooms un array con la id que se pase al llamarla y devuelve la posicion que ocupa el array
function posicionSalaSegunId(id) {
  // el bucle recorre el array rooms para buscar que array dentro tiene la id que se ha pasado al llamar la funcion
  for (i = 0; i < defaultGameState.map.rooms.length; i++) {
    if (defaultGameState.map.rooms[i].id == id) {
      return i;
    }
  }
}

// console.log(mostrarNombreSalaAdy(2));
