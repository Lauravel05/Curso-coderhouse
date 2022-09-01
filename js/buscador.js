document.getElementById("icon-search").addEventListener("click", mostrarBuscador);
document.getElementById("cover-ctn-search").addEventListener("click", ocultarBuscador);
document.getElementById("inputSearch").addEventListener("keyup", buscadorInterno);


let barSearch = document.getElementById("ctn-bars-search");
let coverSearch = document.getElementById("cover-ctn-search");
let inputSearch = document.getElementById("inputSearch");
let boxSearch = document.getElementById("box-search");

function mostrarBuscador(){
    barSearch.style.top = "22%";
    coverSearch.style.display = "block";
    inputSearch.focus();
}

function ocultarBuscador(){
    barSearch.style.top = "-22%";
    coverSearch.style.display = "none";
    inputSearch.value = "";
}

function buscadorInterno(){
    let filter = inputSearch.value.toUpperCase();
    let li = boxSearch.getElementsByTagName("li");
    console.log(li)
    for (i = 0; i < li.length; i++){
        let a = li[i].getElementsByTagName("a");
        let textValue = a[0].textContent || a[0].innerText;

        if(textValue.toUpperCase().indexOf(filter) > -1){
            li[i].style.display = "";
            boxSearch.style.display = "block"
        }else{
            li[i].style.display = "none";
        }
    }
}