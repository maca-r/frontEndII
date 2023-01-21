const URL_BASE = 'https://jsonplaceholder.typicode.com';

function llamarApi(usuario) {
    const configuraciones = {
        method: 'POST',
        body: JSON.stringify(usuario),
        headers: {
            'Content-Type': 'application/json'
        }
    };

    fetch(`${URL_BASE}/posts`, configuraciones)
        .then(respuesta => respuesta.json())
        .then(dato => console.log(dato));
    otraCosa();
}

document.querySelector('button').addEventListener('click', function() {
    const usuario = { nombre: 'prueba desde JS', ciudad: 'BS AS', pais: 'Argentina' };
    // llamarApi(usuario);
    llamarApiConAwait(usuario);
});

async function llamarApiConAwait(usuario) {
    const configuraciones = {
        method: 'POST',
        body: JSON.stringify(usuario),
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const respuesta = await fetch(`${URL_BASE}/posts`, configuraciones);
    const dato = await respuesta.json();
    console.log(dato)
    otraCosa();
}

function otraCosa() {
    console.log('Ejecutando otro proceso');
}


// MESA

// Valiéndose de la documentación y el trabajo en clase, deberán lograr crear un usuario en la API y obtener su token.
// Este proceso puede realizarse a través de la herramienta Postman, o si ya lo prefieren desde un script.
// Documentación: http://todo-api.ctd.academy:3000/

const URL_BASE_TODO = 'http://todo-api.ctd.academy:3000/'

function llamarApiToDo(usuario) {
    const configuraciones = {
        method: 'POST',
        body: JSON.stringify(usuario),
        headers: {
            'Content-Type': 'application/json'
        }
    };

    fetch(`${URL_BASE_TODO}/users`, configuraciones)

        .then(respuestaToDo => respuestaToDo.json())

        .then(datoToDo => console.log(datoToDo));
    
}



async function llamarApiToDoConAwait(usuario) {
    const configuraciones = {
        method: 'POST',
        body: JSON.stringify(usuario),
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const respuestaToDo = await fetch(`${URL_BASE_TODO}/users`, configuraciones);
    const datoToDo = await respuestaToDo.json();
    console.log(datoToDo)
    
}

document.querySelector('button').addEventListener('click', function() {
    const usuarioToDo = {
        "firstName": "Macarena",
        "lastName": "Reyes",
        "email": "macarenagreyes@gmail.com",
        "password": "123456"}
    // llamarApi(usuario);
    llamarApiToDo(usuario)
    llamarApiToDoConAwait(usuario);
});

