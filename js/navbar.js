//CODIGO NAVBAR

//Oculto elemento para que solo se muestren cuando quiero 
const elementLi = document.querySelector('#ocultarTienda')
const elementProfile = document.querySelector('#perfilOcultar')
const elementPagos = document.querySelector('#pagosOcultar')
const elementInicio = document.querySelector('#inicioOcultar')
const elementCarrito = document.querySelector('#ocultarCarrito')

function ocultarElemento() {
    elementLi.style.display = 'none'
    elementProfile.style.display = 'none'
    elementPagos.style.display = 'none'
    elementCarrito.style.display = 'none'
    elementInicio.style.display ='block' //muestro cuando no esta iniciada la sesion 
}

function mostrarElemento() {
    elementLi.style.display = 'block'
    elementProfile.style.display = 'block'
    elementCarrito.style.display = 'block'
    elementInicio.style.display ='none' // oculto cuando esta iniciada la sesion

}

// Verificar si el usuario está iniciado
if (localStorage.getItem('sesionIniciada') === 'true') {
    mostrarElemento();
} else {
    ocultarElemento();
}

// Evento para mostrar al iniciar sesión
document.addEventListener('sesionIniciada', mostrarElemento)
