let productos = [];

fetch("../js/productos.json")
    .then(response => response.json())
    .then(data => {
        productos = data;
        cargarProductos(productos);
    })

const contenedorProductos  = document.querySelector (".contenedor-productos")
const botonesCategorias  = document.querySelectorAll (".boton-categoria")
const tituloPrincipal = document.querySelector ("#titulo-principal")
let botonesAgregar = document.querySelectorAll (".producto-agregar")
const numerito = document.querySelector("#numerito")

function cargarProductos(productosElegidos){

    contenedorProductos.innerHTML=""

    productosElegidos.forEach(producto => {

        const div = document.createElement ("div") 
        div.classList.add("producto")
        div.innerHTML =`
                <div class="card mx-auto" style="width: 230px; height: 330px;">
                    <img class="producto-image" src="${producto.imagen}" class="card-img-top p-2" alt="..." style="height: 160px; width: 230px;">
                    <div class="card-body producto-detalles">
                        <div class="d-flex justify-content-between">
                            <h5 class="producto-titulo" >${producto.titulo}</h5>
                            <span class="badge bg-primary text-dark pt-2 producto-precio">$${producto.precio}</span>
                        </div>  
                        <p class="card-text"> ${producto.detalle}</p>
                        <button class="btn btn-primary producto-agregar"id="${producto.id}" >Agregar al carrito</button>
                    </div>
                </div>
        `
            contenedorProductos.append(div)
    })
        actualizarBotonesAgregar()
}

cargarProductos(productos)

botonesCategorias.forEach(boton =>{
    boton.addEventListener("click",(e) =>{

        botonesCategorias.forEach(boton => boton.classList.remove ("active"))
        e.currentTarget.classList.add("active")
        
        if(e.currentTarget.id !="todos"){
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id)
            tituloPrincipal.innerText = productoCategoria.categoria.nombre
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id)
        cargarProductos(productosBoton)
        }else {
            tituloPrincipal.innerText = "Todos los productos"
            cargarProductos(productos)
        }

        
    })
})

function actualizarBotonesAgregar(){
    botonesAgregar = document.querySelectorAll(".producto-agregar")

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito)
    })
} 

const productosEnCarrito = []

function agregarAlCarrito(e) {
    
    const idBoton = e.currentTarget.id
    const productoAgregado = productos.find(producto => producto.id === idBoton)

    if (productosEnCarrito.some(producto => producto.id === idBoton)){
        const index = productosEnCarrito.findIndex(producto.id === idBoton)
        productosEnCarrito[index].cantidad++
    } else {
        productoAgregado.cantidad = 1
        productosEnCarrito.push(productoAgregado)
    }

    actualizarNumerito ()

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito))
}

function actualizarNumerito (){
    let newNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad,0)
    numerito.innerText = newNumerito
}