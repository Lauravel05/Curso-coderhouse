const productos = [
    {
        nombre: "Velón #8",
        precio: "$8.500",
        id: 1
    },
    {
        nombre: "Velón #9",
        precio: "$10.000",
        id: 2
    },
    {
        nombre: "Pebeteros",
        precio: "$8.500",
        id: 3
    },
    {
        nombre: "Aromatizadas",
        precio: "$4.500",
        id: 4
    },
];

const containerDiv = document.querySelector(".contenedor")
const carritoDiv = document.querySelector(".carrito")

function crearCards(){
    productos.forEach(prod=>{
        containerDiv.innerHTML += `<div>
        <h5>${prod.nombre}</h5>
        <h4>$${prod.precio}</h4>
        <button id"btn-agregar${prod.id}">Agregar</button>
        </div>`
    })
}

crearCards();