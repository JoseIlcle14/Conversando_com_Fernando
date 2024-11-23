
// quando o botão for clicado as falas serão mudadas
const botao = document.querySelector('.botao')
const ok = document.querySelector('.ok')
const respostas = document.querySelector('#respostas')
let fala = document.getElementById("falas")
let perguntaindex = 0
let container = document.getElementById("fernando") // minha div
let img = container.querySelector("img") // selecionando imagem da div 



// interação inicial
botao.addEventListener('click', function(){
    fala.textContent = 'Vou começar com algumas perguntas básicas, ok?'
    botao.style.display = 'none'
    ok.style.display = 'flex'
    img.src = "/icons/fernando sorriso aberto.png"
})


ok.addEventListener('click', ProximasQuestões)


function ProximasQuestões(){   
    // apaga os itens ateriores para colocar novos
    while(respostas.firstChild){
        respostas.removeChild(respostas.firstChild)
    }
    // faz os textos das perguntas aparecerem
    img.src = "/icons/fernando confuso.png"
    fala.textContent = perguntas[perguntaindex].question
    perguntas[perguntaindex].answers.forEach(answer => {
        const NewAnswer = document.createElement("button")
        NewAnswer.classList.add( "Opçao", 'answer')
        NewAnswer.textContent = answer.text
        if (answer.correct){
            NewAnswer.dataset.correct = answer.correct
        }
        respostas.appendChild(NewAnswer)

        NewAnswer.addEventListener('click', VerificarResposta)
    } )
}

function VerificarResposta(event){
    const answerCliked = event.target

    if( answerCliked.dataset.correct){
        document.body.classList.add('correct')
        img.src = "/icons/fernando sorriso aberto.png"
    }else{
        document.body.classList.add('incorrect')
        img.src = "/icons/fernando chateado.png"
    }
}


























const perguntas = [
    {
        question: "Qual das opções a seguir tem um verbo imperativo negativo regular? ",
        answers :[
            { text: "Opção 01" , correct : true},
            { text: "Opção 02" , correct : false},
    
        ]
    }
]