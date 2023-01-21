const imagenes = document.querySelectorAll('.noticias article img');

let contador = 1;
for (let img of imagenes) {
    img.setAttribute('alt', `Imagen nro: ${contador}.`);
    contador++;
}

// Agregamos un texto al 'footer'
const footer = document.querySelector('footer');
const parrafo = document.createElement('p');
parrafo.appendChild(document.createTextNode('Esto es un texto de prueba con appendChild.'));
footer.appendChild(parrafo);

const className = 'red';
footer.innerHTML += `<p class='${className}'>Esto es un texto de prueba con template literal.</p>`;


const listadoNoticias = [{
        titulo: "La emoción de Lisandro Martínez",
        epigrafe: "La increíble ovación de los hinchas de Manchester United al defensor argentino: 'Quise llorar'.",
        foto: "./img/futbol.webp"
    },
    {
        titulo: "La renuncia de Liz Truss",
        epigrafe: "Boris Johnson interrumpió sus vacaciones y vuelve a sonar fuerte entre los posibles sucesores.",
        foto: "./img/boris.webp"
    },
    {
        titulo: "Los motivos",
        epigrafe: "Una escuela argentina fue elegida entre las diez mejores del mundo.",
        foto: "./img/escuela.webp"
    }
];

/*const main = document.querySelector('main');

for (let item of listadoNoticias) {
    const articulo = document.createElement('article');

    if (item.titulo) {
        const titulo = document.createElement('h2');
        titulo.innerText = item.titulo.toUpperCase();
        articulo.appendChild(titulo);
    }

    const imagen = document.createElement('img');
    imagen.setAttribute('src', item.foto);
    articulo.appendChild(imagen);

    const parrafo = document.createElement('p');
    parrafo.innerText = item.epigrafe;
    articulo.appendChild(parrafo);

    main.appendChild(articulo);
} */


// 1- Debemos reutilizar el "listadoNoticias" para lograr el mismo resultado de crear los nodos dinamicamente.
// 2- La diferencia ahora radica en utilizar un bucle y dentro del mismo utilizar la notación de Plantillas Literales (con comillas invertidas -> ``)
// 3- El resultado debe ser el mismo que en el caso anterior pero vamos a implementar el método innerHTML para insertar la plantilla creada.

const main = document.querySelector('main');
function renderizandoElementos() {
    // desarrollar la consigna aquí
    
    for (let item of listadoNoticias) {

        main.innerHTML += 
        `
        <article>
            <h2>${item.titulo}</h2>
            <img src="${item.foto}">
            <p>${item.epigrafe}</p>
        </article>
        `
    }

}
renderizandoElementos();