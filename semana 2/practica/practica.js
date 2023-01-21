//Con .querySelector, seleccionamos la clase indicada (querySelector solo captura la primer coincidencia, si queremos capturar todos, querySelectorAll)
let compras = document.querySelector(".compras")

//AL usar += lo que sigue, se agrega a la lista anterior
compras.innerHTML += "Mayonesa";


//Al solo tener el igual, todo el texto anterior cambiar por lo que se le asigna
document.querySelector(".compras").innerText += "Tomate"
document.querySelector(".compras").innerText = "Pan, Queso, Lechuga"



//.style sirve para modificar el estilo
compras.style.color = "crimson"


//Templates strings
const nombre = "Macarena";

const miTemplate = `Mi nombre es ${nombre}`;

console.log(miTemplate);

/*const template = `<h1> Hola Mundo!</h1>`;

const body = document.getElementById("body");
body.innerText = template;
body.innerHTML = template;*/

function escribirHTML(titulo,texto){
    const body = document.getElementById("body");
    const miTemplate = `
    <h1>${titulo}</h1>
    <p>${texto}</p>
    `;

    body.innerHTML += miTemplate
}


escribirHTML("Hola","Ejemplo de uso")



let confirmaCambios = confirm("Querés cambiar el fondo de la lista de compras?");

if (confirmaCambios){
    compras.style.backgroundColor = "black";
    compras.style.color = "white";
}


let tituloCompras = document.querySelector("h3")
tituloCompras.innerHTML = "Compras"
console.log( tituloCompras.classList);
tituloCompras.classList.add("tituloLista")
tituloCompras.classList.remove("tituloLista")
tituloCompras.classList.toggle("tituloLista") //lo agrega si no está, lo elimina si ya está



