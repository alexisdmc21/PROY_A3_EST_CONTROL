/*Actividad 1: IF anidados - Clasificación de edades

Enunciado:
Crea un programa en un archivo .js externo que le pida al usuario (usando prompt) su edad y muestre en la consola una categoría según la siguiente tabla:

Menor de 0: "Edad no válida"
0 a 12 años: "Niño"
13 a 17 años: "Adolescente"
18 a 59 años: "Adulto"
60 años o más: "Adulto mayor"*/

let edad = prompt("Ingresa tu edad");

if (edad < 0) {
    console.log("Edad no válida");
} else {

    if (edad <= 12) {
        console.log("Eres un niño");
    }
    if (edad > 13 && edad <= 17) {
        console.log("Eres un adolescente");
    }
    if (edad > 18 && edad <= 59) {
        console.log("Eres un adulto");
    }
    if (edad >= 60) {
        console.log("Eres un adulto mayor");
    }
}
