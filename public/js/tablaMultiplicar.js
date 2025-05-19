/*Actividad 2: FOR - Tabla de multiplicar

Enunciado:
Crea un programa en un archivo .js externo que muestre la tabla de multiplicar del número que el usuario escriba, desde el 1 hasta el 12. Usa un bucle for.

Ejemplo de salida si el usuario escribe 5:

5 x 1 = 5 

5 x 2 = 10 

... ...........

5 x 12 = 60*/

let numero = prompt("Ingresa un número del 1 al 12 para ver su tabla de multiplicar");

if (isNaN(numero)) {
    alert("No es un número");
} else
    for (let index = 1; index <= 12; index++) {
        if(numero<1 || numero>12){
            alert("El número no está en el rango de 1 a 12");
            break;
        }else{
        let resultado = numero * index;
        console.log(`${numero} x ${index} = ${resultado}`);
    }
}

