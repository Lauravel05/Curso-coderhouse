//const fs = require('fs');
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function final(){
    Swal.fire({
        icon: 'success',
        title: '¡Genial!',
        text: 'Tu compra ha sido realizada exitosamente.',
        width: '30%',
      }).then((result) => {
        location.replace("../index.html")
      })
}

document.getElementById("final").onclick = function (){
    final()
    actualizarInventario()
    localStorage.clear()
}

async function actualizarInventario(){
  productos = await fetch("../json/productos.json")
    .then(result => result.json())
    .then(data => {return data})
    carrito.forEach(prodCarrito => {
    productos.forEach(productoFind => {
      if(productoFind.id === prodCarrito.id) {
        const currentStock = productoFind.stock
        const finalStock = currentStock - prodCarrito.cantidad
        productoFind.stock = finalStock
      }
    })
    console.log(productos)
  });
  //escribirData(productos)
}

// function escribirData(data){
//   try {
//     fs.writeFile('../json/productos.json', data);
//     console.log("JSON data is saved.");
// } catch (error) {
//     console.error(err);
// }
// }