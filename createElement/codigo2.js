function addElementos(){
  const novaDiv = document.createElement("div")
  const txt = document.getElementById('txt')
  const novoConteudo = document.createTextNode(txt.value)
  const divAtual = document.getElementById("div1")

  document.body.insertBefore(novaDiv, divAtual)

  novaDiv.appendChild(novoConteudo)

}

