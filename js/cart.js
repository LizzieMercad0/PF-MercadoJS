// CODIGO CARRITO (CART.HTML)

let productosEnCarrito = localStorage.getItem("productos-en-carrito");
productosEnCarrito = JSON.parse(productosEnCarrito)

const contenedorCarritoVacio = document.querySelector("#carrito-vacio")
const contenedorCarritoProductos = document.querySelector("#carrito-productos")
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones")
const contenedorCarritoComprado = document.querySelector("#carrito-comprado")
let botonesEliminar = document.querySelectorAll("#carrito-producto-eliminar")

function cargarProductosCarrito(){
    if (productosEnCarrito  && productosEnCarrito.length > 0){

    contenedorCarritoVacio.classList.add("disabled")
    contenedorCarritoProductos.classList.remove("disabled")
    contenedorCarritoAcciones.classList.remove("disabled")
    contenedorCarritoComprado.classList.add("disabled")

    //Creo un div que se agregue solo cuando añado productos al carrito 👇
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
    const idBoton = e.currentTarget.id;
    const index = productosEnCarrito.findIndex(producto => producto.id === idBoton)

    productosEnCarrito.splice(index,1)
    cargarProductosCarrito()

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));

}