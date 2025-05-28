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

    window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const capa = urlParams.get('capa');

    if (capa) {
        document.getElementById("capa").src = `../assets/imgs/rev/${capa}`;
    }

     if (capa == "CapaBalatro.jpg"){
        document.getElementById("myVideo").style.filter = "hue-rotate(110deg)";
     }else if (capa == "CapaOmori.jpg"){
        document.getElementById("myVideo").style.filter = "saturate(0%)";
    }else if (capa == "CapaSonic.png"){
        document.getElementById("myVideo").style.filter = "hue-rotate(150deg) brightness(1.5)";
    }else if (capa == "CapaGris.jpg"){
        document.getElementById("myVideo").style.filter = "hue-rotate(100deg)";
    }else if (capa == "CapaLol.png"){
        document.getElementById("myVideo").style.filter = "hue-rotate(330deg)";
    }else if (capa == "CapaTTM.png"){
        document.getElementById("myVideo").style.filter = "hue-rotate(20deg)";
    }

    }