const productos = [
    {
        nombre: "Velón #8",
        precio: "$8.500",
        id: 1,
        img: "./images/producto1.jpeg",
        link: "pages/vela8.html"
    },
    {
        nombre: "Velón #9",
        precio: "$10.000",
        id: 2,
        img: "./images/producto2.jpeg",
        link: "pages/vela9.html"
    },
    {
        nombre: "Pebeteros",
        precio: "$8.500",
        id: 3,
        img: "./images/producto3.jpeg",
        link: "pages/pebeteros.html"
    },
    {
        nombre: "Aromatizadas",
        precio: "$4.500",
        id: 4,
        img: "./images/producto4.jpeg",
        link: "pages/aromatizadas.html"
    },
];

const containerDiv = document.querySelector(".contenedor")
const carritoDiv = document.querySelector(".carrito")

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
        <button class="buy-btn" id="btn-agregar${prod.id}"><a href=${prod.link}>Ver detalles</a></button>
        <button oneclick="mostrar()" class="buy-btn" id="btn-agregar${prod.id}">Agregar al carrito</button>
        </div>`
    })
}

crearCards();


function mostrar(){
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: '¡Lo siento, nustra tienda está en remodelación!',
      })
}