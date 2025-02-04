
// quando o botão for clicado as falas serão mudadas
const botao = document.querySelector('.botao')
const ok = document.querySelector('.ok')
const respostas = document.querySelector('#respostas')
const proximo = document.querySelector('.proxima-pergunta')
let fala = document.getElementById("falas")
let perguntaindex = 0
let container = document.getElementById("fernando") // minha div
let img = container.querySelector("img") // selecionando imagem da div 
let acertos = 0

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
botao.addEventListener('click', function () {

    esconderRespostas()

    fala.textContent = 'Vou começar com algumas perguntas básicas, ok?'
    botao.style.display = 'none'
    ok.style.display = 'flex'
    img.src = "../icons/fernando sorriso aberto.png"

})


ok.addEventListener('click', ProximasQuestões)


function ProximasQuestões() {

    resetarEstado()

    if (perguntas.length === perguntaindex) {
        return encerrarJogo()
    }
    // faz os textos das perguntas aparecerem
    img.src = "../icons/fernando confuso.png"
    fala.textContent = perguntas[perguntaindex].question
    perguntas[perguntaindex].answers.forEach(answer => {
        const NewAnswer = document.createElement("button")
        NewAnswer.classList.add("Opçao", 'answer')
        NewAnswer.textContent = answer.text
        if (answer.correct) {
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

function resetarEstado() {
    // apaga os itens ateriores para colocar novos
    while (respostas.firstChild) {
        respostas.removeChild(respostas.firstChild)
    }

    document.body.removeAttribute("class")
    //por algum motivo não está escondendo o botão
    proximo.style.display = 'none';
}

function VerificarResposta(event) {
    const answerCliked = event.target

    if (answerCliked.dataset.correct) {
        document.body.classList.add('correct')
        img.src = "../icons/fernando sorriso aberto.png"
        proximo.style.display = 'flex'
        acertos++
    } else {
        document.body.classList.add('incorrect')
        img.src = "../icons/fernando chateado.png"
        proximo.style.display = 'flex'
    }

    document.querySelectorAll(".answer").forEach(input => {
        if (input.dataset.correct) {
            input.classList.add("correct")
        } else {
            input.classList.add("incorrect")
        }
        input.disabled = true


    })
    proximo.classList.remove("hide")
    perguntaindex++
}

function encerrarJogo() {
    const total = perguntas.length
    const performance = Math.floor(acertos * 100 / total)
    proximo.style.display = 'none';

    let message = ""

    switch (true) {
        case (performance >= 90):
            message = "Excelente!"
            img.src = "../icons/fernando sorriso aberto.png"
            break
        case (performance >= 70):
            message = "Muito bom!"
            img.src = "../icons/fernando_feliz.png"
            break
        case (performance >= 50):
            message = "Bom!"
            img.src = "../icons/fernando sorriso neutro.png"
            break
        default:
            message = "Nada mal, mas dá pra melhorar"
            img.src = "../icons/fernando chateado.png"
    }
    fala.innerHTML =
        `
        <p>
            Você acertou ${acertos} de ${total} questões!
            <span> Resultado: ${message}</span>
        </p>
        <div class = "botao">
            <a href="../templates/index.html"><input type="button" value="Reiniciar"></a>
        </div>

    `
}



const perguntas = [
    {
        question: "¿Cuál es la forma negativa del imperativo del verbo hablar (tú)?",
        answers: [
            { text: "No hablas", correct: false },
            { text: "No hables", correct: true },
            { text: "No hablás", correct: false },
            { text: "No hablar", correct: false },
        ]
    },
    {
        question: "En el imperativo negativo español, ¿cuál de las siguientes afirmaciones es cierta para los verbos regulares?",
        answers: [
            { text: "La conjugación es la misma que la del presente de indicativo", correct: false },
            { text: "La conjugación utiliza la forma del presente de subjuntivo", correct: true },
            { text: "La conjugación utiliza la forma gerundio", correct: false },
            { text: "No hay reglas específicas para el imperativo negativo", correct: false },
        ]
    },
    {
        question: "Elija la opción correcta para el imperativo negativo de 'comer' en el pronombre 'vosotros/as':",
        answers: [
            { text: "No coméis", correct: false },
            { text: "No coma", correct: false },
            { text: "No comáis", correct: true },
            { text: "No comen", correct: false },
        ]
    },
    {
        question: "Para el verbo 'vivir', ¿cuál es la forma correcta del imperativo negativo para el pronombre 'usted'?",
        answers: [
            { text: "No vive", correct: false },
            { text: "No viva", correct: true },
            { text: "No vivas", correct: false },
            { text: "No viváis", correct: false },
        ]
    },
    {
        question: "¿Cuál es la forma correcta de 'no bailar' en el imperativo negativo?",
        answers: [
            { text: "No bailes", correct: true },
            { text: "No baila", correct: false },
            { text: "No bailará", correct: false },
            { text: "No bailando", correct: false },
        ]
    },
    {
        question: "¿Cuál es la forma imperativa negativa correcta de 'leer' para el pronombre 'nosotros/as'?",
        answers: [
            { text: "No leamos", correct: true },
            { text: "No leéis", correct: false },
            { text: "No leámos", correct: false },
            { text: "No leyeramos", correct: false },
        ]
    },
    {   
        question: "¿Cómo se dice 'no trabajar' en el imperativo negativo?",
        answers: [
            { text: "No trabaja", correct: false },
            { text: "No trabajes", correct: true },
            { text: "No trabajando", correct: false },
            { text: "No trabajará", correct: false },
        ]
    },
    {
        question: "En el imperativo negativo, ¿cuál es la conjugación correcta del verbo 'abrir' para 'tú'?",
        answers: [
            { text: "No abrís", correct: false },
            { text: "No abra", correct: false },
            { text: "No abras", correct: true },
            { text: "No abres", correct: false },
        ]
    },
    {
        question: "Identifique la forma incorrecta del imperativo negativo:",
        answers: [
            { text: "No hables(tú)", correct: false },
            { text: "No vivamos(nosotros/as)", correct: false },
            { text: "No coman(ustedes)", correct: false },
            { text: "No habla(tú)", correct: true },
        ]
    },
    {
        question: "¿Cuál de las siguientes frases es correcta en su uso del imperativo negativo?",
        answers: [
            { text: "No corres en el pasillo", correct: false },
            { text: "No corras en el pasillo", correct: false },
            { text: "No corramos en el pasillo", correct: false },
            { text: "Ambas b e c.", correct: true },
        ]
    },

]
