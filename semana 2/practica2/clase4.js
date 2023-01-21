const tree = [
    [
        ['1A'],
        [
            ['2A', '2B', '2C'],
            ['3A', '3B'],
            ['4A', ['5A', '5B'], '4B']
        ]
    ],
    [
        ['6A', '6B', '6C', '6D', '6E']
    ],
    ['7A', '7B']
]



// console.log(tree[0][1][1]);


let resultado = document.querySelectorAll('h2');

// Recorre elementos de un array
for (let item of resultado) {
    console.log(item.innerText);
}

// Recorre elementos de un array - recorre 'n' veces
for (let i = 0; i < resultado.length; i++) {
    let item = resultado[i];
    console.log(item.innerText);
}

// Recorre atributo de un objeto
let objeto = { atributo1: 'valor1', atributo2: 'valor' };
for (let atributo in objeto) {
    console.log(objeto[atributo]);
}



/* -------------------------------------------------------------------------- */
/*                          CONSIGNA MESA DE TRABAJO                          */
/* -------------------------------------------------------------------------- */
// 1 - Escribir un selector para cada elemento del sitio.
// 2 - Plasmarlo en un diagrama de árbol como la consigna: https://docs.google.com/document/d/15nGvKkEcbrRgwqV50ISh0QYZ_TO67vmWQaLfNpUxqjs/preview