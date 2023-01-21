albumesFamosos.forEach((element, index) => {
    // console.log(index);
});

albumesFamosos.forEach(unaFuncion);

function unaFuncion(element, index) {
    // console.log(element);
}

for (let index = 0; index < albumesFamosos.length; index++) {
    let element = albumesFamosos[index];
}

let counter = 0;
setInterval(() => {
    console.log('setInterval cada 1 segundo ' + counter);
    counter++;
}, 1000 * 60);

function pruebaSetTimeout() {
    setTimeout(() => {
        // console.log('setTimeOut 3 segundos');
    }, 3000);
}

pruebaSetTimeout();


const planesMensuales = [{
        tipo: "Básico",
        costo: 300,
        descripcion: "Podes escuchar música sin límites todo el mes."
    },
    {
        tipo: "Dúo",
        costo: 450,
        descripcion: "Música ilimitada para vos y alguien más."
    },
    {
        tipo: "Familiar",
        costo: 600,
        descripcion: "El mejor plan, hasta un total de 5 miembros."
    },
];

let contador = 0;

const footer = document.querySelector('footer');

window.addEventListener('load', function() {
    const interval = setInterval(() => {

        // Con este cálculo vamos recorriendo los elementos del array. Cuando llega al última, va al 1ro
        let posicion = contador % planesMensuales.length;
        let plan = planesMensuales[posicion];

        footer.innerHTML = `
            <p>Plan: ${plan.tipo}
                <strong>
                    ${plan.costo}
                </strong>
            </p>
            <p>
                ${plan.descripcion}
            </p>`;

        contador++;

        // Forma alternativa
        // if (contador == planesMensuales.length) {
        //     contador = 0;
        // }
    }, 3000);

    // añadimos la escucha del doble click en el footer para frenar el intervalo
    footer.addEventListener('dblclick', function() {
        clearInterval(interval);
        console.log("---> Frenamos el intervalo");
    })
});



/* -------------------------------------------------------------------------- */
/*                               MESA DE TRABAJO                              */
/* -------------------------------------------------------------------------- */
// Vamos a utilizar el setTimeout para preguntarle al usuario despues de unos segundos.
// 1- Una vez cargada la página y pasados 12 segundos debemos preguntarle al usuario si desea
// conocer más música (podemos usar un confirm).
// 2- Si el usuario confirma debemos abrir una nueva pestaña en -> https://open.spotify.com/
// 3- Si el usuario cancela debemos agregar un parrafo dentro del div '#perfil'(sin eliminar nada dentro)
// 4- El parrafo agregado debe ser de color verde y decir: "Usuario oficial de Spotifront"
// 5- Por ultimo, si ese parrafo es clickeado, debe mostrar una alerta al usuario que diga: "Gracias por confiar en nosotros."