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
  const bgMaquinaEscrever = document.querySelector('.banner-bg');
  const bgProjetos = document.querySelector('.bg-projetos');
  const txtMaqEscrever = document.querySelector('.line-1');
  const bgAbout = document.querySelector('#about');
  const txtAbout = document.querySelector('.text-about');
  const bgHab = document.querySelector('.bg-hab');
  const bgCard = document.querySelectorAll('.meuCard');
  const bgTrajetoria = document.querySelector('#trajetoria');
  const bgFooter = document.querySelector('#rodape');

  if(!temaAtual){
    bgHeader.style.backgroundColor = '#191919';
    bgMaquinaEscrever.style.backgroundColor = 'rgba(25, 25, 25, .8)';
    bgProjetos.style.backgroundColor = 'rgba(25, 25, 25, .8)';
    txtMaqEscrever.style.color = '#fff';
    bgAbout.style.backgroundColor = 'rgba(25, 25, 25)';
    txtAbout.style.color = '#fff';
    bgHab.style.backgroundColor = 'rgba(25, 25, 25, .7)';
    bgTrajetoria.style.backgroundColor = 'rgba(25, 25, 25)';
    bgFooter.style.backgroundColor = 'rgba(0, 0, 0)';
    

    link.forEach((links) =>{
      links.style.color = '#fff';
    });

    bgCard.forEach((cards) =>{
      cards.style.backgroundColor = 'rgba(25, 25, 25, .7)';
    });

  }else{
    bgHeader.style.backgroundColor = '#fff';
    bgMaquinaEscrever.style.backgroundColor = 'transparent';
    bgProjetos.style.backgroundColor = 'transparent';
    txtMaqEscrever.style.color = '#000';
    bgAbout.style.backgroundColor = 'rgba(255, 255, 255)';
    txtAbout.style.color = '#191919';
    bgHab.style.backgroundColor = 'rgba(255, 255, 255, .2)';
    bgTrajetoria.style.backgroundColor = 'rgba(255, 255, 255)';
    bgFooter.style.backgroundColor = '#d7d7d7';

    link.forEach((links) => {
      links.style.color = 'var(--bs-nav-link-color)';
    });

    bgCard.forEach((cards) => {
      cards.style.backgroundColor = 'rgba(255, 255, 255, .7)';
    });
  }

  temaAtual = !temaAtual;
}

let buttonTema = document.querySelector('.theme-switch__container');
buttonTema.addEventListener("click", mudarTema);
