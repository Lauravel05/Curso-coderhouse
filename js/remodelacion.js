function mostrar(){

    Swal.fire({
        icon: 'error',
        title: 'Ops...Lo siento',
        text: 'Esta parte de nuestra tienda se encuentra en remodelación, por favor, dirígete al inicio para agregar tus productos al carrito.',
        width: '30%',
      })
}

document.getElementById("cart").onclick = function (){
    mostrar()
}
