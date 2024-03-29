// Para deixar os cards apagados e colorir ao passar o mouse

const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.classList.remove('apagado');
  });

  card.addEventListener('mouseleave', () => {
    card.classList.add('apagado');
  });
});


//mudar o tema para escuro ou claro
let temaAtual = false;

function mudarTema(){

  const bgHeader = document.querySelector('.topo');
  const link = document.querySelectorAll('.nav-link');

  if(!temaAtual){
    bgHeader.style.backgroundColor = '#191919';

    link.forEach((links) =>{
      links.style.color = '#fff';
    });


    console.log('escuro');
  }else{
    bgHeader.style.backgroundColor = '#fff';
    link.forEach((links) => {
      links.style.color = 'var(--bs-nav-link-color)';
    });
  }

  temaAtual = !temaAtual;
}

let buttonTema = document.querySelector('.theme-switch__container');
buttonTema.addEventListener("click", mudarTema);
