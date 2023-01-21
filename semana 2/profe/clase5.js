const titulo = document.querySelector('h1');
// titulo.style.color = 'red';
titulo.className = 'red border';

for (let item of document.querySelectorAll('h2')) {
    item.innerText = item.innerText.toUpperCase();
    item.innerText += ':';
    item.className = 'red';
    item.style.border = 'solid 1px gray';
    // item.style.textTransform = 'uppercase';
}

function intercambiarTamaño() {
    document.querySelector('body').classList.toggle('body-small');

    // if (document.querySelector('body').classList.contains('body-small')) {
    //     document.querySelector('body').classList.remove('body-small');
    // } else {
    //     document.querySelector('body').classList.add('body-small');
    // }
}

let valorDolar = {
    valorCompra: 156.1,
    valorVenta: 159.3
};

function actualizarValorDolar() {
    document.querySelector('.dolar').innerText =
        `El valor del dólar a la fecha es para la compra: ${valorDolar.valorCompra} y para la venta: ${valorDolar.valorVenta}`;
}

actualizarValorDolar();


/* -------------------------------------------------------------------------- */
/*                          CONSIGNA MESA DE TRABAJO                          */
/* -------------------------------------------------------------------------- */
// 1- Desarrollar la función a continuacion para que el usuario elija el tema del sitio.
// 2- Debemos preguntarle al usuario mediante un confirm si desea usar el modo oscuro.
// 3- Si el usuario confirma debemos aplicar la clase "dark" al "sitio", si cancela debe quedar en modo claro.
// 4- A su vez, si está en modo oscuro, el texto del boton debe decir "Cambiar a modo claro 🌞". De lo contrario, si está en modo claro debeb decir "Cambiar a modo oscuro 🌛"

/* function elegirTema() {
    let cambiarTema = confirm("Desea cambiar el tema?");

    if(cambiarTema){
        document.querySelector("body").classList.toggle("dark");
        document.querySelector(".tema button").innerText = "Cambiar a modo claro 🌞";
    } else{
        document.querySelector(".tema button").innerText = "Cambiar a modo oscuro 🌛";
    }

elegirTema();    
 */



function elegirTema() {
    

    document.querySelector("body").classList.toggle("dark");
    document.querySelector(".tema button").style.cursor = "pointer";

    if(document.querySelector('body').classList.contains('dark')){

        document.querySelector(".tema button").innerText = "Cambiar a modo claro 🌞";
        document.querySelector(".tema button").style.backgroundColor = "white";
        document.querySelector(".tema button").style.color = "black";
    } else{
        document.querySelector(".tema button").innerText = "Cambiar a modo oscuro 🌛";
        document.querySelector(".tema button").style.backgroundColor = "black";
        document.querySelector(".tema button").style.color = "white";
    }
}