// Gana el primer jugador que llega a 2 puntos
const CANTIDAD_INTENTOS_PARA_GANAR = 2;

function empezarJuego() {
    let puntajes = {
        usuario: 0,
        cpu: 0
    };

    do {
        const resultado = compararJugadas();

        if (resultado == 'G') {
            puntajes.usuario++;
        }

        if (resultado == 'P') {
            puntajes.cpu++;
        }
    } while (puntajes.usuario < CANTIDAD_INTENTOS_PARA_GANAR || puntajes.cpu < CANTIDAD_INTENTOS_PARA_GANAR);
    mostrarGanador(puntajes.usuario);
}

function mostrarGanador(usuario) {
    // condicion?true:false;

    console.log(usuario == 2 ? 'ganaste' : 'perdiste');

    // if (usuario == 2) {
    //     console.log('Ganaste');
    // } else {
    //     console.log('Perdiste');
    // }
}

empezarJuego();

/* -------------------------------------------------------------------------- */
/*                          CONSIGNA MESA DE TRABAJO                          */
/* -------------------------------------------------------------------------- */
// 1- Modificar el objeto puntajes para poder contabilizar los empates tambien.
// 2- Modificar el bucle para poder sumar tambien la cantidad de empates.
// 3- Mostrar en cada partida el resultado al usuario.
// 4- Mostrar finalmente la cantidad de partidas jugadas y que sepa cuantas ganó, perdió o empató durante el juego.