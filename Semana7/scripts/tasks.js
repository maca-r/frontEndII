// SEGURIDAD: Si no se encuentra en localStorage info del usuario
// no lo deja acceder a la página, redirigiendo al login inmediatamente.
const URI_BASE = 'http://todo-api.ctd.academy:3000/v1';
const urlUsuario = 'http://todo-api.ctd.academy:3000/v1/users/getMe';
const urlTareas = 'http://todo-api.ctd.academy:3000/v1/tasks';


/* ------ comienzan las funcionalidades una vez que carga el documento ------ */
window.addEventListener('load', function() {

    /* ---------------- variables globales y llamado a funciones ---------------- */
    const jwt = localStorage.getItem('USER_SESSION'); //obtiene token para usarlo en configuracion
    consultarTareas();
    obtenerNombreUsuario();



    /* -------------------------------------------------------------------------- */
    /*                          FUNCIÓN 1 - Cerrar sesión                         */
    /* -------------------------------------------------------------------------- */
    const btnCerrarSesion = document.querySelector('#closeApp');
    btnCerrarSesion.addEventListener('click', function() {

      localStorage.removeItem('USER_SESSION') //elimina token al hacer click en cerrar sesion
      location.replace('index.html') //redirecciona a login

    });

    /* -------------------------------------------------------------------------- */
    /*                 FUNCIÓN 2 - Obtener nombre de usuario [GET]                */
    /* -------------------------------------------------------------------------- */

    function obtenerNombreUsuario() {

      const configuracion = {
        method: 'GET',
        headers: {
            authorization: jwt,
        }
      };
      console.log("Consultando usuario...");
      fetch(urlUsuario, configuracion)
        .then(respuesta => respuesta.json())
        .then(datos => {
            console.log("Nombre de usuario:");
            console.log(datos.firstName);
            const nombreUsuario = document.querySelector('.user-info p');
            nombreUsuario.innerText = datos.firstName;
        })
        


    };


    /* -------------------------------------------------------------------------- */
    /*                 FUNCIÓN 3 - Obtener listado de tareas [GET]                */
    /* -------------------------------------------------------------------------- */
  
    function consultarTareas() {

      const configuracion = {
        method: 'GET',
        headers: {
            'Authorization': jwt
        },
      };

      fetch(`${URI_BASE}/tasks`, configuracion)
        .then(respuesta => respuesta.json())
        .then(datos => {
          
          renderizarTareas(datos) 
          botonesCambioEstado();
          botonBorrarTarea();//cambio
          /* let tareasPendientes = document.querySelector('.tareas-pendientes');
          let tareasTerminadas = document.querySelector('.tareas-terminadas');
          tareasPendientes.innerHTML = "";

          for (const tarea of datos) {

            if(tarea.completed) {

              tareasTerminadas.innerHTML += 
              `<li class=tarea>${tarea.description}</li>
              `

            } else {

              tareasPendientes.innerHTML += 
              `<li class=tarea>${tarea.description}</li>
              `
            }

            } */
        })
        

    };


    /* -------------------------------------------------------------------------- */
    /*                    FUNCIÓN 4 - Crear nueva tarea [POST]                    */
    /* -------------------------------------------------------------------------- */
    const formCrearTarea = document.querySelector('form');
    formCrearTarea.addEventListener('submit', function(event) {
        event.preventDefault();

        crearTarea(document.querySelector('#nuevaTarea').value);
        
    });

    function crearTarea(descripcionTarea) {
        const tarea = {
            description: descripcionTarea,
            completed: false
        };
        //const jwt = localStorage.getItem('USER_SESSION'); 

        const configuracion = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': jwt
            },
            body: JSON.stringify(tarea)
        };

        fetch(`${URI_BASE}/tasks`, configuracion)
            .then(respuesta => respuesta.json())
            .then(datos => {
              console.log(datos);
              location.reload(); //recarga la pagina al crear la tarea

            })
            
      }

    /* -------------------------------------------------------------------------- */
    /*                  FUNCIÓN 5 - Renderizar tareas en pantalla                 */
    /* -------------------------------------------------------------------------- */
    function renderizarTareas(listado) {
      //linea 58 en adelante pasada a renderizar
      let tareasPendientes = document.querySelector('.tareas-pendientes');
      let tareasTerminadas = document.querySelector('.tareas-terminadas');
      tareasPendientes.innerHTML = "";
      tareasTerminadas.innerHTML = "";
      const numeroPendientes = document.querySelector('#cantidad-pendientes');
      const numeroFinalizadas = document.querySelector('#cantidad-finalizadas');
      let contadorPendientes = 0;
      numeroPendientes.innerText = contadorPendientes;
      let contadorFinalizadas = 0;
      numeroFinalizadas.innerText = contadorFinalizadas;
      


      listado.forEach(tarea => {

        let fecha = new Date(tarea.createdAt);

        if (tarea.completed) {
            contadorFinalizadas++;
            tareasTerminadas.innerHTML +=
                `<li class="tarea">
                  <div class="hecha">
                    <i class="fa-regular fa-circle-check"></i>
                  </div>
                  <div class="descripcion">
                    <p class="nombre">${tarea.description}</p>
                  <div class="cambios-estados">
                    <button class="change completa" id="${tarea.id}" ><i class="fa-solid fa-rotate-left"></i></button>
                    <button class="borrar" id="${tarea.id}"><i class="fa-regular fa-trash-can"></i></button>
                  </div>
                  </div>
                </li>
                `
        } else {
            contadorPendientes++;
            tareasPendientes.innerHTML +=
                `<li class="tarea">
                  <button class="change incompleta" id="${tarea.id}"><i class="fa-regular fa-circle"></i></button>
                  
                  <div class="descripcion">
                    <p class="nombre">${tarea.description}</p>
                    <p class="timestamp">${fecha.toLocaleDateString()}</p>
                  </div>
                </li>
                `
        }
        numeroPendientes.innerText = contadorPendientes;
        numeroFinalizadas.innerText = contadorFinalizadas; //circulo verde con cantidad de tareas
        
    });
      
    };

    /* -------------------------------------------------------------------------- */
    /*                  FUNCIÓN 6 - Cambiar estado de tarea [PUT]                 */
    /* -------------------------------------------------------------------------- */
    function botonesCambioEstado() {

      document.querySelectorAll(".change").forEach(boton => {
        boton.addEventListener("click", (e) => {
          const tarea = {
            completed : !e.target.classList.contains("completa") //e.target info del evento. Si la tarea contiene la clase completa = true, else = false
          }

          const configuracion = {
            method:  "PUT",
            headers: {
              'Authorization': jwt,
              'Content-type': 'application/json'
          },
          body: JSON.stringify(tarea)
          }

          fetch(`${urlTareas}/${e.target.id}`, configuracion)
            .then(respuesta => respuesta.json())
            .then(datos => {
              console.log(datos);
              consultarTareas()
              //renderizarTareas() //llama a renderizar en vez de a consultar porque consultar tiene el llamado a los botones
            })
            
          
        })
      })



    }


    /* -------------------------------------------------------------------------- */
    /*                     FUNCIÓN 7 - Eliminar tarea [DELETE]                    */
    /* -------------------------------------------------------------------------- */
    function botonBorrarTarea() {
      document.querySelectorAll(".borrar").forEach(boton => {
        boton.addEventListener("click", (e) => {

            const configuracion = {
              method : "DELETE",
              headers :
              {'Authorization': jwt,
              'Content-type': 'application/json'}
            }

            fetch(`${urlTareas}/${e.target.id}`, configuracion)
            .then(respuesta => {
              if(respuesta.ok){
              consultarTareas()
              } else {
                console.log("No se puede eliminar la tarea");
              }
            })
            .catch(error => console.log(error))
      })

      })




    };

});


