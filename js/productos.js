const productos = [
    {
        "id": "monstera-01",
        "titulo": "Monstera",
        "imagen": "../assets/image/bosque/monstera-producto-01.png",
        "detalle": "...",
        "categoria": {
            "nombre": "Bosque",
            "id": "bosque",
        },
        "precio": 0.00
    },
    {
        "id": "hojas-01",
        "titulo": "Hoja otoñal",
        "imagen": "../assets/image/bosque/otoño-producto-01.png",
        "categoria": {
            "nombre": "Bosque",
            "id": "bosque"
        },
        "precio": 1000
    },
    {
        "id": "cactus-01",
        "titulo": "Cactus con flores",
        "imagen": "../assets/image/desierto/cactus-producto-01.png",
        "categoria": {
            "nombre": "desierto",
            "id": "desierto"
        },
        "precio": 0.00
    },
    {
        "id": "cactus-02",
        "titulo": "Cactus mini",
        "imagen": "../assets/image/desierto/cactus-producto-02.png",
        "categoria": {
            "nombre": "desierto",
            "id": "desierto"
        },
        "precio": 0.00
    },
    {
        "id": "rosario-01",
        "titulo": "Rosario",
        "imagen": "../assets/image/desierto/rosario-producto-01.png",
        "categoria": {
            "nombre": "desierto",
            "id": "desierto"
        },
        "precio": 0.00
    },
    {
        "id": "girasoles-01",
        "titulo": "Girasoles",
        "imagen": "../assets/image/silvestre/girasoles-producto-01.png",
        "categoria": {
            "nombre": "silvestre",
            "id": "silvestre"
        },
        "precio": 0.00
    }
]

const contenedorProductos  = document.querySelector (".contenedor-productos")

function cargarProductos(){

    productos.forEach(producto => {

        const div = document.createElement ("div")
        div.classList.add("producto")
        div.innerHTML =`

                <div class="col-lg-3 mb-2 mb-sm-0 p-2 md-3 producto">
                    <div class="card mx-auto" style="width: 230px; height: 330px;">
                            <img class="producto-image" src="${producto.imagen}" class="card-img-top p-2" alt="..." style="height: 160px; width: 230px;">
                        <div class="card-body producto-detalles">
                        <div class="d-flex justify-content-between">
                            <h5 class="producto-titulo" >${producto.titulo}</h5>
                            <span class="badge bg-primary text-dark pt-2 producto-precio">${producto.precio}</span>
                        </div>  
                        <p class="card-text"> ${producto.detalle}</p>
                        <a href="#" class="btn btn-primary producto-agregar"id="${producto.id}" >Agregar al carrito</a>
                        </div>
                    </div>
                </div>

        `

        contenedorProductos.append(div)
    })
}

cargarProductos()

{/* <img class="producto-image" src="${producto.image}" class="card-img-top p-2" alt="..." style="height: 160px; width: 230px;">
                <div class="card-body producto-detalles">
                    <div class="d-flex justify-content-between">
                        <h5 class="producto-titulo" >${producto.titulo}</h5>
                        <span class="badge bg-primary text-dark pt-2 producto-precio">${producto.precio}</span>
                    </div>
                    <p class="card-text">Símbolo de resistencia y persistencia.</p>
                    <a href="#" class="btn btn-primary producto-agregar" id="${producto.id}">Agregar al carrito</a> */}