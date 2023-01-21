const objeto = { nombre: 'Nombre', apellido: 'Apellido', edad: 36 };
const { nombre, apellido } = objeto;
console.log(nombre);
console.log(apellido);

let [a, b, ...rest] = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(a);
console.log(b);
console.log(rest);


// const arrayData = ['a', 'b', 'c', 'd', 'e'];
// const { 0: first, [arrayData.length - 1]: last, ...rest } = arrayData;
// console.log(first);
// console.log(last);
// console.log(rest);

const array = ['Emiliano', 'Gonzalo', 'Paula', 'Paula'];
const copia = array.map(item => item.toUpperCase());
// const copia = array.map(funcionParaMap);
console.log(copia);

function funcionParaMap(item) {
    return item.toUpperCase();
}


const array2 = [{ nombre: 'Emiliano', id: 0 },
    { nombre: 'Gonzalo', id: 1 },
    { nombre: 'Paula', id: 2 },
    { nombre: 'Paula', id: 3 }
];

const copia2 = array2.map(item => {
    return {
        nombre: item.nombre,
        nombreMayuscula: item.nombre.toUpperCase(),
        id: item.id + 1
    }
});
console.log(copia2);

/*----------------------------- MESA DE TRABAJO ---------------------------- */
// 1. Levantar el objeto desde el localStorage con key=LISTADO
// 2. Devolver un array con nombre, apellido y edad de las personas mayores a 18 años (hay que usar map y filter)
// 3. Volver a guardarlo en localStorage bajo el mismo key
// 4. Mostrar por consola el resultado, asegurándose de que sea el requerido


localStorage.setItem('LISTADO',
    '[{"nombre":"Pedro","apellido":"Gomez","nacimiento":"11/05/1998"},{"nombre":"Joaquin","apellido":"Sotto","nacimiento":"21/10/1985"},{"nombre":"Gabriela","apellido":"Perez","nacimiento":"02/02/2010"},{"nombre":"Agustina","apellido":"Estevez","nacimiento":"21/08/1986"},{"nombre":"Paola","apellido":"Serra","nacimiento":"22/09/2009"},{"nombre":"Juan","apellido":"Coprez","nacimiento":"12/04/1977"}]')


function devolverArray(){
    //de JSON a JS
    const prueba = JSON.parse(localStorage.getItem('LISTADO'));
    return prueba;    
}

//funcion para calcular edad a partir de fecha de nacimiento
function funcionEdad(fecha) {
    let cumpleaniosArray = fecha.split("/");
    let cumpleaniosFecha = new Date(cumpleaniosArray[2], cumpleaniosArray[1] - 1, cumpleaniosArray[0]);
    let edadDifMes = Date.now() - cumpleaniosFecha.getTime();
    let fechaEdad = new Date(edadDifMes);
    return Math.abs(fechaEdad.getUTCFullYear() - 1970);
}


const copiaAnios = devolverArray()
    //filtrar los mayores de 18
    .filter(item2 => funcionEdad(item2.nacimiento)>18)

    //armar un objeto nuevo de los filtrados con filter
    .map(item => {
        return{
                nombre: item.nombre,
                apellido:item.apellido,
                edad: funcionEdad(item.nacimiento)
        }
    })

//guardar el objeto nuevo(filtrado) con la misma key, con stringify vuelve a ser JSON
localStorage.setItem('LISTADO', JSON.stringify(copiaAnios));
console.log(copiaAnios);
    