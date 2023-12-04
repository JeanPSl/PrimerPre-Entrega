// Juego del piedra papel o tijeras 

let volverATirar = true;

while (volverATirar) {
    alert("Ingresar opcion PIEDRA, PAPEL O TIJERA")

    let opcionUsuario1
    do {
        opcionUsuario1 = ingresarOpcion("Ingrese que opciones desea tirar");
    } while (!opcionEsCorrecta(opcionUsuario1));

    let opcionUsuario2
    do {
        opcionUsuario2 = ingresarOpcion("Ingrese que opciones desea tirar");
    } while (!opcionEsCorrecta(opcionUsuario2));

    let resultado = validarGanador(opcionUsuario1, opcionUsuario2)
    
    alert(resultado)

    volverATirar = confirm("Desea volver a jugar?")
}

function opcionEsCorrecta (opcionElegida) {

    if (opcionElegida !== "piedra" && opcionElegida !== "papel" && opcionElegida !== "tijera") {
        return false
    }
    return true
}

function ingresarOpcion (mensaje) { 
    return prompt(mensaje).toLowerCase().trim()
}

function validarGanador (opcionUsuario1, opcionUsuario2) {

    if (opcionUsuario1 === opcionUsuario2) {
        return "Empate";
    } else if (
        (opcionUsuario1 == "piedra" && opcionUsuario2 == "tijera") ||
        (opcionUsuario1 == "papel" && opcionUsuario2 == "piedra") ||
        (opcionUsuario1 == "tijera" && opcionUsuario2 == "papel")
    ) {
        return "Gana el usuario 1";
    } else {
        return "Gana el usuario 2";
    }
}