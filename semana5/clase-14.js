let unObjeto = [{ "a": "algo", "b": "algo nuevo" }, { "a": "algo 2", "b": "algo nuevo 2" }]
console.log(unObjeto[0].a);
console.log(typeof unObjeto);
console.log(unObjeto);

let unJson = JSON.stringify(unObjeto);
console.log(unJson);
console.log(unJson[0].a); // No funciona
console.log(typeof unJson);

let unObjetoDeserializado = JSON.parse(unJson);
console.log(unObjetoDeserializado[0].a);
console.log(typeof unObjetoDeserializado);
console.log(unObjetoDeserializado);


window.addEventListener('load', () => {
    const usuario1 = recuperarDatosDelStorage();
    mostrarDatosUsuario(usuario1);
    let fechaIngreso = new Date().toLocaleString();
    localStorage.setItem("ULTIMO_INGRESO", fechaIngreso);
    console.log(localStorage.getItem("ULTIMO_INGRESO"));
    botonCerrarSesion();
});


function recuperarDatosDelStorage() {
    // Obtenemos el usuario del 'localStorage' en formato JSON
    // (tal como lo guardamos en clase 13)
    const usuarioJson = localStorage.getItem('USER');

    // if (usuarioJson == null) {
    //     window.location.href = "./index.html";
    // }

    // Convertimos el JSON a un objeto (lo deserializo)
    const usuario = JSON.parse(usuarioJson);

    // Devolvemos el objeto
    return usuario;
}

function mostrarDatosUsuario(usuario) {
    // usuario es un objeto
    /* console.log(usuario);
    console.log(usuario.email); */

    // capturamos los nodos
    const email = document.querySelector('#email');
    const perfil = document.querySelector('#perfil');

    // pintamos las propiedades del objeto en pantalla
    email.innerText = usuario.email;
    perfil.innerText = usuario.rol;
}


/* ----------------------------- MESA DE TRABAJO ---------------------------- */
/* -------------------------------------------------------------------------- */
/*                     [9] FUNCION: Boton de cerrar sesion                    */
/* -------------------------------------------------------------------------- */
// Ahora vamos a crear elementos en el DOM dinamicamente y le asignaremos a esos elementos la escucha de eventos.
// ☝ La funcion debe ser ejecutada al final del evento Load.
// La idea es crear un boton para cerrar sesión. Entonces necesitamos cumplir los siguientes puntos:
// 1- Crear un elemento <button>
// 2- Que ese botón tenga el texto "Cerrar sesión"
// 3- El boton tiene que tener ciertos estilos:
//     - padding arriba y abajo de 5px y a los costados 20px
//     - color de fondo rojo con transparencia: rgba(255,0,0,0.2)
//     - color de letra rojo
//     - margenes a todos los lados de 20px
//     - ningún borde
//     - cursor de tipo pointer
// 4- Tenemos que agregar el botón en pantalla, adentro del div con la clase 'user', al final del mismo
// 5- El botón debe reaccionar cuando se le hace click
// 6- Mediante el click debe aparecer un cuadro de confirmación que pregunte: "¿Seguro desea cerrar sesión?"
// 7- Si el usuario acepta debe borrar todo el storage y redirigirlo a la pantalla de Login.
// Bonus track: al ingresar al sitio guardar la fecha y hora de ingreso. Al volver a ingresar, mostrar por console.log la última fecha de ingreso
function botonCerrarSesion() {
    //    👇 desarrollar la función
    let divUser = document.querySelector(".user")
    divUser.innerHTML += `
    <button type="submit" class="cierreSesion">
    Cerrar sesión</button> 
    `

    document.querySelector("button.cierreSesion").addEventListener("click", (event) => {
    let confirmacion = confirm("¿Seguro desea cerrar sesión?")

    if (confirmacion){
        localStorage.clear()
        location.replace("index.html")
    }
})
}

//botonCerrarSesion()

/* document.querySelector("button.cierreSesion").addEventListener("click", (event) => {
    let confirmacion = confirm("¿Seguro desea cerrar sesión?")

    if (confirmacion){
        localStorage.clear()
        location.replace("index.html")
    }
}) */

/* const fechaHora = new Date((‘Fecha: ‘+today.getDate(),’/’ +mes,’/’+today.getFullYear());) */

/* const today = new Date();
// obtener la fecha y la hora
const now = today.toLocaleString();
console.log(now); */
