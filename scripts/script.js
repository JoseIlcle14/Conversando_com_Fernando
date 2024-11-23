
// quando o botão for clicado as falas serão mudadas
const botao = document.querySelector('.botao')
const ok = document.querySelector('.ok')
const respostas = document.querySelector('#respostas')
const proximo = document.querySelector('.proxima-pergunta')
let fala = document.getElementById("falas")
let perguntaindex = 0
let container = document.getElementById("fernando") // minha div
let img = container.querySelector("img") // selecionando imagem da div 

proximo.addEventListener("click", ProximasQuestões)

//Função para esconder o botão Si e No
function esconderRespostas() {
    respostas.style.display = 'none';  // Esconde
    proximo.style.display = 'none'
}

// Função para mostrar o botão Si e No 
function mostrarRespostas() {
    respostas.style.display = 'flex';  // Mostra
}

addEventListener('load', function () {
    esconderRespostas();  // Esconde os botões na parte Este é Fernando, ele irá ajudá-lo a estudar...
});

// interação inicial
botao.addEventListener('click', function(){

    esconderRespostas()

    fala.textContent = 'Vou começar com algumas perguntas básicas, ok?'
    botao.style.display = 'none'
    ok.style.display = 'flex'
    img.src = "../icons/fernando sorriso aberto.png"
    
})


ok.addEventListener('click', ProximasQuestões)


function ProximasQuestões(){   
    
    resetarEstado()
    // faz os textos das perguntas aparecerem
    img.src = "../icons/fernando confuso.png"
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
    })

     // Esconde o botão "OK" para que apareça só opcão 1 e 2
    ok.style.display = 'none';

    // Mostra os botões Si e No 
    mostrarRespostas()
}

function resetarEstado(){
    // apaga os itens ateriores para colocar novos
    while(respostas.firstChild){
        respostas.removeChild(respostas.firstChild)
    }

    document.body.removeAttribute("class")
    //por algum motivo não está escondendo o botão
    proximo.classList.add("hide")
}

function VerificarResposta(event){
    const answerCliked = event.target

    if( answerCliked.dataset.correct){
        document.body.classList.add('correct')
        img.src = "../icons/fernando sorriso aberto.png"
        proximo.style.display = 'flex'
    }else{
        document.body.classList.add('incorrect')
        img.src = "../icons/fernando chateado.png"
        proximo.style.display = 'flex'
    }

    document.querySelectorAll(".answer").forEach(input =>{
        if (input.dataset.correct) {
            input.classList.add("correct")
        }else{
            input.classList.add("incorrect")
        }
        input.disabled = true


    })
    proximo.classList.remove("hide")
    perguntaindex++
}



























const perguntas = [
    {
        question: "Qual é a forma negativa do imperativo para o verbo 'hablar' (tú)?",
        answers :[
            { text: "No hablas" , correct : false},
            { text: "No hables" , correct : true},
            { text: "No hablás" , correct : false},
            { text: "No hablar" , correct : false},
        ]
    },
    {
        question: "pergunta 2",
        answers :[
            { text: "resposta 1" , correct : false},
            { text: "resposta 2" , correct : false},
            { text: "resposta 3" , correct : true},
            { text: "resposta 4" , correct : false},
        ]
    } 
]