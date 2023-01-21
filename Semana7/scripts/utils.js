/* ---------------------------------- texto --------------------------------- */
function validarTexto(texto) {

    let textoNormalizado = normalizarTexto(texto);

    let regexTexto = new RegExp(/^[A-Z]+$/i);

    let textoValido = regexTexto.test(textoNormalizado);

    if(!textoValido) {

        mostrarMensajeError('Tu nombre o apellido son incorrectos')
        mostrarMensaje('Tu nombre o apellido son incorrectos')
    }

    return textoValido;

}

function normalizarTexto(texto) {

    return texto.trim();

}

/* ---------------------------------- email --------------------------------- */
function validarEmail(email) {

    let emailNormalizado = normalizarEmail(email);

    let regexEmail = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

    let emailValido = regexEmail.test(emailNormalizado);

    if (!emailValido) {
        mostrarMensajeError('Email incorrecto');
        mostrarMensaje('Email incorrecto')
    }

    return  emailValido;



}

function normalizarEmail(email) {

    return email.toLowerCase();

}

/* -------------------------------- password -------------------------------- */
function validarContrasenia(contrasenia) {
    let regexContrasenia = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{8,}$/) //valida +8 caracteres, al menos una letra, al menos un numero, al menos una mayusc, sin espacios

    /* let contraseniaValida = contrasenia.length >= 8 */

    if (!contraseniaValida) {

        mostrarMensajeError('La contraseña debe tener más de 8 caracteres')
        mostrarMensaje('La contraseña debe tener más de 8 caracteres')
    }
    return contraseniaValida;

}

function compararContrasenias(contrasenia_1, contrasenia_2) {

    let contraseniasIguales = contrasenia_1 === contrasenia_2;

    if (!contraseniasIguales) {
        mostrarMensajeError('Las contraseñas no coinciden')
        mostrarMensaje('Las contraseñas no coinciden')
    }

    return contraseniasIguales;

}

function mostrarMensajeError(mensaje) {
    console.log(mensaje);

}

function mostrarMensaje(mensaje) {
    alert(mensaje)

}