// Script para ocultar y mostrar elemento (fuera de login.js)
const elementLi = document.querySelector('#ocultarTienda');

function ocultarElemento() {
    elementLi.style.display = 'none';
}

function mostrarElemento() {
    elementLi.style.display = 'block';
}

// Verificar si el usuario está iniciado (fuera de login.js)
if (localStorage.getItem('sesionIniciada') === 'true') {
    mostrarElemento();
} else {
    ocultarElemento();
}

// Evento para mostrar al iniciar sesión (fuera de login.js)
document.addEventListener('sesionIniciada', mostrarElemento);
