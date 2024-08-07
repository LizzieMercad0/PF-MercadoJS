// CODIGO ALGUNOS PRODUCTOS INDEX

const botonAñadir = document.querySelectorAll('#añadir-carrito')

botonAñadir.forEach(boton =>{
    boton.addEventListener("click",(e) =>{
        // Verificar si el usuario está iniciado
if (localStorage.getItem('sesionIniciada') === 'true') {
    window.location = "../pages/product.html"
} else {
    Swal.fire({     //llamo a SweetAlert2 desde el html
        title: '¿Desea iniciar sesión?',
        text: 'Se requiere iniciar sesion para comprar los productos',
        icon: 'warning',
        confirmButtonText: 'Continuar',
        confirmButtonColor: "#658354"
    }).then(() => { //dirijo el boton al login.html
        window.location = "../pages/login.html"
    });
}
    })
})
