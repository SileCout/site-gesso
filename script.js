let index = 0;

const slides = document.getElementById("slides");
const total = document.querySelectorAll(".slide").length;
const dots = document.querySelectorAll(".dots span");

function atualizar() {
    // Move os slides
    slides.style.transform = `translateX(-${index * 100}%)`;
    
    // Atualiza as bolinhas (dots)
    dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
    });
}

function avancar() {
    index++;
    if (index >= total) index = 0;
    atualizar();
}

function voltar() {
    index--;
    if (index < 0) index = total - 1;
    atualizar();
}

function irPara(i) {
    index = i;
    atualizar();
}

// --- NOVO: Faz as seções (E-mail e Botões) aparecerem ao rolar ---
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", reveal);

// Inicializa o estado das bolinhas
atualizar();
