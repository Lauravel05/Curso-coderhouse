const productos = [
    {
        nombre: "Velón #8",
        precio: "8.500",
        id: 1,
        img: "./images/producto1.jpeg",
        link: "pages/vela8.html"
    },
    {
        nombre: "Velón #9",
        precio: "10.000",
        id: 2,
        img: "./images/producto2.jpeg",
        link: "pages/vela9.html"
    },
    {
        nombre: "Pebeteros",
        precio: "8.500",
        id: 3,
        img: "./images/producto3.jpeg",
        link: "pages/pebeteros.html"
    },
    {
        nombre: "Aromatizadas",
        precio: "4.500",
        id: 4,
        img: "./images/producto4.jpeg",
        link: "pages/aromatizadas.html"
    },
];

const containerDiv = document.querySelector(".contenedor")
const carritoDiv = document.querySelector(".carrito")

let carrito = []

function crearCards(){
    productos.forEach(prod=>{
        containerDiv.innerHTML += `<div class="product text-center col-lg-3 col-md-4 col-12">
        <img class="img-fluid mb-3" src=${prod.img} alt="producto4">
        <div class="star">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i> 
                    </div>
        <h5>${prod.nombre}</h5>
        <h4>$${prod.precio}</h4>
        <button class="buy-btn"${prod.id}"><a href=${prod.link}>Ver detalles</a></button>
        <button class="buy-btn" id="btn-agregar${prod.id}">Agregar al carrito</button>
        </div>`;
    });
    agregarFuncionalidad()
}

function agregarFuncionalidad(){
    productos.forEach((prod) => {
        document
        .querySelector(`#btn-agregar${prod.id}`)
        .addEventListener("click", () =>{
            console.log(prod);
            agregarAlCarrito(prod)
        });
    });
}

function agregarAlCarrito(prod){

        let existe = carrito.some(productoSome => productoSome.id === prod.id)
        if(existe === false){
            prod.cantidad = 1;
            carrito.push(prod);
        }else{
            let prodFind = carrito.find((productoFind) => productoFind.id === prod.id);
            prodFind.cantidad++;
        }
    console.log(carrito);
    renderizarCarrito();
}

function renderizarCarrito(){
    carritoDiv.innerHTML = "";
    carrito.forEach(prod =>{
        carritoDiv.innerHTML += `<div class="product text-center col-lg-3 col-md-4 col-12">
        <img class="img-fluid mb-3" src=${prod.img} alt="producto4">
        <h5>${prod.nombre}</h5>
        <h4>Cantidad:${prod.cantidad}</h4>
        <button class="buy-btn" id="btn-borrar${prod.id}">Borrar</button>
        </div>`;
    });
    localStorage.setItem("carrito", JSON.stringify(carrito))
    borrarProducto()
}

function borrarProducto(){
    carrito.forEach((prod) => {
        document
        .querySelector(`#btn-borrar${prod.id}`)
        .addEventListener("click", () => {
            carrito = carrito.filter(
                (productoFilter) => productoFilter.id !== prod.id
            );
            renderizarCarrito();
        });
    });
}
crearCards();

// onclick="mostrar()"
// function mostrar(){
//     Swal.fire({
//         icon: 'error',
//         title: 'Oops...',
//         text: '¡Lo siento, nuestra tienda está en remodelación!',
//         width: '30%',
//       })
// }