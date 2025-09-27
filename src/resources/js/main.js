let imagenActual = document.getElementById('imagenActual');
let parrafo = document.getElementById('textoActual');
let img = document.getElementById('usuario');
let general = document.getElementById('general');
let abrirLogin = document.getElementById('abrir-login');
let titulo = document.getElementById('titulo');
let paragraph = document.getElementById("paragraph");
let correo = document.createElement("p");

let fotos = [
    { src: "/resources/images/1.png" },
    { src: "/resources/images/2.png" },
    { src: "/resources/images/3.png" }
];
let textos = [
    { texto: "El TecnoMate Inteligente es un termo portátil y compacto con tecnología avanzada que permite controlar la temperatura del agua utilizada para preparar mate. La principal característica es su pantalla digital que indica la temperatura en tiempo real. El sistema de calefacción interna mantiene el agua a una temperatura configurable entre 70°C y 90°C, ajustable según las preferencias del usuario. Además, se carga mediante USB-C, lo que lo hace aún más accesible y práctico. La autonomía del dispositivo es de hasta 8 horas de uso continuado, lo que lo convierte en una excelente opción para quienes necesitan mantener su bebida caliente durante toda la jornada." },
    { texto: "El TecnoMate está fabricado con materiales duraderos y resistentes al desgaste diario, pensados para el uso constante en diferentes ambientes, como en la oficina, la universidad o actividades al aire libre. El sistema de calefacción interna está compuesto por un sensor de temperatura de alta precisión y un módulo de control que regula el calor, asegurando que el agua se mantenga a la temperatura ideal durante todo el proceso. En términos de producción, se realizarán pruebas de campo con al menos 10 unidades antes de lanzar el producto a gran escala, lo que permitirá ajustar detalles técnicos y obtener retroalimentación directa de los usuarios." },
    { texto: "El funcionamiento óptimo del termo está garantizado con una autonomía de hasta 8 horas por cada carga completa. Esto significa que el dispositivo puede mantener el agua a la temperatura deseada durante una jornada laboral, estudio o actividad al aire libre sin necesidad de recarga. Esta autonomía es ideal para quienes necesitan un termo que pueda acompañarlos durante todo el día sin preocupaciones. Con un margen de error de tan solo 0.5°C, nos asegura que el agua se mantenga a la temperatura exacta seleccionada por el usuario, sin fluctuaciones que puedan alterar la experiencia de consumo." }
];

let indice = 0;


function mostrarImagenYtexto() {
    imagenActual.src = fotos[indice].src;
    parrafo.textContent = textos[indice].texto;
}

window.onload = function () {
    mostrarImagenYtexto();
    setInterval(() => {
        indice = (indice + 1) % fotos.length;
        mostrarImagenYtexto();
    }, 10000);

}
//// creacion del producto gant, edt y gestion de riesgos FODA propio. el otro grupo el tablero, todo lo que tienen que hacer para entregar la pagina


function mostrarAbrirLoginSinReg(){
    handler2();
}

function mostrarAbrirLoginConReg(nombre){
   handler2();
    titulo.textContent = `Hola ${nombre}`;
    correo.textContent = `Email: ${localStorage.getItem("usuarioEmail")}`;
    correo.style.fontSize = "13.5px";
    abrirLogin.appendChild(correo);
    paragraph.textContent = `Comentarios enviados: ${localStorage.getItem("contador")}`;
}

function handler2(){
    if (abrirLogin.hidden) {
        abrirLogin.hidden = false;
        abrirLogin.style.display = "flex";
    } else {
        abrirLogin.hidden = true;
        abrirLogin.style.display = "none";
    }
}

img.addEventListener('click', handler);


function handler(){
    const nombre = localStorage.getItem("usuarioNombre");
    const email = localStorage.getItem("usuarioEmail");
    
    if(nombre && email){
        mostrarAbrirLoginConReg(nombre);
    }else{
        mostrarAbrirLoginSinReg();
    }
}

