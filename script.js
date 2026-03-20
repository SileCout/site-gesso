function revelarElementos() {
  const elementos = document.querySelectorAll('.reveal');

  elementos.forEach(el => {
    const posicao = el.getBoundingClientRect().top;
    const alturaTela = window.innerHeight;

    if (posicao < alturaTela - 100) {
      el.classList.add('active');
    }
  });
}

window.addEventListener('scroll', revelarElementos);
window.addEventListener('load', revelarElementos);