// Função para mudar a imagem
function mudarImagem(){
    const icon = document.querySelector("#h-uicon");

    if(icon.style.transform === "rotate(360deg)"){
        icon.style.transform = "rotate(0deg)";
        icon.style.transition = "transform 1s";}
        else{
        icon.style.transform = "rotate(360deg)";}
}

function botaoVermelhoClicado(){
    const botao = document.querySelector(".botao-vermelho")
    botao.classList.toggle("clicked")
}
function botaoAmareloClicado(){
    const botao = document.querySelector(".botao-amarelo")
    botao.classList.toggle("clicked")
}
function botaoVerdeClicado(){
    const botao = document.querySelector(".botao-verde")
    botao.classList.toggle("clicked")
}
function botaoAzulClicado(){
    const botao = document.querySelector(".botao-azul")
    botao.classList.toggle("clicked")
}