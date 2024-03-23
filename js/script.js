const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.classList.remove('apagado');
  });

  card.addEventListener('mouseleave', () => {
    card.classList.add('apagado');
  });
});
