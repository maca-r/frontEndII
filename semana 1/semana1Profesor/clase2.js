function pedirJugada() {
    let jugadaUsuario;
    let condition;
    do {
        jugadaUsuario = parseInt(prompt('Piedra (1) - Papel (2) - Tijera (3)'));
        condition = isNaN(jugadaUsuario) == false &&
            jugadaUsuario >= 1 &&
            jugadaUsuario <= 3;
    } while (!condition);
    //isNaN(jugadaUsuario) || jugadaUsuario < 1 || jugadaUsuario > 3
    return jugadaUsuario;
}

function crearJugadaAleatoria() {
    return parseInt(Math.random() * 3 + 1);
}

function compararJugadas() {
    const jugadaUsuario = pedirJugada();
    const jugadaCompu = crearJugadaAleatoria();
    console.log('jugadaUsuario: ' + jugadaUsuario);
    console.log('jugadaCompu: ' + jugadaCompu);

    if (jugadaUsuario == jugadaCompu) {
        return 'E';
    } else if (jugadaUsuario == 1 && jugadaCompu == 3 ||
        jugadaUsuario == 2 && jugadaCompu == 1 ||
        jugadaUsuario == 3 && jugadaCompu == 2) {
        return 'G';
    } else {
        return 'P';
    }
}




// let random = 0.32;
// console.log(random);
// random = random * 3;
// console.log(random);
// random = random + 1;
// console.log(random);


/* -------------------------------------------------------------------------- */
/*                          CONSIGNA MESA DE TRABAJO                          */
/* -------------------------------------------------------------------------- */
// 1- Crear una función que reciba como parametro un texto (la frase de resultado de la partida).
// 2- La función debe mostrar por consola el resultado de la partida.
// 3- A su vez debe mostrar al usuario una alerta con el resutado de la partida.
// 4- Finalmente, si el resultado fue una derrota debe mostrarle al usuario un mensaje de aliento para desearle suerte en la próxima oportunidad.