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

