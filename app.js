// Função para mudar a imagem
function mudarImagem(){
    const icon = document.querySelector("#h-uicon");

    if(icon.style.transform === "rotate(360deg)"){
        icon.style.transform = "rotate(0deg)";
        icon.style.transition = "transform 1s";}
        else{
        icon.style.transform = "rotate(360deg)";}
}

// function botaoVermelhoClicado(){
//     let botao = document.getElementById("").style.backgroundColor = "red";
//     console.log(botao);
// }


// function botaoAmareloClicado(){
//     const botao = document.querySelector(".botao-amarelo")
//     botao.classList.toggle("clicked")
// }
// function botaoVerdeClicado(){
//     const botao = document.querySelector(".botao-verde")
//     botao.classList.toggle("clicked")
// }
// function botaoAzulClicado(){
//     const botao = document.querySelector(".botao-azul")
//     botao.classList.toggle("clicked")
// }

//  document.querySelectorAll(".botao").forEach(botao => {
//     botao.addEventListener("click", function(e) {
//         e.preventDefault();
        
//         const revista = this.getAttribute("data-revista");
//         document.querySelectorAll(`.botao[data-revista="${revista}"]`).forEach(b => {
//             b.classList.remove("clicked");
//         });

//         this.classList.toggle("clicked");

//     });
    
// });

const grupos = document.querySelectorAll(".botoes");

grupos.forEach(grupo => {
    const botoes = grupo.querySelectorAll(".botao");
    
    botoes.forEach(botao => {
        botao.addEventListener("click", function(e) {
            e.preventDefault();
            
            botoes.forEach(b => b.classList.remove("clicked"));

            this.classList.add("clicked");

        });
    });
});