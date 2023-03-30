const form = document.querySelector('#form');

//Função para ativar o submit como evento, adicionar uma função e tirar a cfg default de atualizar a página a dar submit com o e.preventDefault
form.addEventListener('submit', function(e) {
    e.preventDefault();
    validaNumero()
})

//Função para validar os números
function validaNumero() {
    let campoA = Number(document.querySelector('#campo-a').value)
    let campoB = Number(document.querySelector('#campo-b').value)

    if (campoA < campoB) {
        document.querySelector('#campo-a').style.border = ""
        document.querySelector('#campo-b').style.border = ""
        document.querySelector('#mensagem').innerHTML = `<b>Formulário Válido</b></br></br> Campo B com o valor (${campoB}) é maior que o campo A com o valor (${campoA})` 
        document.querySelector('#mensagem').style.color = "black"
        document.querySelector('#error-mensagem').style.display = 'none'
        document.querySelector('#mensagem').style.display = 'block'
    
    } else if (campoA > campoB) {
        document.querySelector('#campo-a').style.border = ""
        document.querySelector('#campo-b').style.border = ""
        document.querySelector('#error-mensagem').innerHTML = `<b>Formulário Inválido</b><br/></br> Campo B com o valor(${campoB}) é menor que o campo A com o valor (${campoA})`
        document.querySelector('#error-mensagem').style.color = "black"
        document.querySelector('#mensagem').style.display = 'none'
        document.querySelector('#error-mensagem').style.display = "block"
        

    } else if (campoA || campoB == 0){
        document.querySelector('#campo-a').style.border = "1px solid red"
        document.querySelector('#campo-b').style.border = "1px solid red"
    
    } 
}

