function funcionDeclaradaNominal(parametro1, parametro2) {
    return parametro1 + parametro2;
}

let funcionExpresadaNominal = (parametro1, parametro2) => {
    return parametro1 + parametro2;
}

funcionExpresadaNominal(1, 2);

// Funciones flecha
let funcionExpresadaNominal1 = parametro1 => console.log(parametro1);
let funcionExpresadaNominal2 = () => console.log('Algo');
let funcionExpresadaNominal3 = (parametro1, parametro2) => parametro1 + parametro2;

console.log(funcionDeclaradaNominal(1, 2));
console.log(funcionExpresadaNominal(2, 3));

function mostrarMensaje(emi) {
    console.log("Se hizo click!", emi);
}

const button = document.querySelector('button');

/* // Funcion expresada anónima
button.addEventListener('click', emi => console.log('Algo nuevo', emi))
button.onclick = emi => console.log('Algo nuevo', emi);

// Funcion nominal declarada
button.addEventListener('click', mostrarMensaje);
button.onclick = mostrarMensaje;

// funcion anónima declarada
button.addEventListener('click', function(emi) {
    console.log('nuevo', emi);
});
button.onclick = function(emi) {
    console.log('nuevo', emi);
};
 */

function agregarQuitarFavorito() {
    const botones = document.querySelectorAll('.fa-heart');

    for (let boton of botones) {
        boton.addEventListener('click', function(event) {
            console.log(event);

            // Filtramos el album según el Id del elemento
            // for (let album of albumesFamosos) {
            //     if (album.id == boton.id) {
            //         album.like = !album.like;
            //     }
            // }

            console.log(albumesFamosos.filter(x => x.like == true));
            let album = albumesFamosos.filter(x => x.id == boton.id)[0];
            album.like = !album.like;

            renderizarAlbumes(albumesFamosos);
            agregarQuitarFavorito();
        });
    }
}

agregarQuitarFavorito();

/* -------------------------------------------------------------------------- */
/*                         [5] FUNCION: Eliminar album                        */
/* -------------------------------------------------------------------------- */
// Debemos desarrollar la funcion de eliminar un album. Para esto le vamos a 
// preguntar al usuario cual quiere eliminar.
// Vamos a seguir las indicaciones que nos permiten lograrlo utilizando eventos.
// 1- Hay que escuchar el evento de 'keydown' para detectar cuando el usuario
// presiona la tecla f
// 2- Una vez que detectamos la tecla, debemos mostrarle un prompt al usuario
// para que ingrese el nombre del album que desea eliminar
// 3- Podemos buscar la posicion del almbum buscado en el array con la funcion .findIndex()
// 4- Si la busqueda nos da un resultado válido, procedemos a borrar el objeto del array
// 5- Acto seguido debemos llamar a las funciones de renderizar y marcar favorito para que sean nuevamente aplicadas.


function eliminarAlbum() {
    // desarrollar la función 👇
    document.addEventListener("keydown", (event) => {
        
        if (event.key === "f"){
            let albumEliminar = prompt("Ingrese el nombre del album a eliminar")
            let indexEliminar = albumesFamosos.findIndex(album => album.nombre == albumEliminar) //encuentra el indice del album que se ingresó en el prompt
            
            if(indexEliminar != -1){ //si fuera = a -1 es porque no encontró el album en el array
                albumesFamosos.splice(indexEliminar, 1) //splice elimina desde el indice ingresado (indexEliminar), la cantidad ingresada despues de la , (1)
            }

            renderizarAlbumes(albumesFamosos) //volver a renderizar para ver la lista de albumes sin el que falta
            

            
        }

        
    })

}
eliminarAlbum();

renderizarAlbumes(albumesFamosos);

agregarQuitarFavorito();