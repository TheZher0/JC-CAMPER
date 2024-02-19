document.addEventListener('DOMContentLoaded', function () {
  const toggler = document.querySelector('.toggler');
  const navMenu = document.querySelector('.nav-links');
  const responsiveLinks = document.querySelector('.responsive-links');
  const closeBtn = document.querySelector('.close-btn');

  toggler.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      responsiveLinks.style.display = (responsiveLinks.style.display === 'flex') ? 'none' : 'flex';
      closeBtn.classList.toggle('active'); /* Cambia para alternar la clase 'active' */
  });

  closeBtn.addEventListener('click', () => {
      navMenu.classList.remove('active');
      responsiveLinks.style.display = 'none';
      closeBtn.classList.remove('active');
  });

  // Evitamos que el clic en el botón propague el evento y cierre el menú
  toggler.addEventListener('click', (event) => {
      event.stopPropagation();
  });

  // Cerramos el menú cuando se carga la página
  navMenu.classList.remove('active');
  responsiveLinks.style.display = 'none';
  closeBtn.style.display = 'none';
});

/*
const openMenuBtn = document.querySelector('#openMenuBtn');
const closeMenuBtn = document.querySelector('#closeMenuBtn');
const menu = document.querySelector('#menu');

openMenuBtn.addEventListener('click', () => {
  handleViewTransition(openMenu);
});

closeMenuBtn.addEventListener('click', () => {
  handleViewTransition(closeMenu);
});

// Close menu by Press Escape(ESC)
function handleCloseWithESC(e) {
  if (e.key == 'Escape') {
    handleViewTransition(closeMenu);
  }
}

function openMenu() {
  menu.classList.add('open');
  closeMenuBtn.focus();
  window.addEventListener('keyup', handleCloseWithESC);
}

function closeMenu() {
  menu.classList.remove('open');
  openMenuBtn.focus();
  window.removeEventListener('keyup', handleCloseWithESC);
}
*/


//https://api.whatsapp.com/send?phone= ----> implementacion was