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
    localStorage.clear()
}