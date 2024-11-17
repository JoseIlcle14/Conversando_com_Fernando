
// quando o botão for clicado as falas serão mudadas
let fala = document.getElementById("falas")
const botao = document.getElementById('botao')

botao.addEventListener('click', function(){
    fala.textContent = ("Olá eu sou Fernando")
})