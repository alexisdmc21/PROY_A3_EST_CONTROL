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
