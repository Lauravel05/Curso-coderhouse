const containerDiv = document.querySelector(".contenedor2")
const carritoDiv = document.querySelector(".carrito")
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

async function crearCards(){
    if(carrito.length === 0){
        containerDiv.innerHTML += `<h4>Tu carrito se encuentra vacio.</h4>`
    }else{
        carrito.forEach(prod=>{
            containerDiv.innerHTML += `<div class="shop col-8">
            <div class="box">
                <img src=${prod.img} alt="">
                <div class="content">
                    <h4>${prod.nombre}</h4>
                    <h5>Precio:$${prod.precio}</h5>
                    <p class="unit">cantidad: ${prod.cantidad}</p>    
                </div>
            </div>`;
        });

        let subTotal = calcularSubTotal();
        let totalIVA = calcularIva()
        let valorTotal = totalIVA + subTotal;
        containerDiv.innerHTML += `
        <div class="right-bar col-4">
            <h4>Resumen de tu compra</h4>
            <h5><span>Sub-total</span> <span>$${formatValue(subTotal)}</span></h5>
            <hr>
            <h5><span>IVA (19%)</span> <span>$${formatValue(totalIVA)}</span></h5>
            <hr>
            <h4><span>Total</span> <span>$${formatValue(valorTotal)}</span></h4>
            <p>El costo de envio no está incluido en el total.</p>

            <a href="../pages/procesoPago.html"><i class="fa fa-shopping-cart"></i>Continuar con la compra</a>
        </div>`
    }
    
}

function calcularSubTotal(){
    let subTotal = 0;
    carrito.forEach((prod)=>{
        let precio = prod.precio * prod.cantidad;
        subTotal = precio + subTotal
    })
    return subTotal;
}

function calcularIva(){
    const IVA = 0.19;
    let ivaTotal = 0;
    carrito.forEach( (prod)=>{
        let precioConIva = (prod.precio * IVA) * prod.cantidad;
        ivaTotal = precioConIva + ivaTotal
    })
    return ivaTotal
}

function formatValue(valueToFormat){
    let nf = new Intl.NumberFormat('de-DE');
    return nf.format(valueToFormat);
}

function borrarProducto(){
    console.log("entre a borrar el producto")
    carrito.forEach((prod) => {
        document
        .querySelector(`#btn-borrar-${prod.id}`)
        .addEventListener("click", () => {
            carrito = carrito.filter(
                (productoFilter) => productoFilter.id !== prod.id
            );
            crearCards()
        });
    });
}


crearCards();
