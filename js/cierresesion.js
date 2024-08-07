// CODIGO CIERRE SESION

const botonCerrarSesion = document.querySelector('#cierreSesion') //Busca e

botonCerrarSesion.addEventListener('click', () => {
    localStorage.removeItem('sesionIniciada'); // Elimina los datos
    
    Swal.fire({      //llamar a SweetAlert2 desde el html
        title: '¡Perfecto!',
        text: 'Cerro sesión correctamente',
        icon: 'success',
        confirmButtonText: 'Confirmar',
    })
    .then(() => {
        window.location = './index.html'
    
    })
})

// Valido que cierre sesion y oculto el boton "Cerrar sesion"
const sesionIniciada = localStorage.getItem('sesionIniciada') === 'true'
const elementCierre = document.querySelector('#cierreSesion')

if (!sesionIniciada) {
    function ocultarElemento() {
        elementCierre.style.display ='none'
    }
    
    function mostrarElemento() {
        elementCierre.style.display = 'block'
    }
    
    // Verificar si el usuario está iniciado
    if (localStorage.getItem('sesionIniciada') === 'true') {
        mostrarElemento();
    } else {
        ocultarElemento();
    }
    
    // Evento para mostrar al iniciar sesión
    document.addEventListener('sesionIniciada', mostrarElemento)
}