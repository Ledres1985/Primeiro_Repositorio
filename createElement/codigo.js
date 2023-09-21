var foto = document.getElementById('foto')

function chamar(){
    foto.style.width='300px'
    foto.style.height='300px'
    foto.src = "teste.png"
}
function limpar(){
    foto.style.width='0px'
    foto.style.height='0px'
    foto.src = "" 
}
