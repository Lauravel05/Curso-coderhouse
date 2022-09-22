const containerDiv = document.querySelector(".contenedor")
const carritoDiv = document.querySelector(".carrito")
let productos = []
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

async function crearCards(){
    productos = await fetch("../json/productos.json")
    .then(result => result.json())
    .then(data => {return data})
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
        <button class="buy-btn my-2"${prod.id}"><a href=${prod.link}>Ver detalles</a></button>
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
    mostrar()
}

function renderizarCarrito(){
    carritoDiv.innerHTML = "";
    carrito.forEach(prod =>{
        carritoDiv.innerHTML += `<div class="product text-center col-lg-3 col-md-4 col-12">
        <img class="img-fluid mb-3" src=${prod.img} alt="producto4">
        <h5>${prod.nombre}</h5>
        <h4>Cantidad:${prod.cantidad}</h4>
        <button class="buy-btn" id="btn-borrar${prod.id}"><i class="fas fa-trash-alt"></i>Borrar</button>
        </div>`;
    });
    localStorage.setItem("carrito", JSON.stringify(carrito))
    borrarProducto()
}

function borrarProducto(){
    console.log("entre a borrar el producto")
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
renderizarCarrito();

function mostrar(){

    Swal.fire({
        icon: 'success',
        title: '¡Genial!',
        text: 'Tu producto ha sido agregado exitosamente. Dirígete al carrito de compras para continuar con tu compra.',
        width: '30%',
      })
}

// document.getElementById("cart").onclick = function (){
//     mostrar()
// }