const form = document.getElementById("form");
const nombreInput = document.getElementById("nombre");
const correoInput = document.getElementById("correo");
const comentariosInput = document.getElementById("comentarios");


let contador = localStorage.getItem("contador");
if(!contador){
    contador = 0;
} else {
    contador = parseInt(contador);
}


function cargarUsuarioRegistrado() {
    const nombreGuardado = localStorage.getItem("usuarioNombre");
    const emailGuardado = localStorage.getItem("usuarioEmail");

    if(nombreGuardado && emailGuardado) {
        nombreInput.value = nombreGuardado;
        correoInput.value = emailGuardado;
        nombreInput.readOnly = true;
        correoInput.readOnly = true;
    }
}


function registroYComentario() {
    const nombre = nombreInput.value;
    const email = correoInput.value;

    localStorage.setItem("usuarioNombre", nombre);
    localStorage.setItem("usuarioEmail", email);
    localStorage.setItem("ultimoComentario", comentariosInput.value); // util para cuando se entregue en mano, los comentarios se guardan pero no se muestran
    nombreInput.readOnly = true;
    correoInput.readOnly = true;

    alert("¡Registro y mensaje exitoso!");

    contador = 1;
    localStorage.setItem("contador", contador);
}


function soloComentario() {
    localStorage.setItem("ultimoComentario", comentariosInput.value); // util para cuando se entregue en mano, los comentarios se guardan pero no se muestran

    contador++;
    localStorage.setItem("contador", contador);

    alert(`¡Mensaje enviado!`);
}


form.addEventListener("submit", function(e){
    e.preventDefault();

    const nombreGuardado = localStorage.getItem("usuarioNombre");
    const emailGuardado = localStorage.getItem("usuarioEmail");

    if(nombreGuardado && emailGuardado){
        soloComentario();
    } else {
        registroYComentario();
    }


    comentariosInput.value = "";
});

window.addEventListener("DOMContentLoaded", cargarUsuarioRegistrado);
