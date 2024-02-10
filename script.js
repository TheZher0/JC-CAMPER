
const toggler = document.querySelector(".toggler");
const navMenu = document.querySelector("#navMenu");

toggler.addEventListener('click', function () {
    navMenu.classList.toggle("active")
});

const scroll = document.getElementById("scroll");

scroll.addEventListener('click', () => {
    document.querySelector(".get-started").scrollIntoView({ behavior: 'smooth' });
})

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