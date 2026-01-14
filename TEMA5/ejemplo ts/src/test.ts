let firstName: string;
let z: unknown = 1; // define la variable de cualquier tipo pero no se sabe cual es
let z1: any; // puede cambiar de tipo

z = "hola" as String;
z = <string>"hola";

let b: undefined; // tipo de js

let array: String[] = [];
array.push("Juan");
// array.push(1);
