console.log("Prueba");

// no podemos cambiarle el valor
const UNA_VARIABLE = 'unvalor';

// const datoIngresado = prompt('Ingresá el valor 33');
// if (datoIngresado == 33) {
//     alert('El dato ingresado es correcto.');
// } else {
//     alert('El dato ingresado es incorrecto.');
// }

// let nombres = ['Pablo', 'Cata', 'Emiliano', 'Juan'];
// for (let i = 0; i < nombres.length; i++) {
//     console.log(nombres[i]);
// }

// let contador = 0;
// while (nombres[contador] != 'Emilano' && contador < nombres.length) {
//     contador++;
// }
// console.log(contador < nombres.length ? 'Se encontró' : 'No se encontró');

// let datoIngresado;
// do {
//     datoIngresado = prompt('Ingresá el valor 33')
// } while (datoIngresado != 33);
// console.log(datoIngresado);


function iniciarJuego() {
    const nombre = prompt('Ingresá tu nombre');
    alert('Gracias por jugar ' + nombre + '. ¡Mucha suerte!');
    return nombre;
}


/* -------------------------------------------------------------------------- */
/*                          CONSIGNA MESA DE TRABAJO                          */
/* -------------------------------------------------------------------------- */
// 1- Modificar la funcion de iniciarJuego(), validar si ingresa un dato válido como nombre.
// 2- Si no ingresa un texto, o tiene menos de 3 caracteres debemos volverle a pedir que lo ingrese.
// 3- Finalmente el nombre devuelto debe estar todo en mayúsculas.