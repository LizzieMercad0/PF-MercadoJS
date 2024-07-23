// CODIGO CARRITO (CART.HTML)

let productosEnCarrito = localStorage.getItem("productos-en-carrito");
productosEnCarrito = JSON.parse(productosEnCarrito)

const contenedorCarritoVacio = document.querySelector(".carrito-vacio")
const contenedorCarritoProductos = document.querySelector("#carrito-productos")
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
const contenedorCarritoComprado = document.querySelector("#carrito-comprado")
let botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar")
const botonVaciar = document.querySelector("#carrito-acciones-vaciar")
const contenedorTotal = document.querySelector("#total")
const botonComprar = document.querySelector("#carrito-acciones-comprar")

function cargarProductosCarrito(){
    if (productosEnCarrito  && productosEnCarrito.length > 0){

    contenedorCarritoVacio.classList.add("disabled");
    contenedorCarritoProductos.classList.remove("disabled");
    contenedorCarritoAcciones.classList.remove("disabled");
    contenedorCarritoComprado.classList.add("disabled");

    //Creo un div que se crea solo cuando añado productos al carrito 👇
    contenedorCarritoProductos.innerHTML = "" 

    productosEnCarrito.forEach(producto => {  
        const div = document.createElement("div")
        div.classList.add("carrito-producto")
        div.innerHTML=`
            <table class="table">
                <tbody>
                    <tr>
                        <td class="carrito-producto-imagen col-sm-2"><img src="${producto.imagen}" alt="${producto.titulo}" style="width: 100px;"></td>
                        <td class="carrito-producto-titulo col-sm-3">${producto.titulo}</td>
                        <td class="carrito-producto-cantidad col-sm-3" >${producto.cantidad}</td>
                        <td class="carrito-producto-cantidad col-sm-2" >${producto.precio}</td>
                        <td class="carrito-producto-subtotal col-sm-6">$${producto.precio * producto.cantidad}</td>
                        <td>
                        <button class="carrito-producto-eliminar btn btn-danger" id="${producto.id}"><i class="bi bi-trash-fill"></i></button>
                        </td>            
                </tr>
                </tbody>
            <table>
        `

        contenedorCarritoProductos.append(div)
    })
    
    actualizarBotonesEliminar()
    actualizarTotal()

    } else{
        contenedorCarritoVacio.classList.remove("disabled")
        contenedorCarritoProductos.classList.add("disabled")
        contenedorCarritoAcciones.classList.add("disabled")
        contenedorCarritoComprado.classList.add("disabled")
    }
}

cargarProductosCarrito()

// Reasigno los botones 
function actualizarBotonesEliminar(){
    botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar")

    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", eliminarDelCarrito)
    })
}

function eliminarDelCarrito(e){
    Toastify({
        text: "Producto eliminado",
        duration: 3000,
        close: true,
        gravity: "top", 
        position: "right", 
        stopOnFocus: true,
        style: {
        background: "linear-gradient(to right, #658354, #b3cf99)",
        borderRadius: "2rem",
        textTransform: "uppercase",
        fontSize: ".75rem"
        },
        offset: {
            x: '1.5rem', 
            y: '1.5rem' 
        },
        onClick: function(){} 
    }).showToast();

    const idBoton = e.currentTarget.id;
    const index = productosEnCarrito.findIndex(producto => producto.id === idBoton)

    productosEnCarrito.splice(index,1)
    cargarProductosCarrito()

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));

}

botonVaciar.addEventListener("click", vaciarCarrito);
function vaciarCarrito() {

    Swal.fire({
        title: '¿Está seguro?',
        icon: 'question',
        html: `Se van a borrar ${productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0)} productos.`,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: 'Sí',
        cancelButtonText: 'No'
    }).then((result) => {
        if (result.isConfirmed) {
            productosEnCarrito.length = 0;
            localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
            cargarProductosCarrito();
        }
    })
}


function actualizarTotal() {
    const totalCalculado = productosEnCarrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0)
    total.innerText = `$${totalCalculado}`
}

botonComprar.addEventListener("click", comprarCarrito);
function comprarCarrito() {

    productosEnCarrito.length = 0;
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
    
    contenedorCarritoVacio.classList.add("disabled");
    contenedorCarritoProductos.classList.add("disabled");
    contenedorCarritoAcciones.classList.add("disabled");
    contenedorCarritoComprado.classList.remove("disabled");

}