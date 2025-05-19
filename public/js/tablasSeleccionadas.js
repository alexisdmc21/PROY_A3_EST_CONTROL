/*Actividad 3: IF + FOR - Tablas pares o impares

Enunciado:
Crea un programa en un archivo .js externo que le pida al usuario si quiere ver las tablas de multiplicar de números pares o impares entre 1 y 10.
Usa if para decidir qué tipo mostrar, y for para imprimir las tablas del 1 al 10 según lo que el usuario elija.

Ejemplo:

Si el usuario escribe "pares", mostrar tablas del 2, 4, 6, 8, 10.
Si el usuario escribe "impares", mostrar tablas del 1, 3, 5, 7, 9.*/

let tipo = prompt("Desea ver las tablas de multiplicar de números 'pares' o 'impares'");

tipo = tipo.toLowerCase();


if (tipo === "pares" || tipo === "impares") {
    for (let i = 1; i <= 10; i++) {

        if (tipo === "pares" && i % 2 === 0) {
            console.log(`Tabla del ${i}`);
            for (let j = 1; j <= 10; j++) {
                console.log(`${i} x ${j} = ${i * j}`);
            }
        }

        else if (tipo === "impares" && i % 2 !== 0) {
            console.log(`Tabla del ${i}`);
            for (let j = 1; j <= 10; j++) {
                console.log(`${i} x ${j} = ${i * j}`);
            }
        }
    }
} else {
    alert("Elegir entre 'pares' o 'impares'");
}
