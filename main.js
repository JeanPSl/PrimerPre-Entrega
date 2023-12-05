// Juego del piedra papel o tijeras 

let volverATirar = true;
let valueOpcionMaquina;
let resultado;

while (volverATirar) {
    let opcionUsuario1;
    let opcionUsuario2;

    if (confirm("Desea jugar contra un amigo?")) {
        do {
            opcionUsuario1 = ingresarOpcion("Ingrese que opcion desea tirar \n1.- PIEDRA\n2.- PAPEL\n3.- TIJERA");
        } while (!opcionEsCorrecta(opcionUsuario1));

        do {
            opcionUsuario2 = ingresarOpcion("Ingrese que opcion desea tirar \n1.- PIEDRA\n2.- PAPEL\n3.- TIJERA");
        } while (!opcionEsCorrecta(opcionUsuario2));

        validarOpcionSeleccionada(opcionUsuario1, opcionUsuario2);
    } else {
        alert("Jugaras contra la maquina");

        do {
            opcionUsuario1 = ingresarOpcion("Ingrese que opcion desea tirar \n1.- PIEDRA\n2.- PAPEL\n3.- TIJERA");
        } while (!opcionEsCorrecta(opcionUsuario1));

        validarOpcionSeleccionada(opcionUsuario1, null);
        alert("La maquina tiro: " + valueOpcionMaquina);
    }

    alert(resultado);

    volverATirar = confirm("Desea volver a jugar?");
}

function opcionEsCorrecta(opcionElegida) {
    return opcionElegida === 1 || opcionElegida === 2 || opcionElegida === 3;
}

function ingresarOpcion(mensaje) {
    return Number(prompt(mensaje).toLowerCase().trim());
}

function validarOpcionSeleccionada(opcionUsuario1, opcionUsuario2) {
    let valueOpcionUser1;
    let valueOpcionUser2;

    switch (opcionUsuario1) {
        case 1:
            valueOpcionUser1 = "piedra";
            break;
        case 2:
            valueOpcionUser1 = "papel";
            break;
        case 3:
            valueOpcionUser1 = "tijera";
            break;
    }

    if (opcionUsuario2 !== null) {
        switch (opcionUsuario2) {
            case 1:
                valueOpcionUser2 = "piedra";
                break;
            case 2:
                valueOpcionUser2 = "papel";
                break;
            case 3:
                valueOpcionUser2 = "tijera";
                break;
        }
    } else {
        let valorRandom = parseInt(Math.random() * 3 + 1);

        switch (valorRandom) {
            case 1:
                valueOpcionMaquina = "piedra";
                break;
            case 2:
                valueOpcionMaquina = "papel";
                break;
            case 3:
                valueOpcionMaquina = "tijera";
                break;
        }

        return validarGanador(valueOpcionUser1, valueOpcionMaquina);
    }

    return validarGanador(valueOpcionUser1, valueOpcionUser2);
}

function validarGanador(opcionUser1, opcionUser2) {
    if (opcionUser1 === opcionUser2) {
        resultado = "Empate";
    } else if (
        (opcionUser1 === "piedra" && opcionUser2 === "tijera") ||
        (opcionUser1 === "papel" && opcionUser2 === "piedra") ||
        (opcionUser1 === "tijera" && opcionUser2 === "papel")
    ) {
        resultado = "Gana el usuario 1";
    } else {
        resultado = "Gana el usuario 2";
    }
}