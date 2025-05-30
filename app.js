const icones = [
    "/NewGamePlus/assets/imgs/icons/baseIcon.png",
    "/NewGamePlus/assets/imgs/icons/balatroIcon.png",
    "/NewGamePlus/assets/imgs/icons/omoriIcon.png",
    "/NewGamePlus/assets/imgs/icons/sonicIcon.png",
    "/NewGamePlus/assets/imgs/icons/grisIcon.png",
    "/NewGamePlus/assets/imgs/icons/asheIcon.png",
    "/NewGamePlus/assets/imgs/icons/ttmIcon.png",
    "/NewGamePlus/assets/imgs/icons/tsushimaIcon.png"
];

const icone = document.getElementById("UIcon");

//Função blabla pra funcionar lá
function imagemRandom(){
    const rand = Math.floor(Math.random() * icones.length);
    const rndIcon = icones[rand];

    icone.src = rndIcon;
}

// Função para rodar o icone
function girarImagem(){
    const icon = document.getElementById("UIcon");

    if(icon.style.transform == "rotate(0deg)"){
        icon.style.transform = "rotate(360deg)";
        icon.style.transition = "transform 1s";
        console.log('rodado')
    }else{
        icon.style.transform = "rotate(0deg)";
        console.log('rodado novamente')
    }
    
}

//Event Listener pra clicar no icone
icone.addEventListener("click", imagemRandom);
icone.addEventListener("click", girarImagem);

        

//Botões de avaliação

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