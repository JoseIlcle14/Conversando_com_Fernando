
// quando o botão for clicado as falas serão mudadas
const botao = document.getElementById('botao')
let resposta = ['Dizer sim', 'ES']

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
    let perguntas = [
        '¿En qué contexto utilizamos los verbos imperativos negativos regulares?',
        '¿Los verbos imperativos negativos regulares terminados en AR tienen terminación en la persona TÚ, son iguales a...?'
    ]
    let fala = document.getElementById("falas")
    fala.textContent = (perguntas[0])
    if (perguntas[0]) {
        let Opção1 = document.getElementById('Opçao1')
        let Opção2 = document.getElementById('Opçao2')
        Opção2.value = 'Dizer sim'        
        Opção1.value = 'Dizer não'
    }
}


