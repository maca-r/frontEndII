// Gana el primer jugador que llega a 2 puntos
const CANTIDAD_INTENTOS_PARA_GANAR = 2;

function empezarJuego() {
    let puntajes = {
        usuario: 0,
        cpu: 0,
        empates: 0,
        contPartidas: 0
    };

    do {
        const resultado = compararJugadas();

        if (resultado == 'G') {
            puntajes.usuario++;
            alert("Ganaste la partida")
            console.log("Usuario: " + puntajes.usuario + " CPU: " + puntajes.cpu)

        }

        else if (resultado == 'P') {
            puntajes.cpu++;
            alert("La CPU gana la partida")
            console.log("Usuario: " + puntajes.usuario + " CPU: " + puntajes.cpu)
        }
        else {
            puntajes.empates++
            alert("Nadie gana, hubo empate")
            console.log("Usuario: " + puntajes.usuario + " CPU: " + puntajes.cpu)
        }

        puntajes.contPartidas++

    } while (puntajes.usuario < CANTIDAD_INTENTOS_PARA_GANAR && puntajes.cpu < CANTIDAD_INTENTOS_PARA_GANAR);
    
    alert("Se jugaron " + puntajes.contPartidas + " veamos quien es el ganador")
    if (puntajes.usuario >= CANTIDAD_INTENTOS_PARA_GANAR) {
        alert("Felicidades le ganaste a la CPU: " + puntajes.usuario + ":" + puntajes.cpu + " y empataron " + puntajes.empates)
    } else {
        alert("Intenta la proxima ves!! perdiste contra la CPU: " + puntajes.usuario + ":" + puntajes.cpu + " y empataron " + puntajes.empates)
    } 
    
    mostrarGanador(puntajes.usuario, puntajes.cpu);
    
}

function mostrarGanador(usuario, cpu) {
    // condicion?true:false;
    // console.log(usuario == 2 ? 'ganaste' : 'perdiste');

    if (usuario == 2) {
        console.log('Ganaste');
    } else if (cpu == 2){
        console.log('Perdiste');
    } else{
        console.log('Empate');
    }
}


empezarJuego();



/* -------------------------------------------------------------------------- */
/*                          CONSIGNA MESA DE TRABAJO                          */
/* -------------------------------------------------------------------------- */
// 1- Modificar el objeto puntajes para poder contabilizar los empates tambien. - 
// 2- Modificar el bucle para poder sumar tambien la cantidad de empates. - 
// 3- Mostrar en cada partida el resultado al usuario.
// 4- Mostrar finalmente la cantidad de partidas jugadas y que sepa cuantas ganó, perdió o empató durante el juego.

