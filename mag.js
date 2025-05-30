//Referenciando elementos DOM
const prevBtn = document.querySelector("#ant-btn");
const nextBtn = document.querySelector("#prox-btn");
const livro = document.querySelector("#book");

const paper1 = document.querySelector("#p1")
const paper2 = document.querySelector("#p2")
const paper3 = document.querySelector("#p3")
const paper4 = document.querySelector("#p4")
const paper5 = document.querySelector("#p5")
const paper6 = document.querySelector("#p6")

// Event Listeners
prevBtn.addEventListener("click", irAnteriorPag);
nextBtn.addEventListener("click", irProxPag);

//Logicas padrões
let currentLocation = 1;
let numOfPapers = 6; // Número total de páginas
let maxLocation = numOfPapers + 1; 

function abreLivro() {
    book.style.transform = "translateX(50%)";
    prevBtn.style.transform = "translateX(-270px)";
    nextBtn.style.transform = "translateX(270px)";
}

function fechaLivro(taNoInicio) {
    if(taNoInicio){
        book.style.transform = "translateX(0%)";
    }else{
        book.style.transform = "translateX(100%)";
    }
    
    prevBtn.style.transform = "translateX(0px)";
    nextBtn.style.transform = "translateX(0px)";
}

function irProxPag() {
    if(currentLocation < maxLocation){
        switch(currentLocation){
            case 1:
                abreLivro();
                paper1.classList.add("flipped");
                paper1.style.zIndex = 1;
                break;
            case 2:
                paper2.classList.add("flipped");
                paper2.style.zIndex = 2;
                break;
            case 3:
                paper3.classList.add("flipped");
                paper3.style.zIndex = 3;
                break;
            case 4:
                paper4.classList.add("flipped");
                paper4.style.zIndex = 4;
                break;
            case 5:
                paper5.classList.add("flipped");
                paper5.style.zIndex = 5;
                break;
            case 6:
                paper6.classList.add("flipped");
                paper6.style.zIndex = 6;
                fechaLivro();
                break;
            default:
                throw new Error("estado desconhecido");
        }
        currentLocation++;
    }
}

function irAnteriorPag() {
    if(currentLocation > 1){
        switch(currentLocation){
            case 2:
                fechaLivro(true);
                paper1.classList.remove("flipped");
                paper1.style.zIndex = 6;
                break;
            case 3:
                paper2.classList.remove("flipped");
                paper2.style.zIndex = 5;
                break;
            case 4:
                paper3.classList.remove("flipped");
                paper3.style.zIndex = 4;
                break;
            case 5:
                paper4.classList.remove("flipped");
                paper4.style.zIndex = 3;
                break;
            case 6:
                paper5.classList.remove("flipped");
                paper5.style.zIndex = 2;
                break;
            case 7:
                abreLivro();
                paper6.classList.remove("flipped");
                paper6.style.zIndex = 1;
                break;
            default:
                throw new Error("estado desconhecido");
        }
        currentLocation--;
    }
}
// Mudar video
    // Mudar capa

//     window.onload = function() {
//     const urlParams = new URLSearchParams(window.location.search);
//     const capa = urlParams.get('capa');

//     if (capa) {
//         document.getElementById("capa").src = `assets/imgs/rev/${capa}`;
//     }

//      if (capa == "CapaBalatro.jpg"){
//         document.getElementById("myVideo").style.filter = "hue-rotate(110deg)";
//      }else if (capa == "CapaOmori.jpg"){
//         document.getElementById("myVideo").style.filter = "saturate(0%)";
//     }else if (capa == "CapaSonic.png"){
//         document.getElementById("myVideo").style.filter = "hue-rotate(150deg) brightness(1.5)";
//     }else if (capa == "CapaGris.jpg"){
//         document.getElementById("myVideo").style.filter = "hue-rotate(100deg)";
//     }else if (capa == "CapaLol.png"){
//         document.getElementById("myVideo").style.filter = "hue-rotate(330deg)";
//     }else if (capa == "CapaTTM.png"){
//         document.getElementById("myVideo").style.filter = "hue-rotate(20deg)";
//     }else {
//         throw new Error("Capa Não Encontrada.");
//     }
// }

    // Função para rodar o ícone
function mudarImagem(){
    const icon = document.querySelector("#h-uicon");

    if(icon.style.transform === "rotate(0deg)"){
        icon.style.transform = "rotate(360deg)";
        icon.style.transition = "transform 1s";}
        else{
        icon.style.transform = "rotate(0deg)";}
}

    //Dados da revista
    const revistas = {
        //Balatro
        balatro: {
            capa: "CapaBalatro.jpg",
            paginas: [
                "balatro1.jpg", "balatro2.jpg", "balatro3.jpg", "balatro4.jpg", "balatro5.jpg", "balatro6.jpg","balatro7.jpg", "balatro8.jpg", "balatro9.jpg", "balatro10.jpg","balatro11.jpg"
            ],
            estilo: {
                filtro: "hue-rotate(110deg)",
            }
        },
        //Omori
        omori: {
            capa: "CapaOmori.jpg",
            paginas: [
                "omori1.jpg", "omori2.jpg", "omori3.jpg", "omori4.jpg", "omori5.jpg", "omori6.jpg","omori7.jpg", "omori8.jpg", "omori9.jpg", "omori10.jpg","omori11.jpg"
            ],
            estilo: {
                filtro: "saturate(0%)"
            }
        },
        //Gris
        gris: {
            capa: "CapaGris.jpg",
            paginas: [
                "gris1.jpg", "gris2.jpg", "gris3.jpg", "gris4.jpg", "gris5.jpg", "gris6.jpg","gris7.jpg", "gris8.jpg", "gris9.jpg", "gris10.jpg","gris11.jpg"
            ],
            estilo: {
                filtro: "hue-rotate(100deg)"
            }
        },
        //Sonic
        sonic: {
            capa: "CapaSonic.jpg",
            paginas: [
                "sonic1.jpg", "sonic2.jpg", "sonic3.jpg", "sonic4.jpg", "sonic5.jpg", "sonic6.jpg","sonic7.jpg", "sonic8.jpg", "sonic9.jpg", "sonic10.jpg","sonic11.jpg"
            ],
            estilo: {
                filtro: "hue-rotate(150deg) brightness(1.5)"
            }
        },
        //Lol
        lol: {
            capa: "CapaLol.jpg",
            paginas: [
                "Lol1.jpg", "Lol2.jpg", "Lol3.jpg", "Lol4.jpg", "Lol5.jpg", "Lol6.jpg","Lol7.jpg", "Lol8.jpg", "Lol9.jpg", "Lol10.jpg","Lol11.jpg"
            ],
            estilo: {
                filtro: "hue-rotate(330deg)"
            }
        },
        //TTM
        ttm: {
            capa: "CapaTTM.jpg",
            paginas: [
                "ttm1.jpg", "ttm2.jpg", "ttm3.jpg", "ttm4.jpg", "ttm5.jpg", "ttm6.jpg","ttm7.jpg", "ttm8.jpg", "ttm9.jpg", "ttm10.jpg","ttm11.jpg"
            ],
            estilo: {
                filtro: "hue-rotate(20deg)"
            }
        },
        got: {
            capa: "CapaGot.jpg",
            paginas: [
                "got1.jpg", "got2.jpg", "got3.jpg", "got4.jpg", "got5.jpg", "got6.jpg","got7.jpg", "got8.jpg", "got9.jpg", "got10.jpg","got11.jpg"
            ],
            estilo: {
                filtro: "hue-rotate(120deg) saturate(1.3)"
            }
        }
    }

    function carregarRevista() {
        const urlParams = new URLSearchParams(window.location.search);
        const nomeRevista = urlParams.get('revista');

        if (!nomeRevista || !revistas[nomeRevista]) {
            console.error("Revista Não Encontrada.");
            return;
        }
        
        const revista = revistas[nomeRevista];

        //1. Atualizar a capa
        document.getElementById("capa").src = `revistas/Capas/${revista.capa}`;

        //2. Atualizar as páginas
        revista.paginas.forEach((pagina, index) => {
            const paginaElement = document.getElementById(`pagina-${index + 1}`);
            if (paginaElement) {
                paginaElement.src = `revistas/${nomeRevista}/${pagina}`;
            }
        });
        //3. Aplicar o estilo
        document.body.style.background = revista.estilo.filtro;
        document.getElementById("myVideo").style.filter = revista.estilo.filtro;
    }

    // Executa quando a página carregar
    window.onload = carregarRevista;
    
const icones = [
    "assets/imgs/icons/baseIcon.png",
    "assets/imgs/icons/balatroIcon.png",
    "assets/imgs/icons/omoriIcon.png",
    "assets/imgs/icons/sonicIcon.png",
    "assets/imgs/icons/grisIcon.png",
    "assets/imgs/icons/asheIcon.png",
    "assets/imgs/icons/ttmIcon.png",
    "assets/imgs/icons/tsushimaIcon.png"
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

