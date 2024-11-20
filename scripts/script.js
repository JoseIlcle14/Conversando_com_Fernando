
// quando o botão for clicado as falas serão mudadas
const botao = document.getElementById('botao')
let resposta = document.getElementById('respostas')
botao.addEventListener('click', function(){
    let fala = document.getElementById("falas")
    fala.textContent = ''
    resposta.style.display = 'flex'
    botao.style.display = "none"
})

// função pra mudar a imagem
botao.addEventListener('click', function() {
    let container = document.getElementById("fernando") // minha div
    let img = container.querySelector("img") // selecionando imagem da div 
    img.src = "/icons/fernando sorriso aberto.png"
})

// gera as perguntas pré-estabelecidas
botao.addEventListener('click', GerarPerguntas )
function GerarPerguntas(){
    let perguntas = ['voce gosta de frutas? ', 'tudo bem com vc?', 'gosto de maçãs']
    let fala = document.getElementById("falas")
    fala.textContent = (perguntas[0])
}


