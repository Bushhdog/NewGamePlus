//Referenciando elementos DOM
const prevBtn = document.querySelector("#ant-btn");
const nextBtn = document.querySelector("#prox-btn");
const livro = document.querySelector("#book");

const paper1 = document.querySelector("#p1")
const paper2 = document.querySelector("#p2")
const paper3 = document.querySelector("#p3")

// Event Listeners
prevBtn.addEventListener("click", irAnteriorPag);
nextBtn.addEventListener("click", irProxPag);

//Logicas padrões
let currentLocation = 1;
let numOfPapers = 3;
let maxLocation = numOfPapers + 1;

function abreLivro() {
    book.style.transform = "translateX(50%)";
    prevBtn.style.transform = "translateX(-180px)";
    nextBtn.style.transform = "translateX(180px)";
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
                paper1.style.zIndex = 3;
                break;
            case 3:
                paper2.classList.remove("flipped");
                paper2.style.zIndex = 2;
                break;
            case 4:
                abreLivro();
                paper3.classList.remove("flipped");
                paper3.style.zIndex = 1;
                break;
            default:
                throw new Error("estado desconhecido");
        }
        currentLocation--;
    }
}

