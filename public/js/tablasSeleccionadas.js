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
